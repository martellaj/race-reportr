import './PostView.css';
import React, { Component } from 'react';

export default class PostView extends Component {
    render() {
        return (
            <div className="postView">
                <p>{this.props.raceInformationMarkdown}</p>
            </div>
        );
    }
}