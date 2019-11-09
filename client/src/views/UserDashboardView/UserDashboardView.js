import React from 'react';
import './UserDashboardView.css';

class UserDashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className="panel container">
                <h1>Your files</h1>
            </div>
        )
    }
}
export default UserDashboardView;
