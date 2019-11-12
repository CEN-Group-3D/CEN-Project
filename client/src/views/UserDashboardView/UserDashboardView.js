//PDF reader taken from https://www.npmjs.com/package/react-pdf#browserify-and-others

import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import test from '../../assets/Coping_with_Grief_and_Loss.pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './UserDashboardView.css';

class UserDashboardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numPages: null,
            pageNumber: 1,
        };

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

render() {

        return (
            <div className="panel container">
                <h1>Your files</h1>
            <Document
              file={test}
              onLoadSuccess={this.onDocumentLoadSuccess}
            >
              <Page pageNumber={1} />
            </Document>        
             </div>
        )
    }
}
export default UserDashboardView;
