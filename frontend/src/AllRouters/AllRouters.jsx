import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home/Home"
import Contact from "../Pages/Contact us/Contact";
import About from '../Pages/About/About'
import Blog from '../Pages/Blog/Blog'
import User from '../Pages/User/User';


const AllRouters = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/user" element={<User/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AllRouters