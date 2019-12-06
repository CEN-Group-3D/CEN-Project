//PDF reader taken from https://www.npmjs.com/package/react-pdf#browserify-and-others
//Dependencies
// @progress/kendo-react-pdf @progress/kendo-drawing
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onSuccessfulLogout } from '../../actions/authActions';
import './UserDashboardView.css';
import Tabs from '../../components/Tabs/Tabs';
import UpdateUser from './UpdateUser/UpdateUser';
import FormsTable from './FormsTable/FormsTable';
import DocumentViewer from './DocumentViewer/DocumentViewer';


class UserDashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numPages: null,
            pageNumber: 1,
            tabTitle: this.tabTitles[0]
        };
    }

    componentDidMount() {
        fetch('/user/dashboard', {
            method: 'GET',
            credentials: 'include'
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                console.log('error loading data');
            }
        }).then((data) => {
            if (data) {
                this.setState({paymentPlan: data.plan});
                console.log(data);
            }
        })
    }   

    handleLogout = () => {
        fetch('/user/logout', {
            method: 'POST',
            body: JSON.stringify({}),
            credentials: 'include',
        }).then((response) => {
            if (response.status === 200) {
                this.props.onSuccessfulLogout();
                window.location = '/login';
            }
        })
    }

    handleTabChange = (index, title) => {
        this.setState({tabTitle: title})

    }

    render() {
        let tabTitles = ['Documents', 'Forms', 'Profile']
        let tabComponents =[
                    <DocumentViewer />,

                    <div>
                        <FormsTable 
                            userPlan={this.state.paymentPlan}
                        />
                    </div>, 

                    <UpdateUser />];

        return (
            <div className="panel container">
                <div className="panel-title">
                    <h1 id="dash-title">{this.state.tabTitle}</h1>
                    
                    <div id="logout-container" className="d-flex align-items-center">
                        <button onClick={this.handleLogout} className="btn btn-outline-primary">Logout</button>
                    </div>
                </div>
                <div className="panel-content">
                    <Tabs
                        titles={this.tabTitles}
                        components={this.tabComponents}
                        onTabChangeCallback={this.handleTabChange}
                    />
                </div>
            </div>

        )
    }
}

UserDashboardView.propTypes = {
    onSuccessfulLogout: PropTypes.func.isRequired,
}

export default connect(null, { onSuccessfulLogout })(UserDashboardView);

