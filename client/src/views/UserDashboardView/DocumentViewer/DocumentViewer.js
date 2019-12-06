import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Document, Page } from 'react-pdf';
import test from '../../../assets/Coping with Grief and Loss.pdf';
import { pdfjs } from 'react-pdf';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import {Medical_POA} from "./FormTemplates/medical-POA - Copy";
// import 'react-pdf/dist/Page/AnnotationLayer.css';

import FormPOA from './FormTemplates/POA';

import './DocumentViewer.css';


class DocumentViewer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    exportPDFWithComponent = () => {
        this.pdfExportComponent.save();
    }

    render() {
        return (
            <div>
                {/* <Document
                                file={test}
                                onLoadSuccess={this.onDocumentLoadSuccess}
                            >
                                <Page pageNumber={1} />
                </Document> */}
                <div className="letter">
                    <PDFExport ref={(component) => this.pdfExportComponent = component} fileName= "POA.pdf" paperSize="Letter">                        
                        <FormPOA 
                            personal={this.props.personal}
                        />
                    </PDFExport>                
                </div>
                 <button className="btn btn-outline-primary" onClick={this.exportPDFWithComponent}>Export PDF</button>                   
            </div>
        )
    }
}

DocumentViewer.propTypes = {
    personal: object
}

export default DocumentViewer;
