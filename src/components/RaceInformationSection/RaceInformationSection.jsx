import './RaceInformationSection.css';
import classNames from 'classnames';
import RaceInfoInput from '../RaceInfoInput/RaceInfoInput';
import React, { Component } from 'react';

export default class RaceInformationSection extends Component {
    constructor() {
        super();

        this.moveSectionUp = this.moveSectionUp.bind(this);
        this.moveSectionDown = this.moveSectionDown.bind(this);
    }

    moveSectionUp() {
        this.props.moveSectionUp('raceInfo');
    }

    moveSectionDown() {
        this.props.moveSectionDown('raceInfo');
    }

    render() {
        let sectionClasses = classNames({
            [`${this.props.sectionClass}`]: true,
            raceInformationSection: true
        });

        return (
            <div className={sectionClasses}>
                <div className="sectionMovers">
                    <button onClick={this.moveSectionUp}>up</button>
                    <button onClick={this.moveSectionDown}>down</button>
                </div>
                <div className="raceInformation__content">
                    <h3 className="raceInformationHeader">race information</h3>
                    <div className="raceInformationBody">
                        <RaceInfoInput label="name" value={this.props.raceInformation.name.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                        <RaceInfoInput label="date" value={this.props.raceInformation.date.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                        <RaceInfoInput label="distance" value={this.props.raceInformation.distance.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                        <RaceInfoInput label="location" value={this.props.raceInformation.location.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                        <RaceInfoInput label="website" value={this.props.raceInformation.website.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                        <RaceInfoInput label="strava" value={this.props.raceInformation.strava.value} onValueChange={this.props.setRaceInformationValue} onExcludeChange={this.props.setRaceInformationExclude} />
                    </div>
                </div>
            </div>
        );
    }
}