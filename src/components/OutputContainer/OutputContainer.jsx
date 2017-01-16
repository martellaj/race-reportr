import './OutputContainer.css';
import { copyTextToClipboard } from '../../utilities/clipboard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import base from '../../utilities/base';
import PostView from '../PostView/PostView';
import React, { Component } from 'react';
import SourceView from '../SourceView/SourceView';

export default class OutputContainer extends Component {
    constructor() {
        super();

        this.state = {
            isPostView: true,
            selectedIndex: 0,
            copyButtonText: 'copy source'
        };

        this.onViewSelect = this.onViewSelect.bind(this);
        this.convertRaceInformationToMarkdown = this.convertRaceInformationToMarkdown.bind(this);
        this.convertGoalsToMarkdown = this.convertGoalsToMarkdown.bind(this);
        this.convertPicturesToMarkdown = this.convertPicturesToMarkdown.bind(this);
        this.convertSplitsToMarkdown = this.convertSplitsToMarkdown.bind(this);
        this.convertTextSectionsToMarkdown = this.convertTextSectionsToMarkdown.bind(this);
        this.renderMarkdown = this.renderMarkdown.bind(this);
        this.onTabSelect = this.onTabSelect.bind(this);
        this.onCopyClick = this.onCopyClick.bind(this);
        this.logReportGeneratedEvent = this.logReportGeneratedEvent.bind(this);
    }

    renderMarkdown() {
        let markdown = '';

        for (let section of this.props.sections) {
            if (this.props.sections.indexOf(section) !== 0) {
                markdown += '\n';
            }

            switch (section) {
                case 'raceInfo':
                    markdown += this.convertRaceInformationToMarkdown();
                    break;
                case 'goals':
                    markdown += this.convertGoalsToMarkdown();
                    break;
                case 'pictures':
                    markdown += this.convertPicturesToMarkdown();
                    break;
                case 'splits':
                    markdown += this.convertSplitsToMarkdown();
                    break;
                case 'text':
                    markdown += this.convertTextSectionsToMarkdown();
                    break;
                default:
                    break;
            }
        }

        markdown += '*This post was generated using [the new race reportr](https://martellaj.github.io/race-reportr/), a tool built by [/u/BBQLays](https://www.reddit.com/u/bbqlays) for making organized, easy-to-read, and beautiful race reports.*'

        return markdown;
    }

    convertRaceInformationToMarkdown() {
        let markdown = '### Race information\n';

        for (let prop in this.props.raceInformation) {
            if (this.props.raceInformation.hasOwnProperty(prop)) {
                let property = this.props.raceInformation[prop];

                if (!property.exclude && property.value) {
                    if (property.output.indexOf('**Website') > -1 || property.output.indexOf('**Strava') > -1) {
                        let url = property.value;
                        if (url.indexOf('http') === -1) {
                            url = 'http://' + property.value;
                        }

                        markdown += property.output + `[${property.value}](${url})\n`;
                    } else {
                        markdown += property.output + property.value + '\n'
                    }
                }
            }
        }

        return markdown;
    }

    convertGoalsToMarkdown() {
        if (this.props.goals.length === 0) {
            return '';
        }

        let markdown = '### Goals\n';
        markdown += '| Goal | Description | Completed? |\n';
        markdown += '|------|-------------|------------|\n';

        let index = 0;
        for (let goal of this.props.goals) {
            markdown += `| ${this.convertIndexToLetter(index++)} | ${goal.description} | *${this.convertBooleanToWord(goal.completed)}* |\n`;
        }

        return markdown;
    }

    convertPicturesToMarkdown() {
        if (this.props.pictures.length === 0) {
            return '';
        }

        let markdown = '### Pictures\n';
        for (let picture of this.props.pictures) {
            markdown += `* [${picture.description}](${picture.link})\n`;
        }

        return markdown;
    }

    convertSplitsToMarkdown() {
        if (this.props.splitInformation.splits.length === 0) {
            return '';
        }

        let distanceType = this.props.splitInformation.isKm ? 'Kilometer' : 'Mile';

        let markdown = '### Splits\n';
        markdown += `| ${distanceType} | Time |\n`;
        markdown += '|------|------|\n';

        let index = 1;
        for (let split of this.props.splitInformation.splits) {
            markdown += `| ${index++} | ${split} |\n`;
        }

        return markdown;
    }

    convertTextSectionsToMarkdown() {
        if (this.props.textSections.length === 0) {
            return '';
        }

        let markdown = '';
        for (let textSection of this.props.textSections) {
            markdown += `### ${textSection}\n`;
            markdown += 'Lorem ipsum dolor sit amet, quo quis enim in, et vis soleat utroque expetendis. Viris nostro placerat et cum, ut eum nobis noluisse. Eu zril aperiri tincidunt mea. Idque propriae vituperatoribus ex sed.\n\n';
        }

        return markdown;
    }

    convertIndexToLetter(index) {
        return String.fromCharCode(65 + index);
    }

    convertBooleanToWord(value) {
        return value ? 'Yes' : 'No';
    }

    onViewSelect(event) {
        let isPostView = event.target.innerText.indexOf('post') > -1;
        this.setState({
            isPostView
        });
    }

    renderOutputBody() {
        return this.state.isPostView ? this.renderPostView() : this.renderSourceView();
    }

    renderPostView() {
        return (
            <PostView markdown={this.renderMarkdown()} />
        );
    }

    renderSourceView() {
        return (
            <SourceView markdown={this.renderMarkdown()} logReportGeneratedEvent={this.logReportGeneratedEvent} />
        );
    }

    logReportGeneratedEvent() {
        base.push(`reports`, {
            data: this.props.raceInformation
        });
    }

    onTabSelect(index) {
        this.setState({
            isPostView: index === 0,
            selectedIndex: index
        });
    }

    onCopyClick() {
        // Get Markdown source.
        let source = this.renderMarkdown();

        // Copy text to clipboard.
        let success = copyTextToClipboard(source);
        if (success) {
            this.setState({
                copyButtonText: 'copied!'
            });

            setTimeout(() => {
                this.setState({
                    copyButtonText: 'copy source'
                });
            }, 1000);
        }

        // Log event.
        this.logReportGeneratedEvent();
    }

    render() {
        return (
            <div className="outputContainer">
                <button className="copy-button" onClick={this.onCopyClick} children={this.state.copyButtonText}></button>

                <Tabs onSelect={this.onTabSelect} selectedIndex={this.state.selectedIndex}>
                    <TabList>
                        <Tab>preview</Tab>
                        <Tab>source</Tab>
                    </TabList>

                    <TabPanel />
                    <TabPanel />
                </Tabs>

                {this.renderOutputBody()}
            </div>
        );
    }
}