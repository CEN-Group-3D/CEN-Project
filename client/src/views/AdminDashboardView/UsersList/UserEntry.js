import React from 'react';
import PropTypes from 'prop-types';
import './UsersList.css';

class UserEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: '',
        }
    }

    handleDelete = () => {
        fetch('/admin/delete', {
            method: 'DELETE',
            credentials: 'include',
            body: JSON.stringify({email: this.props.email}),
        }).then((response) => {
            if (response.ok) {
                console.log('successful deletion');
                this.setState({display: 'hide-entry'});
            } else {
                console.log('unsuccessful deletion');
            }
        });
    }

    handleUpgrade = () => {
        fetch('/admin/upgrade', {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({email: this.props.email, upgrade: true}),
        }).then((response) => {
            if (response.ok) {
                console.log('successful upgrade');
            } else {
                console.log('unsuccessful upgrade');
            }
        })
    }

    render() {
        return (
            <tr className={this.state.display}>
                <th scope="row">{this.props.name}</th>
                <td>{this.props.email}</td>
                <td>{this.props.role}</td>
                <td>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Actions
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button onClick={this.handleUpgrade} className="dropdown-item">Upgrade</button>
                            <button onClick={this.handleDelete} className="danger-item dropdown-item">Delete</button>
                        </div>
                    </div>
                </td>
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