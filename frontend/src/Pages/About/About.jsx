import React from 'react'
import './About.css'
import logo from '../../Assets/logo.png'

const About = () => {
  return (
    <div className="about">
      <section id="about-section">
        <div className="about-left">
          <img src={logo} alt="About Img" />
        </div>

        <div className="about-right">
          <h4>Medicare</h4>
          <h1>About Us</h1>
          <p>Our website provides all the needable servicess to the patient who are Having some or any Kind of disaase
          </p>
        </div>
      </section>
    </div>
  )
}

export default About