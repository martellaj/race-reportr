import './SplitInformationSection.css';
import classNames from 'classnames';
import React, { Component } from 'react';
import SplitInput from '../SplitInput/SplitInput';

export default class SplitInformationSection extends Component {
    constructor() {
        super();

        this.moveSectionUp = this.moveSectionUp.bind(this);
        this.moveSectionDown = this.moveSectionDown.bind(this);
        this.addSplit = this.addSplit.bind(this);
        this.onChecked = this.onChecked.bind(this);
    }

    moveSectionUp() {
        this.props.moveSectionUp('splits');
    }

    moveSectionDown() {
        this.props.moveSectionDown('splits');
    }

    addSplit() {
        this.props.addSplit();
    }

    renderSplitInputs() {
        let splitInputs = [];
        let i = 0;

        for (let split of this.props.splitInformation.splits) {
            let key = i++;
            splitInputs.push(
                <SplitInput key={key} _key={key} split={split} editSplit={this.props.editSplit} removeSplit={this.props.removeSplit} />
            );
        }

        return splitInputs;
    }

    onChecked(event) {
        let value = event.target.value;
        let isKm = value === 'kilometers';

        this.props.setDistanceType(isKm);
    }

    render() {
        let sectionClasses = classNames({
            [`${this.props.sectionClass}`]: true,
            splitsSection: true
        });

        return (
            <div className={sectionClasses}>
                <div className="sectionMovers">
                    <button onClick={this.moveSectionUp}>up</button>
                    <button onClick={this.moveSectionDown}>down</button>
                </div>
                <div className="">
                    <h3 className="sectionHeader">splits</h3>
                    <button onClick={this.addSplit}>add</button>
                    <div className="distanceButtons">
                        <label><input type="radio" value="miles" checked={!this.props.splitInformation.isKm} onChange={this.onChecked} />miles</label>
                        <label><input type="radio" value="kilometers" checked={this.props.splitInformation.isKm} onChange={this.onChecked} />kilometers</label>
                    </div>
                    {this.renderSplitInputs()}
                </div>
            </div>
        );
    }
}