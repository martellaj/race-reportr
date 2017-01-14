import './SourceView.css';
import base from '../../utilities/base';
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

    onCopy() {
        if (!this.state.copied) {
            base.push(`reports`, {
                data: this.props.raceInformation
            });

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