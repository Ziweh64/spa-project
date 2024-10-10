import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                S-P-A
            </div>
            <div className='menu'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className='navbar-list'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="/user/OngeziweQwayede">User Profile</Link></li>
            </ul>
        </div>

    )
}
export default Navbar;