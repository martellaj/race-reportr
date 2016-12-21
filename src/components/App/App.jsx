import './App.css';
import InputContainer from '../InputContainer/InputContainer';
import OutputContainer from '../OutputContainer/OutputContainer';
import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            raceInformation: {
                name: {
                    value: 'Seattle Marathon',
                    exclude: false
                },
                distance: {
                    value: '26.2 miles',
                    exclude: false
                },
                date: {
                    value: '11/26/2017',
                    exclude: false
                },
                location: {
                    value: 'Seattle, WA',
                    exclude: false
                },
                website: {
                    value: 'http://www.seattlemarathon.org/',
                    exclude: false
                }
            }
        };

        this.setRaceInformationValue = this.setRaceInformationValue.bind(this);
        this.setRaceInformationExclude = this.setRaceInformationExclude.bind(this);
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
                    <InputContainer raceInformation={this.state.raceInformation} setRaceInformationValue={this.setRaceInformationValue} setRaceInformationExclude={this.setRaceInformationExclude} />
                    <OutputContainer raceInformation={this.state.raceInformation} />
                </div>
            </div>
        );
    }
}