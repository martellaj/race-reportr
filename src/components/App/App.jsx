import './App.css';
import InputContainer from '../InputContainer/InputContainer';
import OutputContainer from '../OutputContainer/OutputContainer';
import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            sections: ['raceInfo', 'goals'],
            raceInformation: {
                name: {
                    value: 'Seattle Marathon',
                    exclude: false,
                    output: '* **What?** '
                },
                date: {
                    value: 'November 26, 2017',
                    exclude: false,
                    output: '* **When?** '
                },
                distance: {
                    value: '26.2 miles',
                    exclude: false,
                    output: '* **How far?** '
                },
                location: {
                    value: 'Seattle, WA',
                    exclude: false,
                    output: '* **Where?** '
                },
                website: {
                    value: 'http://www.seattlemarathon.org/',
                    exclude: false,
                    output: '* **Website?** '
                }
            }
        };

        this.moveSectionUp = this.moveSectionUp.bind(this);
        this.moveSectionDown = this.moveSectionDown.bind(this);
        this.setRaceInformationValue = this.setRaceInformationValue.bind(this);
        this.setRaceInformationExclude = this.setRaceInformationExclude.bind(this);
    }

    moveSectionUp(section) {
        let sections = this.state.sections;
        let sectionIndex = sections.indexOf(section);
        sections.splice(sectionIndex, 1);
        sections.splice(sectionIndex - 1, 0, section);
        this.setState({ sections });
    }

    moveSectionDown(section) {
        let sections = this.state.sections;
        let sectionIndex = sections.indexOf(section);
        sections.splice(sectionIndex, 1);
        sections.splice(sectionIndex + 1, 0, section);
        this.setState({ sections });
    }

    setRaceInformationValue(facet, value) {
        let state = this.state;
        state.raceInformation[facet].value = value;
        this.setState(state);
    }

    setRaceInformationExclude(facet, value) {
        let state = this.state;
        state.raceInformation[facet].exclude = value;
        this.setState(state);
    }

    render() {
        return (
            <div className="app">
                <h2>App component</h2>
                <div className="app__container">
                    <InputContainer sections={this.state.sections} moveSectionUp={this.moveSectionUp} moveSectionDown={this.moveSectionDown} raceInformation={this.state.raceInformation} setRaceInformationValue={this.setRaceInformationValue} setRaceInformationExclude={this.setRaceInformationExclude} />
                    <OutputContainer raceInformation={this.state.raceInformation} />
                </div>
            </div>
        );
    }
}