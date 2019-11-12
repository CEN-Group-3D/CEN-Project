import React from 'react';
import PropTypes from 'prop-types';
import User from '../User/User';
import './UsersList.css';

class UserEntry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div></div>
        )
    }
}

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            usersList: this.props.usersList,
        }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}


UsersList.propTypes = {
    usersList: PropTypes.arrayOf(PropTypes.instanceOf(User)).isRequired,
}
UserEntry.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.number,
}
export default UsersList