import './InputContainer.css';
import GoalsSection from '../GoalsSection/GoalsSection';
import PicturesSection from '../PicturesSection/PicturesSection';
import React, { Component } from 'react';
import RaceInformationSection from '../RaceInformationSection/RaceInformationSection';
import SplitInformationSection from '../SplitInformationSection/SplitInformationSection';

export default class InputContainer extends Component {
    constructor() {
        super();

        this.renderSections = this.renderSections.bind(this);
    }

    renderSections() {
        let sections = [];

        for (const section of this.props.sections) {
            switch (section) {
                case 'raceInfo':
                    sections.push(
                        <RaceInformationSection key={sections.length} sectionClass="section" raceInformation={this.props.raceInformation} setRaceInformationValue={this.props.setRaceInformationValue} setRaceInformationExclude={this.props.setRaceInformationExclude}
                        moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} />
                    );
                    break;
                case 'goals':
                    sections.push(
                        <GoalsSection key={sections.length} goals={this.props.goals} addGoal={this.props.addGoal} editGoal={this.props.editGoal} removeGoal={this.props.removeGoal} sectionClass="section" moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} />
                    );
                    break;
                case 'pictures':
                    sections.push(
                        <PicturesSection key={sections.length} sectionClass="section" moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} pictures={this.props.pictures} addPicture={this.props.addPicture} editPicture={this.props.editPicture} removePicture={this.props.removePicture} />
                    );
                    break;
                case 'splits':
                    sections.push(
                        <SplitInformationSection key={sections.length} sectionClass="section" moveSectionUp={this.props.moveSectionUp} moveSectionDown={this.props.moveSectionDown} splitInformation={this.props.splitInformation} addSplit={this.props.addSplit} editSplit={this.props.editSplit} removeSplit={this.props.removeSplit} setDistanceType={this.props.setDistanceType} />
                    );
                    break;
                default:
                    break;
            }
        }

        return sections;
    }

    render() {
        return (
            <div className="inputContainer">
                {this.renderSections()}
            </div>
        );
    }
}