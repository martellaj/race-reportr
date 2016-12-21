import './OutputContainer.css';
import React, { Component } from 'react';

export default class OutputContainer extends Component {
    renderRaceName() {
        const raceName = this.props.raceInformation.name;

        if (raceName.exclude || !raceName.value) {
            return '';
        } else {
            return (
                <p>Race name: {raceName.value}</p>
            );
        }
    }

    render() {
        return (
            <div className="outputContainer">
                <h2>OutputContainer component</h2>
                {this.renderRaceName()}
            </div>
        );
    }
}