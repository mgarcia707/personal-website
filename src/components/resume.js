import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import './resume.css';
import resume from './Michael_J_Garcia_Software Developer.pdf';
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
      }

      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }
    render() {
        const { pageNumber, numPages } = this.state;

        return(
            <div className="resume">
            <Document
            file={resume}
            onLoadSuccess={this.onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
            </div>
        )
    }
}

export default Resume; 