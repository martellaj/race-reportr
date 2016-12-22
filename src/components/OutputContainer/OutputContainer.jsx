import './OutputContainer.css';
import classNames from 'classnames';
import React, { Component } from 'react';

export default class OutputContainer extends Component {
    constructor() {
        super();

        this.state = {
            isPostView: true
        };

        this.onViewSelect = this.onViewSelect.bind(this);
    }

    onViewSelect(event) {
        const isPostView = event.target.innerText.indexOf('post') > -1;
        this.setState({
            isPostView
        });
    }

    render() {
        const viewPostClasses = classNames({
            'outputContainer__button--selected': this.state.isPostView
        });

        const viewSourceClasses = classNames({
            'outputContainer__button--selected': !this.state.isPostView
        });

        return (
            <div className="outputContainer">
                <div className="outputContainer__viewButtons">
                    <button className={viewPostClasses} onClick={this.onViewSelect}>view post</button>
                    <p>|</p>
                    <button className={viewSourceClasses} onClick={this.onViewSelect}>view source</button>
                </div>
            </div>
        );
    }
}