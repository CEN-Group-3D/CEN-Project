import React from 'react';
import './UserDashboardView.css';
import Tabs from '../../components/Tabs/Tabs';
import UpdateUser from './UpdateUser/UpdateUser';

class UserDashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabTitle: this.tabTitles[0]
        };
    }

    tabTitles = ['Documents', 'Forms', 'Profile']
    tabComponents = [<div>Documents</div>, <div>Forms</div>, <UpdateUser />];

    handleLogout = () => {
        fetch('/logout', {
            method: 'POST',
            body: JSON.stringify({}),
            credentials: 'include',
        }).then((response) => {
            if (response.status === 200) {
                window.location = '/login';
            }
        })
    }

    handleTabChange = (index, title) => {
        this.setState({tabTitle: title})
    }

    render() {
        return (
            <div className="panel container">
                <div className="row justify-content-between">
                    <div className="col">
                        <h1 id="dash-title">{this.state.tabTitle}</h1>
                    </div>
                    <div id="logout-container" className="d-flex align-items-center">
                        <button onClick={this.handleLogout} className="btn btn-outline-primary">Logout</button>
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
export default UserDashboardView;
