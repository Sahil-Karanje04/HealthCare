import React from 'react'
import './Products.css'

const ProductCard = () => {
  return (
    <div>
        <div className="Product-card">
            <div className="pr-card-img">
              <img src="" alt="img" />
            </div>
            <div className="pr-card-text">
              <h1>Title</h1>
              <p>rating</p>
              <p>desc</p>
              <button>Shop Now</button>
            </div>
        </div>

    </div>
  )
}

export default ProductCard