import React, { Component,useState } from 'react'
import '../SignUp.scss'
import { map } from 'underscore'
import AuthServices from '../../services/AuthServices'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'

import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const authServices = new AuthServices()
const QUESTIONS = JSON.parse(localStorage.getItem("questions"));

export default class AddTest extends Component {
  constructor() {
    super()
    this.state = {
      TestName:'',
      Questions:[]
    }
  }
 handleaddQuestion = (event) => {
  this.state.Questions.concat(event.currentTarget.id);
  this.setState({ Questions:  this.state.Questions.concat(event.currentTarget.id) });
  event.currentTarget.text=' - Добавлен';
 }
  handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return
    }
    this.setState({ open: false })
  }

  CheckValidity() {
    console.log('Check Validity Calling')
    //Reset Flag
    this.setState({
      TestNameFlag: false,
    })

    if (this.state.TestName === '') {
      this.setState({ TestNameFlag: true })
    }
  }

  handleSubmit = (e) => {
    this.CheckValidity()
    if (
      this.state.TestName !== '' 
    ) {
      const data = {
        TestName: this.state.TestName,
        Questions: this.state.Questions,
      }

      authServices
        .AddTest(data)
        .then((data) => {
          console.log('data : ', data)
          if (data.data.isSuccess) {
            this.setState({ open: true, Message: 'Успешно добавлен' })
          } else {
            console.log('Failed')
            this.setState({ open: true, Message: 'Ошибка' })
          }
        })
        .catch((error) => {
          console.log('error : ', error)
          this.setState({ open: true, Message: 'Что-то пошло не так' })
        })
    } else {
      console.log('Not Acceptable')
      this.setState({ open: true, Message: 'Заполните обязательные поля' })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(
      { [name]: value },
      console.log('Name : ', name, 'Value : ', value),
    )
  }
  render() {
    console.log('state : ', this.state)
    return (
      <div className="SignUp-Container">
        <div className="SignUp-SubContainer">
          <div className="Header">Добавить анкету</div>
          <div className="Body">
            <form className="form">
              <TextField
                className="TextField"
                name="TestName"
                label="Название анкеты"
                variant="outlined"
                size="small"
                error={this.state.TestNameFlag}
                value={this.state.TestName}
                onChange={this.handleChange}
              />
              <ul>
             {QUESTIONS.data.map((data)=> {
                      return(
                          <li classname="list-group-item" key={data.id}>
                            {data.questionText}  
                            <a onClick={this.handleaddQuestion} id={data.id}> - Добавить в анкету</a>
                          </li>
                      )
                  })}
            </ul>
            </form>
          </div>
          <div className="Buttons">
            <Button
              className="Btn"
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
             Добавить
            </Button>
          </div>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={this.state.Message}
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={this.handleClose}>
                Отменить
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    )
  }
}
