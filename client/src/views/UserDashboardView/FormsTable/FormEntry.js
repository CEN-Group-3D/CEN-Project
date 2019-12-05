import React from 'react';
import PropTypes, { string, object } from 'prop-types';

class FormEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.title}</th>
                <td>test</td>
                <td>test</td>
            </tr>
        )
    }
}

FormEntry.propTypes = {
    title: string.isRequired,
    fields: object.isRequired,
}

export default FormEntry;