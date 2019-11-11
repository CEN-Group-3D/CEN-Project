import React from 'react';
import './UserDashboardView.css';

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
        })
    }

    render() {
        return (
            <div className="panel container">
                <div className="row">
                    <h1>Your files</h1>
                    <button className="btn btn-outline-primary">Logout</button>
                </div>
            </div>
        )
    }
}
export default UserDashboardView;
