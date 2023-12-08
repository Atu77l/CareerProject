import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { saveAs } from 'file-saver';


function DownloadPdf() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

    function handleDownload() {
        const url = 'path/to/my.pdf';
        saveAs(url, 'my-document.pdf');
    }
  
    return (
      <div>
        <Document
          file="path/to/my.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        <button onClick={() => setPageNumber(pageNumber + 1)}>Next page</button>
        <button onClick={handleDownload}>Download PDF</button>
      </div>
    );
  }
  export default DownloadPdf
  