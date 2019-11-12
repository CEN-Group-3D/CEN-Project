import React from 'react';
import './UserDashboardView.css';
import Tabs from '../../components/Tabs/Tabs';
import UpdateUser from './UpdateUser/UpdateUser';

class UserDashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleLogout = () => {
        fetch('/logout', {
            method: 'POST',
            body: JSON.stringify({}),
            credentials: 'include',
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                window.location = response.url;
            }
        })
    }

    render() {
        return (
            <div className="panel container">
                <div className="row justify-content-between">
                    <div className="col">
                        <h1 id="dash-title">Your files</h1>
                    </div>
                    <div className="d-flex col-xs-auto align-items-center">
                        <button onClick={this.handleLogout} className="btn btn-outline-primary">Logout</button>
                    </div>
                </div>
                <Tabs
                    titles={['Documents', 'Profile']}
                    components={[<div>Documents</div>, <UpdateUser />]}
                />
            </div>
        )
    }
}
export default UserDashboardView;
