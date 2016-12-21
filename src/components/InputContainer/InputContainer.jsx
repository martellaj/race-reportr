import './InputContainer.css';
import RaceInfoInput from '../RaceInfoInput/RaceInfoInput';
import React, { Component } from 'react';

export default class InputContainer extends Component {
    render() {
        return (
            <div className="inputContainer">
                <h2>InputContainer component</h2>
                <h3>race information</h3>
                <RaceInfoInput label="name" value={this.props.raceInformation.name.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                <RaceInfoInput label="distance" value={this.props.raceInformation.distance.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                <RaceInfoInput label="date" value={this.props.raceInformation.date.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                <RaceInfoInput label="location" value={this.props.raceInformation.location.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                <RaceInfoInput label="website" value={this.props.raceInformation.website.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
            </div>
        );
    }
}