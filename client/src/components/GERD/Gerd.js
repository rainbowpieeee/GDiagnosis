import React, { Component } from 'react'
import '../SignUp.scss'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Button from '@material-ui/core/Button'

import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import contants, { gerd, rsi } from '../../constants'


export default class GerdQ extends Component {
  constructor() {
    super()
    this.state = {
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0,
      value6: 0,

      value1Flag: false,
      value2Flag: false,
      value3Flag: false,
      value4Flag: false,
      value5Flag: false,
      value6Flag: false,
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
      value1Flag: false,
      value2Flag: false,
      value3Flag: false,
      value4Flag: false,
      value5Flag: false,
      value6Flag: false,
    })
  }

  handleSubmit = (e) => {
    this.CheckValidity()
    if (
      this.state.value1 >=0 && this.state.value1 <=7 &&
      this.state.value2 >=0 && this.state.value2 <=7 &&
      this.state.value3 >=0 && this.state.value3 <=7 &&
      this.state.value4 >=0 && this.state.value4 <=7 &&
      this.state.value5 >=0 && this.state.value5 <=7 &&
      this.state.value6 >=0 && this.state.value6 <=7
    ) {
      let sum=Number(this.state.value1)+Number(this.state.value2)+Number(this.state.value3)+Number(this.state.value4)+Number(this.state.value5)+Number(this.state.value6);
      if(sum>8)
      {
        alert("Yes");
      }
      else
      {
        alert("No");
      }
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

   render() {
    console.log('state : ', this.state)
    return (
      <div className="SignUp-Container">
        <div className="SignUp-SubContainer">
          <div className="Header">GERD-Q Calculator (0-7)</div>
          <div className="Body">
            <form className="form">
              <label>{gerd[0]}</label>
              <TextField
                className="TextField"
                name="value1"
                label="value1"
                variant="outlined"
                size="small"
                error={this.state.value1Flag}
                value={this.state.value1}
                onChange={this.handleChange}
              />
              <label>{gerd[1]}</label>
              <TextField
                className="TextField"
                name="value2"
                label="value2"
                variant="outlined"
                size="small"
                error={this.state.value2Flag}
                value={this.state.value2}
                onChange={this.handleChange}
              />
              <label>{gerd[2]}</label>
              <TextField
                className="TextField"
                name="value3"
                label="value3"
                variant="outlined"
                size="small"
                error={this.state.value3Flag}
                value={this.state.value3}
                onChange={this.handleChange}
              />
              <label>{gerd[3]}</label>
              <TextField
                className="TextField"
                name="value4"
                label="value4"
                variant="outlined"
                size="small"
                error={this.state.value4Flag}
                value={this.state.value4}
                onChange={this.handleChange}
              />
              <label>{gerd[4]}</label>
              <TextField
                className="TextField"
                name="value5"
                label="value5"
                variant="outlined"
                size="small"
                error={this.state.value5Flag}
                value={this.state.value5}
                onChange={this.handleChange}
              />
              <label>{gerd[5]}</label>
              <TextField
                className="TextField"
                name="value6"
                label="value6"
                variant="outlined"
                size="small"
                error={this.state.value6Flag}
                value={this.state.value6}
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
             Calculate
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
                UNDO
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
