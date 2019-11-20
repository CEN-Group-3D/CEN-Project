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

    tabTitles = ['Users', 'Attorneys', 'Forms'];

    

    handleTabChange = (index, title) => {
        this.setState({tabTitle: title})
    }

    render() {
        return (
            <div className="panel container">   
                <h1 className="panel-title">{this.state.tabTitle}</h1>
                <div className="panel-content">
                    <Tabs
                        titles={this.tabTitles}
                        components={[<UsersList />, <p>Attorneys</p>, <p>Forms</p>]}
                        onTabChangeCallback={this.handleTabChange}
                    />
                </div>
            </div>
        )
    }
}

export default AdminDashboardView;