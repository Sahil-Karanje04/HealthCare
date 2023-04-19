import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Eyegame from '../../Components/Eyegame/Eyegame'
// import LazyEyeDetector from '../../Components/Lazyeye/Lazyeye'
// import Mentalhealth from '../../Components/Mentalhealth/Mentalhealth'

const Home = () => {
  return (
    <div>

      <Banner/>
      {/* <LazyEyeDetector/> */}
      <Eyegame/>
      {/* <Mentalhealth/> */}
    </div>
  )
}

export default Home