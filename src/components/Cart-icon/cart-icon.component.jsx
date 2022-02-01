import React from "react";
import { ReactComponent as CartBag } from "../../assests/cart.svg";
import "./cart-icon.styles.scss";

import Cart from "../Cart-component/cart.component";
import { connect } from "react-redux";
import { cartToggle } from "../../redux/cart/action";

const CartIcon = ({ itemsCount, isHidden, cartToggle }) => {
	return (
		<>
			<div
				className='cart-icon  disable-select'
				onClick={() => cartToggle(!isHidden)}>
				<div className='cart-container'>
					<CartBag className='icon'>1sda</CartBag>
					<span className='qty'>{itemsCount}</span>
				</div>
				<span className='cart-content'>Cart</span>
			</div>
			{!isHidden && <Cart />}
		</>
	);
};

const mapStateToProps = state => ({
	itemsCount: state.cart.itemsCount,
	isHidden: state.cart.isHidden,
});

const mapDispatchToProps = dispatch => ({
	cartToggle: val => dispatch(cartToggle(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
