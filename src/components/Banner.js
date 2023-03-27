import React from 'react'
import banner1 from './assets/banner1.jpg';


import './Banner.css';

function Banner() {
  return (
    <div className='banner_images'>
        <img className='banner' src={banner1} alt="banner" />
        
    </div>
  )
}

export default Banner