import './App.css'
import React, { Component,useEffect,useState } from 'react'
import axios from "axios";
import SignUp from './components/SignUp'
import SignIn from './components/SignIn/SignIn'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar/Navbar'

const App=()=> {
  window.addEventListener("beforeunload", () => localStorage.removeItem('storageVariable'));
  const [user, setUser] = useState()
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }
  return (
    <div className="App">
      <NavBar/>
    </div>
  )
}

export default App
