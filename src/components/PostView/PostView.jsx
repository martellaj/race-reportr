import './PostView.css';
import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

export default class PostView extends Component {
    render() {
        return (
            <div className="postView">
                <ReactMarkdown source={this.props.raceInformationMarkdown} />
            </div>
        );
    }
}