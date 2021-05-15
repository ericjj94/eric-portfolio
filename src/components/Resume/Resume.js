import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../../assets/ERIC_JOSE_JOY_RESUME.pdf";

function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={resume}
        onLoadSuccess={onDocumentLoadSuccess}
        options={{ workerSrc: "pdf.worker.js" }}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}
export default Resume;
