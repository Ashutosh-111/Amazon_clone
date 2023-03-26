import React from 'react'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import logo3 from './logo3.png';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';

function navBar() {
    return (

        <div className='navbar_main'>

            <img className='img_logo' src={logo3} alt="logo" />

            <div className='navbar_search'>
                <input className='navbar_search_bar' type="text" />
                <SearchIcon className='navbar_searchicon' />
            </div>
            <div className='navbar_option'>

                <div className='navbar_guest_sign'>
                    <span className='navbar_guest'>Hello Guest</span>
                    <span className='navbar_signin'>Sign in</span>
                </div>

                <div className='navbar_return_order'>
                    <span className='navbar_returns'>Returns</span>
                    <span className='navbar_orders'>Orders</span>
                </div>

                <div className='navbar_cart'>
                    <span className='navbar_basket'><ShoppingCartSharpIcon /></span>
                </div>
            </div>


        </div>
    )
}

export default navBar