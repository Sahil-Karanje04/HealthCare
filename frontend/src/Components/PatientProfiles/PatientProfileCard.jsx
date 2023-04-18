import React from 'react'
import './PatientProfile.css'

const PatientProfileCard = (prop) => {
  return (
    <div className='patient-card-container'>
        <div className="profile-pic"></div>
        <div className="profile-card-text">
            <h3>{prop.name}</h3>
            <h3>{prop.age}</h3>
        </div>
    </div>
  )
}

export default PatientProfileCard