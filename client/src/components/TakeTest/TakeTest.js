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
import Button from '@material-ui/core/Button'

const authServices = new AuthServices()
const initialList = [
    {
      data: localStorage.getItem("testtotake"),
    },
  ];
const TakeTest=()=> {

    const [name, setName] = useState([]);
    const [list, setList] = useState(initialList);
    let dataid = {
        testid: localStorage.getItem("testtotake"),
      }
     
      useEffect(() => {
        authServices
        .GetQuestionsForTest(dataid)
        .then((data) => {
          console.log('Data : ', data)
          if (data.data.isSuccess) {
            localStorage.removeItem("Rate1");
            localStorage.removeItem("Rate2");
            localStorage.removeItem("Rate3");
         setName(data.data.message);
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
            <h1>Test {localStorage.getItem("testtotake")}</h1>
            <div className="App">
            <form className="form">
                <ul classname="list-group">
                  {name.map((data)=> {
                      return(
                          <li classname="list-group-item" key={data}>{data}
                          <input type="checkbox" onChange={()=>{
                            if(data=='GERD-Q')
                            {
                              window.location.href='/gerd';
                            }
                            else if(data=='RSI')
                            {
                              window.location.href='/RSI';
                            }
                            else{
                            const newList = list.concat({ data });
                            setList(newList);
                          localStorage.setItem("listquestion",newList);
                            }
                        }}></input>
                          </li>
                      )
                  })}
                   <a  onClick={()=>{
                            const newList = []
                            setList(newList);
                            window.location.reload(false);
                          }
                          }>Очистить все</a> 
                  </ul>
                  <Button
              className="Btn"
              variant="contained"
              color="primary"
              onClick={
                function(){
                  let newList={};
                  if(localStorage.getItem("Gerd")=='Yes' || localStorage.getItem("Rsi")=='Yes')
                  {
                    if(localStorage.getItem("Gerd")=='Yes' && localStorage.getItem("Rsi")=='Yes')
                    {
                        const gerd =
                       {
                           data: "GERD-Q",
                       };
                       const ris = 
                      {
                          data:'RSI',
                      };
                      newList =  list.concat(gerd);
                      newList =  newList.concat(ris);
                   }
                    else if(localStorage.getItem("Gerd")=='Yes')
                  {
                  const gerd=
                  {
                    data:"GERD-Q"
                  }
                   newList =  list.concat(gerd);
                } 
                else if(localStorage.getItem("Rsi")=='Yes')
                {
                const gerd=
                {
                  data:"RSI"
                }
                 newList =  list.concat(gerd);
              }
                  localStorage.setItem("listquestion",newList);
                  setList(newList);
                  console.log(newList);
                    authServices
                .GetDiagnos(newList)
    .then((data) => {
      localStorage.setItem("Rsi","No");
      localStorage.setItem("Gerd","No");
      console.log('data : ', data)
      if (data.data.isSuccess) {
        localStorage.setItem("diagnos",JSON.stringify(data.data.message));
        localStorage.setItem("questions",JSON.stringify(data.data.questions));
        localStorage.setItem("testname",data.data.testName);
        localStorage.setItem("doctorstovisit",JSON.stringify(data.data.doctorstovisit));
        window.location.href='/showdiagnos'
      } else {
        console.log('Sign Up Failed')
        this.setState({ open: true, Message: 'Sign Up Failed' })
      }
    })}   else
    {
      authServices
      .GetDiagnos(list)
.then((data) => {
      localStorage.setItem("Rsi","No");
      localStorage.setItem("Gerd","No");
      console.log('data : ', data)
if (data.data.isSuccess) {
localStorage.setItem("diagnos",JSON.stringify(data.data.message));
localStorage.setItem("questions",JSON.stringify(data.data.questions));
localStorage.setItem("testname",data.data.testName);
localStorage.setItem("doctorstovisit",JSON.stringify(data.data.doctorstovisit));
window.location.href='/showdiagnos'
} else {
console.log('Sign Up Failed')
this.setState({ open: true, Message: 'Sign Up Failed' })
}
})    
    }
  }   
}
            >
              Finish Test
            </Button>
                  </form>
            </div>
        </div>
      )
 }
export default TakeTest