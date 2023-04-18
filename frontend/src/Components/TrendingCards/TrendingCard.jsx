import React from 'react'
import './TrendingCards.css'

const TrendingCard = (prop) => {
  return (
    <div className='trending-card'>
        <div className="tr-image">
          <img src={prop.imgUrl} alt="img"  /> 
        </div>
        <div className="tr-title">
          <h3>{prop.title}</h3>
        </div>
    </div>
  )
}

export default TrendingCard