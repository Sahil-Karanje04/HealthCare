import React from 'react'
import './TrendingCards.css'
import TrendingCard from './TrendingCard'
import dog_food from '../../Assets/dog_food.jpg'
import cat_bath from '../../Assets/cat_bath.jpg'
import dog_toy from '../../Assets/dog_toy.jpg'

const TrendingCards = () => {
  return (
    <div className='trendingCards-container'>
        <TrendingCard title="Food" imgUrl={dog_food} />
        <TrendingCard title="Care" imgUrl={cat_bath}/>
        <TrendingCard title="Toy" imgUrl={dog_toy}/>
    </div>
  )
}

export default TrendingCards