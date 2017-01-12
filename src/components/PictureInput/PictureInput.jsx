import React, { Component } from 'react';
import './PictureInput.css';

export default class PictureInput extends Component {
    constructor() {
        super();

        this.onRemoveClick = this.onRemoveClick.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onLinkChange = this.onLinkChange.bind(this);
    }

    onRemoveClick() {
        this.props.removePicture(this.props._key);
    }

    onDescriptionChange(event) {
        this.props.editPicture(this.props._key, this.props.link, event.target.value);
    }

    onLinkChange(event) {
        this.props.editPicture(this.props._key, event.target.value, this.props.description);
    }

    render() {
        return (
            <div className="pictureInput">
                <span className="label">
                    picture #{this.props._key + 1}
                    <button onClick={this.onRemoveClick}>remove</button>
                </span>
                <input type="text" value={this.props.link} onChange={this.onLinkChange} />
                <input type="text" value={this.props.description} onChange={this.onDescriptionChange} />
            </div>
        );
    }
}