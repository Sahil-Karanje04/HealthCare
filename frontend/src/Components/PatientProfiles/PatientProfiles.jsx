import React from 'react'
import PatientProfileCard from './PatientProfileCard'
import './PatientProfile.css'
import {Link} from 'react-router-dom'

const PatientProfiles = (prop) => {
  return (
    <div className='PatientProfile-container'>
        {prop.list.map((patient) => {
          return <Link to='/patient' style={{textDecoration:"none",color:"black"}}> <PatientProfileCard name={patient.pName} age={patient.pAge}/></Link>
        }) }
    </div>
  )
}

export default PatientProfiles