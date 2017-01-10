import './SourceView.css';
import React, { Component } from 'react';

export default class SourceView extends Component {
    constructor() {
        super();

        this.onTextAreaFocus = this.onTextAreaFocus.bind(this);
    }

    onTextAreaFocus() {
        this.textarea.select();
    }

    render() {
        return (
            <div className="sourceView">
                <textarea ref={(textarea) => { this.textarea = textarea; }} className="sourceView__textArea" readOnly value={this.props.markdown} onFocus={this.onTextAreaFocus} />
            </div>
        );
    }
}