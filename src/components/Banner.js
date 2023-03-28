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
      <Product
        id="1"
        title="abc"
        price={5}
        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81KoSSAwH2L._SL1500_.jpg"
        rating={5} />
    </div>
  )
}

export default Banner