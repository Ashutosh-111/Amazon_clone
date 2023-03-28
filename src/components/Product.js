import React from "react";
// import "./Product.css";
import Button  from '@mui/material/Button'

function Product({ id, title, image, price, rating }) {
 
  return (
    <div>
            <div className='product_info'>
                <p>{title}</p>
                <p>{price}</p>
                <div>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>a</p>
                        ))}
                </div>
                <img src={image} alt="abc"/>
            </div>
            <div className='submit_button'>
                {/* <button>Add to </button> */}
                <Button variant="contained">Add to Bag</Button>
            </div>
        </div>
  );
}

export default Product