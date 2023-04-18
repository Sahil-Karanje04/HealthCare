import React from 'react'
import './DoctorProfile.css'

const DoctorProfile = () => {
  return (
    <div className='DoctorProfile-container'>
        <div className="DF-left">
            <div className="profile-image"></div>
            <div className="profile-text">
                <h3>Dr. Sharma</h3>
                <h3 style={{color:"gray"}}>Qualifications...</h3>
            </div>
        </div>
        <div className="DF-right"></div>
    </div>
  )
}

export default DoctorProfile