import React from 'react'
import Product from './Product.js'
import './Items.css';

function Items() {
  return (
    <div className="items">
      <Product
        id="1"
        title="abc"
        price={5}
        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81KoSSAwH2L._SL1500_.jpg"
        rating={3} />

      <Product
        id="1"
        title="abc"
        price={5}
        image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81KoSSAwH2L._SL1500_.jpg"
        rating={3} />        
    </div>
  )
}

export default Items