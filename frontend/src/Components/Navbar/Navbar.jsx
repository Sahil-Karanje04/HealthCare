import React from 'react'
import './Navbar.css'
// import search from '../../Assets/search_icon.jpg'
import user_logo from '../../Assets/user_icon.png'
import cart from '../../Assets/cart_icon.png'
import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../Assets/logo.png'
<<<<<<< HEAD
import ham from '../../Assets/bars-solid (1).svg'
=======
>>>>>>> 8379b52bb7323af173d603a4784aeb46cbc641b8
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    // function toggle() {
    //     const search_input = document.getElementById("search-input");

    //     search_input.classList.toggle("block");
    // };

    // function hamToggle() {
    //     const ham_container = document.querySelector(".ham-container");

    //     ham_container.classList.toggle("block");
    // }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <div className="logo">
          <Link className="navbar-brand"to="/">
            <img src={logo} alt="" />
          </Link>
            </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page"to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/about-us">About us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/contact-us">Contact us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link"to="/blog">blog</Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <button className='custom-btn' id='cart-btn'> <img src={cart} alt="cart" style={{ width: "1.3rem" }} /> </button>
                        {isAuthenticated && <Link to='/user'> <button className='custom-btn' id='user-btn'> <img src={user_logo} alt="user" style={{ width: "1rem" }} /> </button> </Link>}
                        {
                            isAuthenticated ? <button className='lg-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button> : <button className='lg-btn' onClick={() => loginWithRedirect()}>Log In</button>
                        }
          </div>
        </div>
      </nav>
)}

export default Navbar