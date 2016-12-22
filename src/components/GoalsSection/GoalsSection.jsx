import './GoalsSection.css';
import classNames from 'classnames';
import GoalInput from '../GoalInput/GoalInput';
import React, { Component } from 'react';

export default class GoalsSection extends Component {
    constructor() {
        super();

        this.moveSectionUp = this.moveSectionUp.bind(this);
        this.moveSectionDown = this.moveSectionDown.bind(this);
    }

    moveSectionUp() {
        this.props.moveSectionUp('goals');
    }

    moveSectionDown() {
        this.props.moveSectionDown('goals');
    }

    render() {
        const sectionClasses = classNames({
            [`${this.props.sectionClass}`]: true,
            goalsSection: true
        });

        return (
            <div className={sectionClasses}>
                <div>
                    <button onClick={this.moveSectionUp}>up</button>
                    <button onClick={this.moveSectionDown}>down</button>
                </div>
                <div>
                    <h3 className="sectionHeader">goals</h3>
                    <GoalInput />
                </div>
            </div>
        );
    }
}