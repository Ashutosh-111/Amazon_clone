import React from 'react'
import banner1 from './assets/banner1.jpg';
import Product from './Product.js'

import './Banner.css';

function Banner() {
  return (
    <div>
      <div className='banner_images'>
        <img className='banner' src={banner1} alt="banner" />
      </div>
      
    </div>
  )
}

export default Banner