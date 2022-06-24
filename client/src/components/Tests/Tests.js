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
import AddTest from './addTest';
import AddQuestion from './addQuestion';
import "./tests.css"

const authServices = new AuthServices()

const Tests=()=> {
    const [name, setName] = useState([]);

    useEffect(() => {
        authServices
            .GetTests('')
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

      useEffect(() => {
        authServices
        .GetQuestions('')
        .then((data) => {
          console.log('Data : ', data)
          if (data.data!='error') {
             localStorage.setItem('questions',JSON.stringify(data.data));
          } else {
            console.log('Something Went Wrong')
          }
        })
        .catch((error) => {
          console.log('Error : ', error)
        })
      }, [])

    const [data, setData] = React.useState([])
     return (
        <div className="App">
            <Router>
        <div>
          <nav className="navigation-menu-test">
          <div className="navbar-nav mr-auto">
              <Link to={'/addtest'} className="add"> 
                <a id="addTest">
                  Добавить анкету 
                </a>
              </Link>
              <Link to={'/addquestion'} className="add"> 
                <a id="addTest">
                  Добавить вопрос 
                </a>
              </Link>
          </div>
          </nav>
          <Switch>
              <Route exact path='/addtest' component={AddTest} />
              <Route exact path='/addquestion' component={AddQuestion} />
          </Switch>
        </div>
      </Router>
            <h1>Анкеты</h1>
            <div className="App">
                <ul classname="list-group">
                  {name.map((data)=> {
                      return(
                          <li classname="list-group-item" key={data.id}>{data.name}</li>
                      )
                  })}
                  </ul>
            </div>
        </div>
      )
 }
export default Tests
