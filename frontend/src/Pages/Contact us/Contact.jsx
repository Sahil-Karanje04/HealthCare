import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'

const Contact = () => {

  const [contactUser, setContactUser] = useState({
    contactname: "",
    contactemail: "",
    contacttext: ""
  })

  const handleChange = (e) => {
    e.preventDefault();

    setContactUser({ ...contactUser, [e.target.name]: e.target.value })
  }

  const send = async (e) => {
    e.preventDefault();
    try {
      alert("submitted");

      await axios.post("http://localhost:4000/sendContact",  {contactUser} )  
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="contact">
      <div className="content">
        <h2>Contact us</h2>
        <p>Let's Talk</p>
        <p>Feel Free To contact us.</p>
        <p>We are Here To Help You.</p>
      </div>
      <div className="contact-container">
        <div className="contactInfo">
          <div>
            <div className="box">
              <div className="icon"><i className="fa-solid fa-map-location-dot"></i></div>
              <div className="text">
                <h3>Address</h3>
                <p>203 sanpada Road<br />Sanpada<br />400705</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa-solid fa-phone"></i></div>
              <div className="text">
                <h3>Phone</h3>
                <p>1800-00-000</p>
              </div>
            </div>
            <div className="box">
              <div className="icon email-icon"><i className="fa-regular fa-envelope"></i></div>
              <div className="text">
                <h3>Email</h3>
                <p>medicare2023@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form method='POST' onSubmit={send}>
            <h2>Send Message</h2>
            <div className="InputBox">
              <p className="detail">Full name</p>
              <input type="text" name="contactname" onChange={handleChange} />
            </div>
            <div className="InputBox">
              <p className="detail">Email</p>
              <input type="email" name="contactemail" onChange={handleChange} />
            </div>
            <div className="InputBox">
              <p className="detail">Type your Message Here...</p>
              <textarea name='contacttext' onChange={handleChange}></textarea>
            </div>
            <div >
              <input type="submit" value="Send" style={{padding:".3rem 1rem",backgroundColor:"#0cb8b6",borderRadius:"5px"}} />
            </div>
          </form>
        </div>
      </div>
    </div>)
}

export default Contact