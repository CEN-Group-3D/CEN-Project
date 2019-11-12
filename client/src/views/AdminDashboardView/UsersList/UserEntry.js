import React from 'react';
import PropTypes from 'prop-types';
import './UsersList.css';

class UserEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.name}</th>
                <td>{this.props.email}</td>
                <td>{this.props.role}</td>
            </tr>
        )
    }
}

UserEntry.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.number,
}

export default UserEntry;