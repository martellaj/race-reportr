import './GoalInput.css';
import React, { Component } from 'react';

export default class GoalInput extends Component {
    constructor() {
        super();

        this.onRemoveClick = this.onRemoveClick.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onCompletedChange = this.onCompletedChange.bind(this);
    }

    onRemoveClick() {
        this.props.removeGoal(this.props._key);
    }

    onDescriptionChange(event) {
        this.props.editGoal(this.props._key, event.target.value, this.props.completed);
    }

    onCompletedChange(event) {
        this.props.editGoal(this.props._key, this.props.description, event.target.checked);
    }

    render() {
        return (
            <div>
                <button onClick={this.onRemoveClick}>remove</button>
                <input ref={(input) => { this.input = input; }} type="text" onChange={this.onDescriptionChange} value={this.props.description} />
                <input type="checkbox" checked={this.props.completed} onChange={this.onCompletedChange} />
            </div>
        );
    }
}