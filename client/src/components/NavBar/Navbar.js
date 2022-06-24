// Navbar.js
import "./navbar.css"
import React from "react";
import { ReactComponent as House } from "../../images/house.svg";
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp'
import HomePage from '../HomePage'
import AdminPage from '../Admin'
import Appointments from '../Appointments/Appointments'
import Clients from '../Clients/Clients'
import Tests from '../Tests/Tests'
import TakeTest from '../TakeTest/TakeTest'
import ShowDiagnos from '../ShowDiagnos/ShowDiagnos'
import TestsDone from '../TestsDone/TestsDone'
import Gerd from '../TakeTest/Gerd-q'
import Rsi from '../TakeTest/Rsi'
import RsiCalc from '../RSI/Rsi'
import GerdCalc from '../GERD/Gerd'
import { Button, Icon } from "@material-ui/core";

const getLoginnedUser = ()=>
{
  if(localStorage.getItem("user")!=undefined)
  {
    return (
    <div>
      <Button>
        <Link className="username">
          {localStorage.getItem("user")}
        </Link>
      </Button>
      <Button className="button">
        <a onClick={()=>{localStorage.clear();window.location.reload(false);}} href='#' className="button">Выйти</a>
      </Button>
    </div>
    )
  }
}
const getHomePage = ()=>
{
  if(localStorage.getItem("user")=='admin')
  {
    return (
    <Button>
      <Link to={'/admin'} className="button">
        Главная
      </Link>
    </Button>)
  }
  // else
  // {
  //   return (
  //   <Button>
  //     <Link to={'/home'} className="button">
  //       Главная
  //     </Link>
  //   </Button>)
  // }
}
const getClients = ()=>
{
  if(localStorage.getItem("user")=='admin')
  {
    return (
    <Button>
      <Link to={'/clients'} className="button">
        Клиенты
      </Link>
    </Button>
    )
  }
}
const getTests = ()=>
{
  if(localStorage.getItem("user")=='admin')
  {
    return (
    <Button>
      <Link to={'/tests'} className="button">
        Анкеты
      </Link>
    </Button>
    )
  }
}

const getTestsNav = ()=>
{
  if(localStorage.getItem("user")!='admin' && localStorage.getItem("user")!=undefined)
  {
    return (<Button><Link to={'/testsdone'} className="button">Пройденные анкеты</Link></Button>
    )
  }
}

const getRsi = ()=>
{
  if(localStorage.getItem("user")!='admin' && localStorage.getItem("user")!=undefined)
  {
    return (<Button><Link to={'/rsicalculator'} className="button">RSI Калькулятор</Link></Button>
    )
  }
}
const getGerd = ()=>
{
  if(localStorage.getItem("user")!='admin' && localStorage.getItem("user")!=undefined)
  {
    return (<Button><Link to={'/gerdcalculator'} className="button">GERD-Q калькулятор</Link></Button>
    )
  }
}
const getSignIn = ()=>
{
  if(localStorage.getItem("user")== null || localStorage.getItem("user")== undefined)
  {
    return (
    <Button>
      <Link to={'/signin'} className="button">
        Авторизация
      </Link>
    </Button>
    )
  }
}
const getSignUp = ()=>
{
  if(localStorage.getItem("user")== null || localStorage.getItem("user")== undefined)
  {
    return (
    <Button>
      <Link to={'/signup'} className="button"> 
      Регистрация 
      </Link>
    </Button>
    )
  }
}
export default function Navbar() {
    return (
        <Router>
        <div>
          <nav className="navigation-menu">
          <div className="navbar-nav mr-auto">
          <Icon component={House} id="icon"/>
          <h1 className="h1">GDiagnosis</h1>
            {getSignIn()}
            {getSignUp()}
            {getHomePage()}
            {getClients()}
            {getTests()}
            {getLoginnedUser()}
            {getTestsNav()}
            {getRsi()}
            {getGerd()}
          </div>
          </nav>
    
          <Switch>
          <Route exact path='/signin' component={SignIn} />
              <Route exact path='/signup' component={SignUp} />
              <Route exact path='/home' component={HomePage} />
              <Route exact path='/admin' component={AdminPage} />
              <Route exact path='/appointments' component={Appointments} />
              <Route exact path='/clients' component={Clients} />
              <Route exact path='/tests' component={Tests} />
              <Route exact path='/taketest' component={TakeTest} />
              <Route exact path='/showdiagnos' component={ShowDiagnos} />
              <Route exact path='/testsdone' component={TestsDone} />
              <Route exact path='/gerd' component={Gerd} />
              <Route exact path='/rsi' component={Rsi} />
              <Route exact path='/gerdcalculator' component={GerdCalc} />
              <Route exact path='/rsicalculator' component={RsiCalc} />
          </Switch>
        </div>
      </Router>
    );
  }