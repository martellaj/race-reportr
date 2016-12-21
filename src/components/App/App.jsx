import './App.css';
import InputContainer from '../InputContainer/InputContainer';
import OutputContainer from '../OutputContainer/OutputContainer';
import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            raceName: ''
        };
    }

    setRaceName(raceName) {
        this.setState({ raceName });
    }

    render() {
        return (
            <div>
                <h2>App component</h2>
                <div className="app__container">
                    <InputContainer />
                    <OutputContainer />
                </div>
            </div>
        );
    }
}