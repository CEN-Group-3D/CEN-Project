import React from 'react';
import Tabs from '../../components/Tabs/Tabs';
import './AdminDashboardView.css'

class AdminDashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTab: 0,
        };
    }

    displayNewTab = (index) => {
        this.setState({
            selectedTab: index,
        })
    }

    render() {
        return (
            <div className="panel container">
                <Tabs
                    titles={['Users', 'Forms']}
                    components={[<p>hey</p>, <p>hello</p>]}
                />
            </div>
        )
    }
}

export default AdminDashboardView;