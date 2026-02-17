import React from 'react'

import Product from './components/Product'
import './app.css'
import { useSelector } from 'react-redux'

export default function App() {
  let productList =useSelector((state)=>state)
  console.log(productList);
  
  return (
    <div className='products-container'>
      {productList.products.map(({id,title, rating, price, image})=>(
        <Product  key={id} title={title} rating={rating.rate} price={price} imageUrl={image}/>
      ))}
    </div>
  )
}
