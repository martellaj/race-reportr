import './PostView.css';
import React, { Component } from 'react';
import Markdown from 'react-remarkable';

export default class PostView extends Component {
    render() {
        return (
            <div className="postView">
                <Markdown source={this.props.markdown} />
            </div>
        );
    }
}