import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        
    <header className="header__nav">
    <div className="logo">
        <p><i className="uil uil-map-marker"></i>ParkingZone</p>
    </div>


    <div className="navbar" id="navbar-link">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Sign">Sign Up</NavLink>
    </div>
    
    
    
    <div class="logo1">
           
        <NavLink to="/Login"><i class="uil uil-lock"></i>LogIn</NavLink>
        <NavLink to=""><i class="uil uil-whatsapp"></i> +91 558855222</NavLink>

        </div>
</header>
    )
}

export default Navbar
