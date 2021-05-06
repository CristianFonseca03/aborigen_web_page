import React, {useState} from "react";
import {Document, Page} from "react-pdf";
import {Box, Hidden, IconButton} from "@material-ui/core";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./style.css"

export default function SinglePage(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const {pdf} = props;

    return (
        <>
            <Box display="flex" justifyContent="space-between" px={2}>
                <IconButton color="primary" disabled={pageNumber <= 1} onClick={previousPage}>
                    <ArrowBackIosIcon/>
                </IconButton>
                <h2 className="pageText">
                    {pageNumber || (numPages ? 1 : "--")}/{numPages || "--"}
                </h2>
                <IconButton color="primary" disabled={pageNumber >= numPages}
                            onClick={nextPage}>
                    <ArrowForwardIosIcon/>
                </IconButton>
            </Box>
            <Document
                file={pdf}
                options={{workerSrc: "/pdf.worker.js"}}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Hidden only={['md', 'lg', 'xl']}>
                    <Page pageNumber={pageNumber} scale={0.5}/>
                </Hidden>
                <Hidden only={['xs', 'sm']}>
                    <Page pageNumber={pageNumber}/>
                </Hidden>
            </Document>
        </>
    );
}
