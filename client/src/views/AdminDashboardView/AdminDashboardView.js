import React from 'react';
import UsersList from './UsersList/UsersList';
import Tabs from '../../components/Tabs/Tabs';
import { connect } from 'react-redux';
import { onSuccessfulLogout } from '../../actions/authActions';
import PropTypes from 'prop-types';
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

    render() {
        return (
            <div className="panel container">   
                <h1 className="panel-title">
                  {this.state.tabTitle}
                  <div id="logout-container" className="d-flex align-items-center">
                    <button onClick={this.handleLogout} className="btn btn-outline-primary">Logout</button>
                  </div>
                </h1>
                <div className="panel-content">                                
                    <Tabs
                        titles={this.tabTitles}
                        components={[
                            <UsersList />, 
                            <p>Attorneys</p>,
                            <div>Forms</div>
                            ]}
                        onTabChangeCallback={this.handleTabChange}
                    />
                </div>
            </div>
        )
    }
}

AdminDashboardView.propTypes = {
  onSuccessfulLogout: PropTypes.func.isRequired,
}

export default connect(null, { onSuccessfulLogout })(AdminDashboardView);


