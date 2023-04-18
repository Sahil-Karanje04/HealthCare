import React from 'react'
import './Navbar.css'
import search from '../../Assets/search_icon.jpg'
// import user_logo from '../../Assets/user_icon.png'
import cart from '../../Assets/cart_icon.png'
// import { useAuth0 } from "@auth0/auth0-react";
import logo from '../../Assets/logo.png'
import ham from '../../Assets/bars-solid (1).svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    function toggle() {
        const search_input = document.getElementById("search-input");

        search_input.classList.toggle("block");
    };

    function hamToggle() {
        const ham_container = document.querySelector(".ham-container");

        ham_container.classList.toggle("block");
    }

    return (
        <div className='Navbar'>
            <div className="ham-btns searchbar">
                <div className="ham-btns-container">
                    <button className='btn' > <img src={cart} alt="cart" style={{ width: "1.3rem" }} /> </button>
                    {/* {isAuthenticated && <button className='btn'> <img src={user_logo} alt="user" style={{ width: "1rem" }} /> </button>} */}
                </div>
            </div>
            <div className="navbar-container flex">
                <div className="ham-icon hidden" onClick={hamToggle}>
                    <img src={ham} alt="ham" />
                </div>
                <div className="ham-logo" id='hide-logo'>
                    <img src={logo} alt="logo" width={50} />
                </div>
                <div className="left-nav flex">
                    <div className="logo">
                        <img src={logo} alt="logo" width={50} />
                    </div>
                    <div className="list" style={{ display: "flex" }}>
                        <ul className='flex'>
                            <a style={{textDecoration:"none"}} to='/'><li> Home</li></a>
                            <a style={{textDecoration:"none"}} to='/about' ><li> About</li></a>
                            <a style={{textDecoration:"none"}} to='/contact' ><li> Contact</li></a>
                            <a style={{textDecoration:"none"}} to='/blog' ><li> Blog</li></a>
                        </ul>
                    </div>
                </div>
                <div className="right-nav flex">
                    <div className="searchbar flex">
                        <input type="text" className='hidden' id='search-input' placeholder='Search' />
                        <button className='btn' id='search-btn' onClick={toggle}> <img src={search} alt="search" style={{ width: "1rem" }} /> </button>
                        <button className='btn' id='cart-btn'> <img src={cart} alt="cart" style={{ width: "1.3rem" }} /> </button>
                        {/* {isAuthenticated && a to='/user'> <button className='btn' id='user-btn'> <img src={user_logo} alt="user" style={{ width: "1rem" }} /> </button> </a>}
                        {
                            isAuthenticated ? <button className='lg-btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button> : <button className='lg-btn' onClick={() => loginWithRedirect()}>Log In</button>
                        } */}

                    </div>
                </div>
            </div>

            <div className="hamSearch ">
                <input type="text" id='ham-search-input' placeholder='Search' />
            </div>

            <div className="ham-container hidden">
                <div className='hm-ul' >
                    <div className="hm-li"> Home</div>
                    <div className="hm-li">About</div>
                    <div className="hm-li">Contact</div>
                    <div className="hm-li">Blog</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar