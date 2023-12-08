import React, { useState, useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import axios from 'axios'
import { Controlled as CodeMirror } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';

const Design = () => {
  const [designDetail, setDesignDetail] = useState([])
  const fetchData = () => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/get/design',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setDesignDetail(response?.data?.detail)
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    fetchData()
  }, [])
  const codeSnippet = `      <div>
    <Document
      file="path/to/my.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} />
    </Document>
    <p>Page {pageNumber} of {numPages}</p>
    <button onClick={() => setPageNumber(pageNumber + 1)}>Next page</button>
    <button onClick={handleDownload}>Download PDF</button>
  </div>`
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1">
        {
          designDetail.map((item, key) => {
            return (
              <div className="flex flex-col m-10">
                <h1 className="text-2xl font-medium">Topic::-{item.topic}</h1>
                <h1 className="text-2xl font-medium">Title::-{item.title}</h1>
                <CodeMirror
                  value={item.code}
                  options={{
                    lineNumbers: true,
                    mode: 'javascript',
                    theme: 'material',
                  }}
                />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Design