import './InputContainer.css';
import React, { Component } from 'react';

export default class InputContainer extends Component {
    constructor() {
        super();

        this.onRaceNameChange = this.onRaceNameChange.bind(this);
    }

    onRaceNameChange(event) {
        console.log(event.target.value);
        this.props.setRaceName(event.target.value);
    }

    render() {
        return (
            <div className="inputContainer">
                <h2>InputContainer component</h2>
                <input type="text" placeholder="race name" onChange={this.onRaceNameChange} />
            </div>
        );
    }
}