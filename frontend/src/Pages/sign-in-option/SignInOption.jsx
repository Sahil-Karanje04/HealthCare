import React from 'react'
import doctor from './doctor.avif'
import './SignInOption.css'
import { useAuth0 } from "@auth0/auth0-react";
import patient from './patient.png'


const SignInOption = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <div class="card-container">
    <button onClick={() => loginWithRedirect()}>
      <div class="card">
        <img src={doctor} alt="Card-img"/>
        <h2>Doctor</h2>
        <p>Are you a doctor?</p>
      </div>
    </button>
    <button onClick={() => loginWithRedirect()}>
      <div class="card">
        <img src={patient} alt="Card-img"/>
        <h2>Patient</h2>
        <p>Want best treatment</p>
      </div>
    </button>
    <button onClick={() => loginWithRedirect()}> 
      <div class="card">
        <img src={doctor} alt="Card-img"/>
        <h2>Admin</h2>
        <p>Some text here</p>
      </div>
    </button>
    </div>
  )
}

export default SignInOption