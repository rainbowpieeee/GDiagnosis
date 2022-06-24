import React, { Component } from 'react'
import '../SignUp.scss'
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

export default class AddQuestion extends Component {
  constructor() {
    super()
    this.state = {
      QuestionText:'',
      Rate1:'',
      Rate2:'',
      Rate3:'',
      QuestionFlag: false,
      Rate1Flag: false,
      Rate2Flag: false,
      Rate3Flag: false,
    }
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
      QuestionFlag: false,
      Rate1Flag: false,
      Rate2Flag: false,
      Rate3Flag: false,
    })

    if (this.state.Question === '') {
      this.setState({ QuestionFlag: true })
    }
    if (this.state.Rate1 === '') {
        this.setState({ Rate1Flag: true })
      }
    if (this.state.Rate2 === '') {
        this.setState({ Rate2Flag: true })
      }
    if (this.state.Rate3 === '') {
        this.setState({ Rate3Flag: true })
      }
      
  }

  handleSubmit = (e) => {
    this.CheckValidity()
    if (
      this.state.Question !== '' &&
      this.state.Rate1 !== '' &&
      this.state.Rate2 !== '' &&
      this.state.Rate3 !== ''
    ) {
      const data = {
        QuestionText: this.state.Question,
        Rate1: this.state.Rate1,
        Rate2: this.state.Rate2,
        Rate3: this.state.Rate3,
      }

      authServices
        .AddQuestion(data)
        .then((data) => {
          console.log('data : ', data)
          if (data.data.isSuccess) {
            authServices
        .GetQuestions('')
        .then((data) => {
          console.log('Data : ', data)
          if (data.data!='error') {
             localStorage.setItem('questions',JSON.stringify(data.data));
             window.location.reload(false);
          } else {
            console.log('Что-то пошло не так')
          }
        })
        .catch((error) => {
          console.log('Error : ', error)
        })
            this.setState({ open: true, Message: 'Вопрос успешно добавлен' })
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
      this.setState({ open: true, Message: 'Заполните обязательное поле' })
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
          <div className="Header">Добавление вопроса</div>
          <div className="Body">
            <form className="form">
              <TextField
                className="TextField"
                name="Question"
                label="Вопрос"
                variant="outlined"
                size="small"
                error={this.state.QuestionFlag}
                value={this.state.Question}
                onChange={this.handleChange}
              />
                <TextField
                className="TextField"
                name="Rate1"
                label="Оценка 1"
                variant="outlined"
                size="small"
                error={this.state.Rate1Flag}
                value={this.state.Rate1}
                onChange={this.handleChange}
              />
            <TextField
                className="TextField"
                name="Rate2"
                label="Оценка 2"
                variant="outlined"
                size="small"
                error={this.state.Rate2Flag}
                value={this.state.Rate2}
                onChange={this.handleChange}
              />
             <TextField
                className="TextField"
                name="Rate3"
                label="Оценка 3"
                variant="outlined"
                size="small"
                error={this.state.Rate3Flag}
                value={this.state.Rate3}
                onChange={this.handleChange}
              />
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
