import React, { Component,useEffect,useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
  import ReactDOMServer from 'react-dom/server';
import { jsPDF } from "jspdf";
import Button from '@material-ui/core/Button'
import html2canvas from 'html2canvas';
import AuthServices from '../../../src/services/AuthServices'
import axios from "axios";
import { type } from '@testing-library/user-event/dist/type';
import * as ReactDOM from "react-dom";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { ExcelExport } from '@progress/kendo-react-excel-export';

const authServices = new AuthServices()

const TestsDone=()=> {
    const [name, setName] = useState([]);
    const _export = React.useRef(null);


    useEffect(() => {
        authServices
            .GetTestsDone()
            .then((data) => {
              console.log('Data : ', data)
              if (data.data.isSuccess==true) {
                 setName(data.data.message);
              } else {
                console.log('Something Went Wrong')
              }
            })
            .catch((error) => {
              console.log('Error : ', error)
            })
      }, [])

      const exportExport = () => {
        if (_export.current !== null) {
          _export.current.save(name);
        }
      };
    const [data, setData] = React.useState([])
     return (
      
      <div id="main">
      <ExcelExport ref={_export}>
      <Grid
        style={{
          height: "420px",
        }}
        data={name}
      >
        <GridToolbar>
          <button
            title="Export Excel"
            className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
            onClick={exportExport}
          >
            Export Excel
          </button>
          <Button
              className="Btn"
              variant="contained"
              color="primary"
              onClick={function(){
                const input = document.getElementById('main');
                html2canvas(input)
                  .then((canvas) => {
                    const pdf = new jsPDF();
                    var imgWidth = 210;
                    var position = 0
                    var imgHeight = canvas.height * imgWidth / canvas.width;
                  
                    const imgData = canvas.toDataURL('image/png');
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    // pdf.output('dataurlnewwindow');
                    pdf.save("download.pdf");
                  })
                ;
              }}
            >
             Напечатать отчет
            </Button>
        </GridToolbar>
        <GridColumn field="idTest" title="Test Id" width="50px" />
        <GridColumn field="completeTime" title="Date" width="350px" />
        <GridColumn field="rate1" title="Rate 1" />
        <GridColumn field="rate2" title="Rate 2" />
        <GridColumn field="rate3" title="Rate 3" />
      </Grid>
    </ExcelExport>
    </div>
      )
 }
export default TestsDone
