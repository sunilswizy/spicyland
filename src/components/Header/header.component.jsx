import React from "react";
import "./header.styles.scss";

import CartIcon from "../Cart-icon/cart-icon.component";
import ProfileImg from "../Profile-img/profile-img.component";

import { Link } from "react-router-dom";

const Header = ({ profile }) => {
	return (
		<header className='header'>
			<div className='logo container'>
				<Link to='/' className='link'>
					<span className='logo-name  disable-select'>
						<i className='fas fa-pizza-slice'></i> SpicylanD
					</span>
				</Link>
			</div>

			<div id='menu-bar' className='fas fa-bars'></div>

			<nav className='navbar-head'>
				<div className='links'>
					<Link to='/search' className='link disable-select'>
						<i className='fas fa-search'></i> Search
					</Link>
				</div>
				<div className='links'>
					<Link to='/shop' className='link disable-select'>
						<i className='fas fa-book'></i> Menu
					</Link>
				</div>
				<div className='links'>
					<Link to='/contact' className='link disable-select'>
						<i className='far fa-address-book'></i> Contact
					</Link>
				</div>
				<div className='links'>
					<CartIcon />
				</div>
				<div className='last'>
					{profile ? (
						<ProfileImg currentUser={profile} />
					) : (
						<Link to='/signin' className='link disable-select'>
							<i className='far fa-user'></i> Sign In
						</Link>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
