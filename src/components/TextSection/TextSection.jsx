import './TextSection.css';
import classNames from 'classnames';
import React, { Component } from 'react';
import TextInput from '../TextInput/TextInput';

export default class TextSection extends Component {
    constructor() {
        super();

        this.addTextSection = this.addTextSection.bind(this);
        this.renderTextInputs = this.renderTextInputs.bind(this);
        this.moveSectionUp = this.moveSectionUp.bind(this);
        this.moveSectionDown = this.moveSectionDown.bind(this);
    }

    renderTextInputs() {
        let textInputs = [];
        let i = 0;

        for (let textInput of this.props.textSections) {
            let key = i++;
            textInputs.push(
                <TextInput key={key} _key={key} sectionName={textInput} editTextSection={this.props.editTextSection} removeTextSection={this.props.removeTextSection} />
            );
        }

        return textInputs;
    }

    addTextSection() {
        this.props.addTextSection();
    }

    moveSectionUp() {
        this.props.moveSectionUp('text');
    }

    moveSectionDown() {
        this.props.moveSectionDown('text');
    }

    render() {
        let sectionClasses = classNames({
            [`${this.props.sectionClass}`]: true,
            textSection: true
        });

        return (
            <div className={sectionClasses}>
                <div className="sectionMovers">
                    <button onClick={this.moveSectionUp}>up</button>
                    <button onClick={this.moveSectionDown}>down</button>
                </div>
                <div className="textSectionContent">
                    <h3 className="sectionHeader">text sections</h3>
                    <button onClick={this.addTextSection}>add</button>
                    {this.renderTextInputs()}
                </div>
            </div>
        );
    }
}