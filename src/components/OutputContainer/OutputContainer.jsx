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
            <PostView raceInformationMarkdown={this.convertRaceInformationToMarkdown()} />
        );
    }

    renderSourceView() {
        return (
            <SourceView raceInformationMarkdown={this.convertRaceInformationToMarkdown()} />
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