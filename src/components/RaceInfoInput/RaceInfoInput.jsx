import './RaceInfoInput.css';
import classNames from 'classnames';
import React, { Component } from 'react';

export default class RaceInfoInput extends Component {
    constructor() {
        super();

        this.state = {
            buttonText: 'exclude',
            isInputDisabled: false
        };

        this.onExcludeChange = this.onExcludeChange.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onExcludeChange() {
        const isExclude = this.state.buttonText === 'exclude';
        const label =
            this.props.label === 'finish time'
                ? 'finishTime'
                : this.props.label;

        if (isExclude) {
            this.setState({
                buttonText: 'include',
                isInputDisabled: true
            });

            this.props.onExcludeChange(label, true);
        } else {
            this.setState({
                buttonText: 'exclude',
                isInputDisabled: false
            });

            this.props.onExcludeChange(label, false);
        }
    }

    onValueChange(event) {
        const label =
            this.props.label === 'finish time'
                ? 'finishTime'
                : this.props.label;
        this.props.onValueChange(label, event.target.value);
    }

    render() {
        const inputClasses = classNames({
            raceInfoInput__input: true,
            'raceInfoInput__input--disabled': this.state.isInputDisabled
        });

        const labelClasses = classNames({
            raceInfoInput__label: true,
            'raceInfoInput__label--disabled': this.state.isInputDisabled
        });

        return (
            <div className="raceInfoInput">
                <button
                    className="raceInfoInput__button"
                    onClick={this.onExcludeChange}
                >
                    {this.state.buttonText}
                </button>
                <div className="raceInfoInput_inputDiv">
                    <p className={labelClasses}>{this.props.label}</p>
                    <input
                        ref={input => {
                            this.input = input;
                        }}
                        type="text"
                        className={inputClasses}
                        disabled={this.state.isInputDisabled}
                        onChange={this.onValueChange}
                        value={this.props.value}
                    />
                </div>
            </div>
        );
    }
}
