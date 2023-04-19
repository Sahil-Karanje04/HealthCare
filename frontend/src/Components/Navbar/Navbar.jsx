import React from 'react'
import './Navbar.css'
import user_logo from '../../Assets/user_icon.png'
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const {   logout, isAuthenticated } = useAuth0();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">blog</Link>
            </li>
          </ul>
          {isAuthenticated && <Link to='/user'> <button className='custom-btn' id='user-btn'> <img src={user_logo} alt="user" style={{ width: "1rem" }} /> </button> </Link>}
          {
            isAuthenticated ? <button className='lg-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button> : <Link to='/SignInOption'><button className='lg-btn'>Sign in</button></Link>
          }
        </div>
      </div>
    </nav>
  )
}

export default Navbar