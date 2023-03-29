import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import "./Product.css";
import StarIcon from '@mui/icons-material/Star';

import Button from '@mui/material/Button'

function Product({ id, title, image, price, rating }) {

    return (
        <div className="product">

            <Card className="product_info">
                <CardActionArea>
                    <CardMedia className="product_img"
                        component="img"
                        height="140"
                        image={image}
                        alt="product1"
                    />
                    <CardContent>
                        <Typography className="product_title" gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography className="product_price">$ {price}</Typography>
                        <Typography className="product_rating">{Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p><StarIcon /></p>
                            ))}</Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                        
                    </CardContent>
                    
                </CardActionArea>
                <div >
                            <Button className='submit_button' variant="contained">Add to Bag</Button>
                        </div>
            </Card>

            {/* <div className='product_info'>
                <p className="product_title">{title}</p>
                <p className="product_price">{price}</p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>a</p>
                        ))}
                </div>
                <img className="product_img" src={image} alt="abc"/>
            </div>
            <div className='submit_button'>
                <Button variant="contained">Add to Bag</Button>
            </div> */}
        </div>
    );
}

export default Product