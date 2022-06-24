import React, { Component } from 'react'

import './Appointments.css'

import { ReactComponent as Search } from '../../images/search.svg'
import { ReactComponent as Appointment } from '../../images/appointment.svg'

class Appointments extends Component {

  render() {

    return (
      <div className='Appointments'>
        <div className='Appointments-Body'>
          <div className='Appointments-Filter'>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments