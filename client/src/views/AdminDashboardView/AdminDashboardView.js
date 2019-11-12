import React from 'react';
import Tabs from '../../components/Tabs/Tabs';
import './AdminDashboardView.css'

class AdminDashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabTitle: this.tabTitles[0],
        };
    }

    tabTitles = ['Users', 'Forms'];
    tabComponents = [<p>hey</p>, <p>Forms</p>];

    handleTabChange = (index, title) => {
        this.setState({tabTitle: title})
    }

    render() {
        return (
            <div className="panel container">
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