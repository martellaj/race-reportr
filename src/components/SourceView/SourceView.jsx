import './SourceView.css';
import React, { Component } from 'react';

export default class SourceView extends Component {
    constructor() {
        super();

        this.state = {
            copied: false
        };

        this.onTextAreaFocus = this.onTextAreaFocus.bind(this);
        this.onCopy = this.onCopy.bind(this);
    }

    onTextAreaFocus() {
        this.textarea.select();
    }

    // TODO: Somehow log that a report was copied. Best I can do to count
    // how many reports have been generated.
    onCopy() {
        if (!this.state.copied) {
            console.log('copied');
            this.setState({
                copied: true
            });
        }
    }

    render() {
        return (
            <div className="sourceView">
                <textarea ref={(textarea) => { this.textarea = textarea; }} className="sourceView__textArea" readOnly value={this.props.markdown} onFocus={this.onTextAreaFocus} onCopy={this.onCopy} />
            </div>
        );
    }
}