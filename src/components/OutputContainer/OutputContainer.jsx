import './OutputContainer.css';
import classNames from 'classnames';
import PostView from '../PostView/PostView';
import React, { Component } from 'react';
import SourceView from '../SourceView/SourceView';

export default class OutputContainer extends Component {
    constructor() {
        super();

        this.state = {
            isPostView: true
        };

        this.onViewSelect = this.onViewSelect.bind(this);
        this.convertRaceInformationToMarkdown = this.convertRaceInformationToMarkdown.bind(this);
        this.convertGoalsToMarkdown = this.convertGoalsToMarkdown.bind(this);
        this.renderMarkdown = this.renderMarkdown.bind(this);
    }

    renderMarkdown() {
        let markdown = '';

        for (const section of this.props.sections) {
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
                default:
                    break;
            }
        }

        return markdown;
    }

    convertRaceInformationToMarkdown() {
        let markdown = '### Race information\n';

        for (let prop in this.props.raceInformation) {
            let property = this.props.raceInformation[prop];

            if (!property.exclude && property.value) {
                markdown += property.output + property.value + '\n'
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
            markdown += `| ${this.convertIndexToLetter(index++)} | ${goal.description} | ${goal.completed} |\n`;
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

    convertIndexToLetter(index) {
        return String.fromCharCode(65 + index);
    }

    onViewSelect(event) {
        const isPostView = event.target.innerText.indexOf('post') > -1;
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
            <SourceView markdown={this.renderMarkdown()} />
        );
    }

    render() {
        const viewPostClasses = classNames({
            'outputContainer__button': true,
            'outputContainer__button--selected': this.state.isPostView
        });

        const viewSourceClasses = classNames({
            'outputContainer__button': true,
            'outputContainer__button--selected': !this.state.isPostView
        });

        const outputBody = this.renderOutputBody();

        return (
            <div className="outputContainer">
                <div className="outputContainer__viewButtons">
                    <button className={viewPostClasses} onClick={this.onViewSelect}>view post</button>
                    <p>|</p>
                    <button className={viewSourceClasses} onClick={this.onViewSelect}>view source</button>
                </div>
                {outputBody}
            </div>
        );
    }
}