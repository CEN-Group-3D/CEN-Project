import React from 'react';
import UserEntry from './UserEntry';
import User from '../User/User';

import './UsersList.css';

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            usersList: [],
        }
    }

    componentDidMount() {
        fetch ('/admin/get_users', {
            method: 'GET',
            credentials: 'include',
        }).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Invalid credentials');
            }
        }).then((data) => {
            data.forEach(user => {
                this.setState({
                    usersList: this.state.usersList.concat(new User(user.name, user.email, user.plan))
                })
            });
        }).catch((err) => {
            console.error(err);
        })
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Plan</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.usersList.map((value, index) => {
                            return (
                                <UserEntry 
                                    key={index}
                                    name={value.name}
                                    email={value.email}
                                    role={value.plan} // until proper permissions are in place
                                />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UsersList
