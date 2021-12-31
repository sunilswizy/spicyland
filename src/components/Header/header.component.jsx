import React from "react";
import './header.styles.scss'

import CartIcon from "../Cart-icon/cart-icon.component";

import { Link } from "react-router-dom";

const Header = ({profile}) => {
    console.log(profile)
    return (
        <header className="header"> 
            
            <div className="logo">
              <Link to='/'>
                <i className="fas fa-pizza-slice"></i>fooDoor
              </Link>
            </div>

            <div id="menu-bar" className="fas fa-bars"></div>

            <nav className="navbar">
                <div className="links">
                     <Link to="/"><i className="fas fa-search"></i> Search</Link>
                </div>
                <div className="links">
                    <Link to="/shop"><i className="fas fa-book"></i> Menu</Link>
                </div>
                <div className="links">
                     <Link to="/contact"><i className="far fa-address-book"></i> Contact</Link> 
                </div>
                <div className="links">
                    <CartIcon/> 
                </div>
                <div className="links last">
                    {
                        profile ? 
                            <>
                                {
                                    profile.imageUrl ? 
                                    <img src={profile.imageUrl} alt={profile.name} className="profile-img" />
                                    :
                                    <i className="far fa-user"></i> 
                                }
                            </> 
                         :
                        <Link to="/signin"><i className="far fa-user"></i> Sign In</Link>
                    }
                    
                </div>
            </nav>
      </header>
    )
}

export default Header
