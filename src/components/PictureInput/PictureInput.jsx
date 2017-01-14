import './PictureInput.css';
import React, { Component } from 'react';

export default class PictureInput extends Component {
    constructor() {
        super();

        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onLinkChange = this.onLinkChange.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onDescriptionChange(event) {
        this.props.editPicture(this.props._key, this.props.link, event.target.value);
    }

    onLinkChange(event) {
        this.props.editPicture(this.props._key, event.target.value, this.props.description);
    }

    onRemoveClick() {
        this.props.removePicture(this.props._key);
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