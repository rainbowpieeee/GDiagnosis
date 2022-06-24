import React, { Component } from 'react'
import './SignUp.scss'
import AuthServices from '../services/AuthServices.js'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'

import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const authServices = new AuthServices()

export default class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      Radiovalue: 'User',
      Sexvalue: 0,
      UserName: '',
      Password: '',
      ConfirmPassword: '',
      Email:'',
      Phone:'',
      FirstName:'',
      LastName:'',
      Dob:'',

      UserNameFlag: false,
      PasswordFlag: false,
      ConfirmPasswordFlag: false,
      EmailFLag: false,
      PhoneFlag: false,
      FirstNameFlag: false,
      LastNameFlag: false,
      DobFlag: false,
      open: false,
      Message: '',
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
      UserNameFlag: false,
      PasswordFlag: false,
      ConfirmPasswordFlag: false,
      EmailFlag: false,
      PhoneFlag: false,
      FirstNameFlag: false,
      LastNameFlag: false,
      DobFlag: false,
    })

    if (this.state.UserName === '') {
      this.setState({ UserNameFlag: true })
    }
    if (this.state.Password === '') {
      this.setState({ PasswordFlag: true })
    }
    if (this.state.ConfirmPassword === '') {
      this.setState({ ConfirmPasswordFlag: true })
    }
    if (this.state.Email === '') {
      this.setState({ EmailFLag: true })
    }
    if (this.state.Phone === '') {
      this.setState({ PhoneFLag: true })
    } 
    if (this.state.FirstName === '') {
      this.setState({ FirstNameFlag: true })
    }
    if (this.state.LastName === '') {
      this.setState({ LastNameFlag: true })
    } 
     if (this.state.Dob === '') {
      this.setState({ DobFlag: true })
    }
  }

  handleSubmit = (e) => {
    this.CheckValidity()
    if (
      this.state.UserName !== '' &&
      this.state.Password !== '' &&
      this.state.ConfirmPassword !== ''&&
      this.state.Email !== '' &&
      this.state.Phone !== '' &&
      this.state.FirstName !== '' &&
      this.state.LastName !== '' &&
      this.state.Dob !== '' 
    ) {
      const data = {
        userName: this.state.UserName,
        password: this.state.Password,
        configPassword: this.state.ConfirmPassword,
        role: this.state.Radiovalue,
        Email: this.state.Email,
        Phone: this.state.Phone,
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Dob: this.state.Dob,
        Sex: this.state.Sexvalue,
      }

      authServices
        .SignUp(data)
        .then((data) => {
          console.log('data : ', data)
          if (data.data.isSuccess) {
            window.location.href='/signin';
          } else {
            console.log('Sign Up Failed')
            this.setState({ open: true, Message: 'Регистрация неудачна' })
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

  handleRadioChange = (e) => {
    this.setState({ Radiovalue: e.target.value })
  }
  handleSexChange = (e) => {
    this.setState({ Sexvalue: e.target.value })
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(
      { [name]: value },
      console.log('Name : ', name, 'Value : ', value),
    )
  }

  handleSignIn = (e) => {
    this.props.history.push('/SignIn')
  }

  render() {
    if(localStorage.getItem("user")!=null)
    {
      window.location.href='/home';
    }
    console.log('state : ', this.state)
    return (
      <div className="SignUp-Container">
        <div className="SignUp-SubContainer">
          <div className="Header">Регистрация</div>
          <div className="Body">
            <form className="form">
              <TextField
                className="TextField"
                name="UserName"
                label="UserName"
                variant="outlined"
                size="small"
                error={this.state.UserNameFlag}
                value={this.state.UserName}
                onChange={this.handleChange}
              />
                <TextField
                className="TextField"
                name="FirstName"
                label="Имя"
                variant="outlined"
                size="small"
                error={this.state.FirstNameFlag}
                value={this.state.FirstName}
                onChange={this.handleChange}
              />
            <TextField
                className="TextField"
                name="LastName"
                label="Фамилия"
                variant="outlined"
                size="small"
                error={this.state.LastNameFlag}
                value={this.state.LastName}
                onChange={this.handleChange}
              />
             <TextField
                className="TextField"
                name="Dob"
                label="Дата рождения"
                variant="outlined"
                size="small"
                error={this.state.DobFlag}
                value={this.state.Dob}
                onChange={this.handleChange}
              />
              <TextField
                className="TextField"
                type="password"
                name="Password"
                label="Пароль"
                variant="outlined"
                size="small"
                error={this.state.PasswordFlag}
                value={this.state.Password}
                onChange={this.handleChange}
              />
              <TextField
                className="TextField"
                type="password"
                name="ConfirmPassword"
                label="Повторите пароль"
                variant="outlined"
                size="small"
                error={this.state.ConfirmPasswordFlag}
                value={this.state.ConfirmPassword}
                onChange={this.handleChange}
              />
               <RadioGroup
                className="Roles"
                name="Role"
                value={this.state.Sexvalue}
                onChange={this.handleSexChange}
              >
                <FormControlLabel
                  className="RoleValue"
                  value="1"
                  control={<Radio />}
                  label="Мужчина"
                />
                <FormControlLabel
                  className="RoleValue"
                  value="0"
                  control={<Radio />}
                  label="Женщина"
                />
              </RadioGroup>
                <TextField
                className="TextField"
                type="text"
                name="Email"
                label="Email"
                variant="outlined"
                size="small"
                error={this.state.EmailFLag}
                value={this.state.Email}
                onChange={this.handleChange}
              />
                <TextField
                className="TextField"
                type="text"
                name="Phone"
                label="Телефон"
                variant="outlined"
                size="small"
                error={this.state.PhoneFlag}
                value={this.state.Phone}
                onChange={this.handleChange}
              />
             
            </form>
          </div>
          <div className="Buttons">
            <Button className="Btn" color="primary" onClick={this.handleSignIn}>
              Авторизация
            </Button>
            <Button
              className="Btn"
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              Регистрация
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
