import React from 'react';
import PropTypes, { string, object, arrayOf } from 'prop-types';
import './FormEntry.css'

class FormEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleFormTitleClick = (evt) => {

    }

    render() {
        return (
            <tr>
                <th><button onClick={this.handleFormTitleClick} className="form-title-button button-reset">{this.props.title}</button></th>
                <td className="text-center">test</td>
            </tr>
        )
    }
}

FormEntry.propTypes = {
    title: string.isRequired,
    formID: number.isRequired,
}

export default FormEntry;