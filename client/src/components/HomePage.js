import React, { Component,useEffect,useState } from 'react'
import { map } from 'underscore'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from './SignIn/SignIn'
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
import Appointments from '../components/Appointments/Appointments'
import ClientsPage from '../components/Clients/Clients'
import AvailableTests from '../components/AvailableTests/AvailableTests'

const SECTIONS = [
  { title: 'Пройденные анкеты', href: '/appointments', Icon: Appointment },
  { title: 'Анкеты', href: '/tests', Icon: Star },
  { title: 'Оповещения', href: '/notifications', Icon: Broadcast },
  { title: 'Сообщения', href: '/messages', Icon: Messages},
  { title: 'Клиенты', href: '/clients', Icon: Clients},
  { title: 'Сотрудники', href: '/employees', Icon: Employees }
]
const getLinks = ()=>{
  if(localStorage.getItem("user")!=null && localStorage.getItem("user")!=undefined)
  {
    return (
      <div className='SectionNavigation'>
      <Router>
      <div>
        <nav className="navigation-menu">
        <div className="navbar-nav mr-auto">
            <Link to={'/availabletests'} className="nav-link">
              Пройти анкетирование
            </Link>
        </div>
        </nav>
        <hr />
        <Switch>
            <Route exact path='/availabletests' component={AvailableTests} />
        </Switch>
      </div>
    </Router>
    </div>
   )
  }
  // else
  // {
  //   return (
  //     <div className='SectionNavigation'>
  //   <Router>
  //     {map(SECTIONS, ({ title, href, Icon}) => (
  //           <Link className='SectionNavigation-Item Section' to={href}>
  //             <Icon className='Section-Icon'/>
  //             <span className='Section-Title'>{title}</span>
  //           </Link>
  //         ))}
  //       </Router>
  //       <Switch>
  //           <Route  path='/appointments' component={Appointments} />
  //       </Switch>
  //       </div>
  //       )
  // }
}

const HomePage=()=> {
    return (
      <div className='Home'>
      <div className='Home-Body'>
      {getLinks()}
      </div>
    </div>
  )
  }
  export default HomePage
