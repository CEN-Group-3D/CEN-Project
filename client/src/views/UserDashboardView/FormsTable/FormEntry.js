import React from 'react';
import PropTypes, { string, object, arrayOf } from 'prop-types';
import './FormEntry.css'

class FormEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <tr>
                <th><button className="form-title-button button-reset">{this.props.title}</button></th>
                <td className="text-center">test</td>
                <td className="text-center">test</td>
            </tr>
        )
    }
}

FormEntry.propTypes = {
    title: string.isRequired,
    fields: arrayOf(object).isRequired,
}

export default FormEntry;