import React, { Component } from 'react';

export default class SplitInput extends Component {
    constructor() {
        super();

        this.onRemoveClick = this.onRemoveClick.bind(this);
        this.onSplitChange = this.onSplitChange.bind(this);
    }

    onRemoveClick() {
        this.props.removeSplit(this.props._key);
    }

    onSplitChange(event) {
        this.props.editSplit(this.props._key, event.target.value, this.props.completed);
    }

    render() {
        return (
            <div>
                <button onClick={this.onRemoveClick}>remove</button>
                <input type="text" onChange={this.onSplitChange} value={this.props.split} />
            </div>
        );
    }
}