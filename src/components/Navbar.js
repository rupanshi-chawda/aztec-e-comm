import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper nav">
                <div className="container">
                    
                    <Link to="/" className="brand-logo trns">A Z T E C</Link>
                    <span className="right">
                     <Link to="/cart"><i className="large material-icons nicon trns">shopping_cart</i></Link>
                    </span>
                   
                </div>
            </nav>
   
        
    )
}

export default Navbar;
