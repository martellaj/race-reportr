import './App.css';
import InputContainer from '../InputContainer/InputContainer';
import OutputContainer from '../OutputContainer/OutputContainer';
import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            raceDetails: {
                raceName: ''
            }
        };

        this.setRaceName = this.setRaceName.bind(this);
    }

    setRaceName(raceName) {
        this.setState({
            raceDetails: {
                raceName
            }
        });
    }

    render() {
        return (
            <div className="app">
                <h2>App component</h2>
                <div className="app__container">
                    <InputContainer setRaceName={this.setRaceName} />
                    <OutputContainer raceDetails={this.state.raceDetails} />
                </div>
            </div>
        );
    }
}