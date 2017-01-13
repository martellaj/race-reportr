import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class TextInput extends Component {
    constructor() {
        super();

        this.onRemoveClick = this.onRemoveClick.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onRemoveClick() {
        this.props.removeTextSection(this.props._key);
    }

    onValueChange(option) {
        this.props.editTextSection(this.props._key, option.value);
    }

    render() {
        const options = [
            { value: 'Training', label: 'Training' },
            { value: 'Race Strategy', label: 'Race Strategy' },
            { value: 'Pre-race', label: 'Pre-race' },
            { value: 'Race', label: 'Race' },
            { value: 'Mile [#]', label: 'Mile [#]' },
            { value: 'Miles [#] to [#]', label: 'Miles [#] to [#]' },
            { value: 'Kilometer [#]', label: 'Kilometer [#]' },
            { value: 'Kilometers [#] to [#]', label: 'Kilometers [#] to [#]' },
            { value: 'Post-race', label: 'Post-race' },
            { value: 'What\'s next?', label: 'What\'s next?' },
            { value: 'Custom', label: 'Custom' }
        ];

        return (
            <div>
                <button onClick={this.onRemoveClick}>remove</button>
                <Select
                    name="form-field-name"
                    value={this.props.sectionName}
                    options={options}
                    onChange={this.onValueChange}
                />
            </div>
        );
    }
}