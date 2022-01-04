import React from "react";
import './header.styles.scss'

import CartIcon from "../Cart-icon/cart-icon.component";
import ProfileImg from "../Profile-img/profile-img.component";

import { Link } from "react-router-dom";

const Header = ({profile, handleLogout}) => {
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
                     <Link to="/search"><i className="fas fa-search"></i> Search</Link>
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
                <div className="last">
                    {
                        profile ? 
                            <>
                                {
                                    profile.imageUrl ? 
                                    <ProfileImg profile={profile} handleLogout={handleLogout}/>
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
