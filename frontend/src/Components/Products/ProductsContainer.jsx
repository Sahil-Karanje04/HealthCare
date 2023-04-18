import React from 'react'
import './Products.css'
import ProductCard from './ProductCard'

const ProductsContainer = () => {
  return (
    <div className='Product-container'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
    </div>
  )
}

export default ProductsContainer