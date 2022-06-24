import React, { Component,useEffect,useState } from 'react'
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

const authServices = new AuthServices()

const AvailableTests=()=> {
    const [name, setName] = useState([]);

    useEffect(() => {
        authServices
            .GetTests('')
            .then((data) => {
              console.log('Data : ', data)
              if (data.data.isSuccess==true) {
                 setName(data.data.message);
              } else {
                console.log('Что-то пошло не так')
              }
            })
            .catch((error) => {
              console.log('Ошибка: ', error)
            })
      }, [])

      useEffect(() => {
        authServices
        .GetQuestions('')
        .then((data) => {
          console.log('Данные: ', data)
          if (data.data!='error') {
             localStorage.setItem('questions',JSON.stringify(data.data));
          } else {
            console.log('Что-то пошло не так')
          }
        })
        .catch((error) => {
          console.log('Ошибка: ', error)
        })
      }, [])

    const [data, setData] = React.useState([])
   
     return (
        <div className="App">
            <h1>Анкеты</h1>
            <div className="App">
                <ul classname="list-group">
                  {name.map((data)=> {
                      return(
                          <li classname="list-group-item" key={data.id}>
                            {data.name}  
                            <a onClick={()=>{localStorage.setItem("testtotake",data.id);window.location.href='/taketest'}} id={data.id}> - пройти</a>
                          </li>
                      )
                  })}
                  </ul>
            </div>
        </div>
      )
 }
export default AvailableTests
