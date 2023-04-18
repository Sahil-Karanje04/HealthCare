import React from 'react'
import Bannerimg from './dentist.jpg'
import {Link} from 'react-router-dom'
import './Banner.css'

const Banner = () => {
  return (
    <section class="banner p-0">
    <Link href="#">
        <img src={Bannerimg} alt="banner-img"/>
    </Link>
    </section>
  )
}

export default Banner