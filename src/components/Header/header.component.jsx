import React from "react";
import './header.styles.scss'

import CartIcon from "../Cart-icon/cart-icon.component";
import ProfileImg from "../Profile-img/profile-img.component";

import { Link } from "react-router-dom";

const Header = ({profile, handleLogout}) => {
    return (
        <header className="header"> 
            
            <div className="logo container">
              <Link to='/' className="link">
                <span className="logo-name">
                <i className="fas fa-pizza-slice"></i> SpicylanD</span>
              </Link>
            </div>

            <div id="menu-bar" className="fas fa-bars"></div>

            <nav className="navbar-head">
                <div className="links">
                     <Link to="/search" className="link"><i className="fas fa-search"></i> Search</Link>
                </div>
                <div className="links">
                    <Link to="/shop" className="link"><i className="fas fa-book"></i> Menu</Link>
                </div>
                <div className="links">
                     <Link to="/contact" className="link"><i className="far fa-address-book"></i> Contact</Link> 
                </div>
                <div className="links">
                    <CartIcon/> 
                </div>
                <div className="last">
                    {
                        profile ? 
                            <>
                                {
                                    profile?.photoURL ? 
                                    <ProfileImg profile={profile} handleLogout={handleLogout}/>
                                    :
                                    <i className="far fa-user"></i> 
                                }
                            </> 
                         :
                        <Link to="/signin" className="link" ><i className="far fa-user"></i> Sign In</Link>
                    }
                    
                </div>
            </nav>
      </header>
    )
}

export default Header
