import React from 'react'
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import logo3 from './logo3.png';
import SearchIcon from '@mui/icons-material/Search';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function navBar() {
    return (

        <div className='navbar_main'>
<NavLink to="/">
            <img className='img_logo' src={logo3} alt="logo" />
            </NavLink>
            <div className='navbar_search'>
                <input className='navbar_search_bar' type="text" />
                <SearchIcon className='navbar_searchicon' />
            </div>
            <div className='navbar_option'>

                <div className='navbar_guest_sign'>
                    <NavLink to="/signin">
                    <span className='navbar_guest'>Hello Guest</span>
                    <span className='navbar_signin'>Sign in</span>
                    </NavLink>
                </div>

                <div className='navbar_return_order'>
                    <span className='navbar_returns'>Returns</span>
                    <span className='navbar_orders'>Orders</span>
                </div>

                <div className='navbar_cart'>
                <NavLink to="/cart">
                    <span className='navbar_basket'><ShoppingCartSharpIcon /></span>
                    <span className='navbar_count'> 10 </span>

                    </NavLink>
                </div>
            </div>


        </div>
        
    )
}

export default navBar