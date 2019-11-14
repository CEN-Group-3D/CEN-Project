//PDF reader taken from https://www.npmjs.com/package/react-pdf#browserify-and-others

import React, { Component } from 'react';
import Cookies from 'universal-cookie'
import { Document, Page } from 'react-pdf';
import test from '../../assets/Coping with Grief and Loss.pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './UserDashboardView.css';
import Tabs from '../../components/Tabs/Tabs';
import UpdateUser from './UpdateUser/UpdateUser';

const cookies = new Cookies();

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
        fetch('/logout', {
            method: 'POST',
            body: JSON.stringify({}),
            credentials: 'include',
        }).then((response) => {
            if (response.status === 200) {
                cookies.set('loggedIn', false, {path: '/'})
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
                <div className="row justify-content-between">
                    <div className="col">
                        <h1 id="dash-title">{this.state.tabTitle}</h1>
                    </div>
                    <div id="logout-container" className="d-flex align-items-center">
                        <button onClick={this.handleLogout} className="btn btn-outline-primary">Logout</button>
                    </div>
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
export default UserDashboardView;
