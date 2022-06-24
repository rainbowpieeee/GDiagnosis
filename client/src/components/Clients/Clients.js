import React, { Component,useEffect,useState } from 'react'
import AuthServices from '../../../src/services/AuthServices'
import axios from "axios";
const authServices = new AuthServices()

const Clients=()=> {
    const [name, setName] = useState([]);

    useEffect(() => {
        authServices
            .GetClients('f')
            .then((data) => {
              console.log('Данные: ', data)
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
    const [data, setData] = React.useState([])
     return (
        <div className="App">
            <h1>Клиенты</h1>
            <div className="App">
                <ul classname="list-group">
                  {name.map((data)=> {
                      return(
                          <li classname="list-group-item" key={data.id}>
                            {data.login} 
                            {data.firstName} 
                            {data.lastName}  
                            {data.secondName}
                          </li>
                          )
                        })}
                  </ul>
            </div>
        </div>
      )
 }
export default Clients
