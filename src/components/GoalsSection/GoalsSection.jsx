import './GoalsSection.css';
import classNames from 'classnames';
import GoalInput from '../GoalInput/GoalInput';
import React, { Component } from 'react';

export default class GoalsSection extends Component {
    constructor() {
        super();

        this.moveSectionUp = this.moveSectionUp.bind(this);
        this.moveSectionDown = this.moveSectionDown.bind(this);
        this.addGoal = this.addGoal.bind(this);
    }

    moveSectionUp() {
        this.props.moveSectionUp('goals');
    }

    moveSectionDown() {
        this.props.moveSectionDown('goals');
    }

    renderGoalInputs() {
        let goalInputs = [];
        let i = 0;

        for (const goalInput of this.props.goals) {
            const key = i++;
            goalInputs.push(
                <GoalInput key={key} _key={key} editGoal={this.props.editGoal} removeGoal={this.props.removeGoal} description={goalInput.description} completed={goalInput.completed} />
            );
        }

        return goalInputs;
    }

    addGoal() {
        this.props.addGoal();
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
                    <button onClick={this.addGoal}>add</button>
                    {this.renderGoalInputs()}
                </div>
            </div>
        );
    }
}