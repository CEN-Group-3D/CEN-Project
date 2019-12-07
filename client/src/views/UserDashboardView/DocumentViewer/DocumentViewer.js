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

        this.state = {
            documentHeight: 0,
            documentPadding: 0,
        };

        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }

    componentDidMount() {
        let pdfDoc = document.querySelector('#pdf-doc');
        let docWidth = pdfDoc.offsetWidth;
        console.log(pdfDoc)
        this.setState({documentHeight: docWidth * 1.29411});
        this.setState({documentPadding: docWidth * 0.117647});
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
                <div id="pdf-doc" style={{height: this.state.documentHeight, padding: this.state.documentPadding}} className="letter">
                    <PDFExport ref={(component) => this.pdfExportComponent = component} fileName= "POA.pdf" paperSize="Letter">                        
                        <FormPOA 
                            personal={this.props.personal}
                            agent={this.props.agent}
                            poaMatters={this.props.poaMatters}
                        />
                    </PDFExport>                
                </div>
                 <button style={{marginTop: 20}}className="btn btn-outline-primary" onClick={this.exportPDFWithComponent}>Export PDF</button>                   
            </div>
        )
    }
}

DocumentViewer.propTypes = {
    personal: object,
    poaMatters: PropTypes.arrayOf(PropTypes.string,),
}

export default DocumentViewer;
