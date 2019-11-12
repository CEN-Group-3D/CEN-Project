import React from 'react';
import UsersList from './UsersList/UsersList';
import Tabs from '../../components/Tabs/Tabs';
import './AdminDashboardView.css';

class AdminDashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabTitle: this.tabTitles[0],
            usersList: [],
        };
    }

    tabTitles = ['Users', 'Forms'];

    

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
                    components={[<UsersList />, <p>Forms</p>]}
                    onTabChangeCallback={this.handleTabChange}
                />
            </div>
        )
    }
}

export default AdminDashboardView;