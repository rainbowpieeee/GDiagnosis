import React, { Component,useEffect,useState } from 'react'
import { map } from 'underscore'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from '../components/SignIn/SignIn'
import '../components/home.css'
import { ReactComponent as User } from '../images/user.svg'
import { ReactComponent as Star } from '../images/star.svg'
import { ReactComponent as Nurse } from '../images/nurse.svg'
import { ReactComponent as House } from '../images/house.svg'
import { ReactComponent as Clients } from '../images/clients.svg'
import { ReactComponent as Messages } from '../images/messages.svg'
import { ReactComponent as Broadcast } from '../images/broadcast.svg'
import { ReactComponent as Employees } from '../images/employees.svg'
import { ReactComponent as Appointment } from '../images/appointment.svg'

const Admin=()=>{
    return (
      <div className='Home'>
      <div className='Home-Body'>
        <div className='SectionNavigation'>
        </div>
      </div>
    </div>
  )
  }
  export default Admin
