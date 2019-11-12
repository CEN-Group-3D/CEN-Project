import React from 'react';
import UsersList from './UsersList/UsersList';
import Tabs from '../../components/Tabs/Tabs';
import User from './User/User';
import './AdminDashboardView.css';

class AdminDashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabTitle: this.tabTitles[0],
        };
    }

    tabTitles = ['Users', 'Forms'];
    users = [];
    tabComponents = [<UsersList usersList={this.users}/>, <p>Forms</p>];

    componentDidMount() {
        fetch ('/get_users', {
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
                this.users.push(new User(user.name, user.email, 0));
            });
        }).catch((err) => {
            console.error(err);
        })
    }

    handleTabChange = (index, title) => {
        this.setState({tabTitle: title})
    }

    render() {
        return (
            <div className="panel container">
                <div className="row">
                    <div className="col">
                        <h1>{this.state.tabTitle}</h1>
                    </div>
                </div>
                <Tabs
                    titles={this.tabTitles}
                    components={this.tabComponents}
                    onTabChangeCallback={this.handleTabChange}
                />
            </div>
        )
    }
}

export default AdminDashboardView;