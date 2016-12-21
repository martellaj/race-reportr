import './OutputContainer.css';
import React, { Component } from 'react';

export default class OutputContainer extends Component {
    constructor() {
        super();
    }

    render() {
        const raceDetails = this.props.raceDetails;

        return (
            <div className="outputContainer">
                <h2>OutputContainer component</h2>
                <p>Race name: {raceDetails.raceName}</p>
            </div>
        );
    }
}