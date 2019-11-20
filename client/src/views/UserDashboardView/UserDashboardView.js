//PDF reader taken from https://www.npmjs.com/package/react-pdf#browserify-and-others

import React from 'react';
import PropTypes from 'prop-types';
import { Document, Page } from 'react-pdf';
import { connect } from 'react-redux';
import { onSuccessfulLogout } from '../../actions/authActions';
import test from '../../assets/Coping with Grief and Loss.pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './UserDashboardView.css';
import Tabs from '../../components/Tabs/Tabs';
import UpdateUser from './UpdateUser/UpdateUser';


class UserDashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numPages: null,
            pageNumber: 1,
            tabTitle: this.tabTitles[0]
        };

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    tabTitles = ['Documents', 'Forms', 'Profile']
    tabComponents =[<div id="user-docs">
                        <Document
                            file={test}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                            <Page pageNumber={1} />
                        </Document>
                    </div>,

                    <div>Forms</div>, 

                    <UpdateUser />];

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

