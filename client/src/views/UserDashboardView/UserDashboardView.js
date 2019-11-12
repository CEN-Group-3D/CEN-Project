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
        }).then((response) => {
            console.log(response)
            if (response.status === 302) {
                window.location = response.url;
            }
        })
    }

    render() {
        return (
            <div className="panel container">
                <div className="row">
                    <h1>Your files</h1>
                    <button onClick={this.handleLogout} className="float-right btn btn-outline-primary">Logout</button>
                </div>
            </div>
        )
    }
}
export default UserDashboardView;
