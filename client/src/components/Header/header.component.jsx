import React from "react";
import "./header.styles.scss";

import CartIcon from "../Cart-icon/cart-icon.component";
import ProfileImg from "../Profile-img/profile-img.component";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { selectCurrentUser } from "../../redux/user/selector";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser }) => {
	return (
		<nav className='header navbar navbar-expand-lg'>
			<div className='container-fluid'>
				<div className='logo'>
					<Link to='/' className='link navbar-brand logo-name  disable-select'>
						<i className='fas fa-pizza-slice'></i> SpicylanD
					</Link>
				</div>

				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					{/* <MenuIcon /> */}
					<i className='fas fa-bars fa-3x bar'></i>
				</button>

				<div
					className='collapse navbar-collapse navbar-head'
					id='navbarSupportedContent'>
					<nav className='navbar-nav me-auto mb-2 mb-lg-0 '>
						<div className='links nav-item'>
							<Link to='/search' className='link disable-select nav-link'>
								<i className='fas fa-search'></i> Search
							</Link>
						</div>

						<div className='links nav-item'>
							<Link to='/menu' className='link disable-select nav-link'>
								<i className='fas fa-book'></i> Menu
							</Link>
						</div>

						<div className='links nav-item'>
							<Link to='/contact' className='link disable-select nav-link'>
								<i className='far fa-address-book'></i> Contact
							</Link>
						</div>

						<div className='links nav-item'>
							<CartIcon />
						</div>

						<div className='links nav-item disable-select'>
							{currentUser ? (
								<ProfileImg />
							) : (
								<Link to='/signin' className='link disable-select nav-link'>
									<i className='far fa-user'></i> Sign In
								</Link>
							)}
						</div>
					</nav>
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
