import React, { Component,useEffect,useState } from 'react'
import ReactDOMServer from 'react-dom/server';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import AuthServices from '../../../src/services/AuthServices'
import axios from "axios";
import "../Tests/tests.css"
import Button from '@material-ui/core/Button'
import "hammerjs";
import "@progress/kendo-theme-material/dist/all.css";
import "../../App.css";
import Charts from "../charts/Donut";
const diagnoses= ['Неэрозивная рефлюксная болезнь','Ларингофарингеальный рефлюкс','Пищевод Баррета']

const ShowDiagnos=()=> {
  const [name, setName] = useState([]);
  const [question, setQuestion] = useState([]);
  const [doctorstivisit, setDoctorstivisit] = useState([]);
  const getRates=()=>{
    localStorage.setItem("Rate1",name[0]);
    localStorage.setItem("Rate2",name[1]);
    localStorage.setItem("Rate3",name[2]);
  }
useEffect(() => {
  setName(JSON.parse(localStorage.getItem("diagnos")));
  const rates=JSON.parse(localStorage.getItem("diagnos"));
  console.log(rates);

  setQuestion(JSON.parse(localStorage.getItem("questions")));
  setDoctorstivisit(JSON.parse(localStorage.getItem("doctorstovisit")));
},[]);

     return (
        <div className="App" id="main">
            <h1>Отчет{localStorage.getItem("testtotake")}</h1>
            <div className="App">
            <form className="form">
            <ul classname="list-group">
            <h2>
            ТЕСТ
            </h2>
            {localStorage.getItem("testname")}
            <h2>
            ВАШИ ОТВЕТЫ
            </h2>
                  {question.map((data)=> {
                      return(
                          <li classname="list-group-item" key={data}>{data} 
                          </li>
                      )
                  })}
                  <h2>
                  ВЕРОЯТНЫЕ ЗАБОЛЕВАНИЯ
                  </h2>
                  {name.map((data)=> {
                      return(
                          <li classname="list-group-item" key={data}>{ diagnoses[name.indexOf(data)]} = {data} %
                          </li>
                      )
                  })}
                  {getRates()}
                  <Charts/>
                  <h2>
                  СПИСОК СПЕЦИАЛИСТОВ РЕКОМЕНДУЕМЫХ К ПОСЕЩЕНИЮ
                  </h2>
                  {doctorstivisit.map((data)=> {
                      return(
                          <li classname="list-group-item" key={data}>{data}
                          </li>
                      )
                  })}
                  </ul>
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
                    var pageHeight = 290;
                    var position = 0
                    var imgHeight = canvas.height * imgWidth / canvas.width;
                    var heightLeft = imgHeight;
                  
                    const imgData = canvas.toDataURL('image/png');
                    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                    // pdf.output('dataurlnewwindow');
                    pdf.save("download.pdf");
                  })
                ;
              }}
            >
             Напечатать
            </Button>
           </form>                

            </div>
        </div>
      )
 }
export default ShowDiagnos