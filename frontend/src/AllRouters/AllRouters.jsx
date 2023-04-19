import { Routes,Route } from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home/Home"
import Contact from "../Pages/Contact us/Contact";
import About from '../Pages/About/About'
import Blog from '../Pages/Blog/Blog'
import User from '../Pages/User/User';
import PatientProfile from "../Components/PatientProfiles/PatientProfile";
import SignInOption from "../Pages/sign-in-option/SignInOption";

const AllRouters = () => {
  return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/user" element={<User/>} />
            <Route path="/patient" element={<PatientProfile/>} />
            <Route path="/SignInOption" element={<SignInOption/>} />
            
        </Routes>
  )
}

export default AllRouters