import React from 'react';
import PropTypes, { string, number } from 'prop-types';
import './FormEntry.css'

class FormEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleFormTitleClick = (evt) => {
        // navigate to the forms page to edit the form
        var formQueryString = new URLSearchParams();
        formQueryString.set('id', this.props.formID);
        window.location = '/form?' + formQueryString
    }

    render() {
        if (this.props.userPlan >= this.props.formPlan) {
            return (
                <tr>
                    <th><button onClick={this.handleFormTitleClick} className="form-title-button button-reset">{this.props.title}</button></th>
                    <td className="text-center">test</td>
                </tr>
            )
        } else {
            return null;
        }
    }
}

FormEntry.propTypes = {
    title: string.isRequired,
    formID: number.isRequired,
    formPlan: number.isRequired,
    userPlan: number,
}

export default FormEntry;