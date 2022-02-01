import React, { useState } from "react";
import "./menu-foods.styles.scss";

import CartButton from "../Cart-button/cart-button.component";
import { connect } from "react-redux";
import { addCart } from "../../redux/cart/action";
import { addItemToCart } from "../../redux/cart/action";
import DialogFoods from "../Dialog-foods/dialog-foods.component";

import TripleButton from "../Thriple-button/thriple-button.component";

const MenuFoods = ({
	name,
	imageUrl,
	price,
	addCart,
	addItemToCart,
	cartItems,
}) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const item = {
		name,
		imageUrl,
		price,
	};

	const handleClick = e => {
		e.stopPropagation();
		addCart();
		addItemToCart(item);
	};

	const cartItem = cartItems.find(el => el.name === name);

	return (
		<>
			<div className='menu-foods' onClick={handleClickOpen}>
				<div
					className='menu-foods-background'
					style={{ backgroundImage: `url(${imageUrl})` }}>
					{cartItem ? (
						<div className='cart-triple-button'>
							<TripleButton item={item} cartItem={cartItem} />
						</div>
					) : (
						<div className='cart-button'>
							<CartButton className='disable-select' onClick={handleClick}>
								ADD
							</CartButton>
						</div>
					)}
				</div>
				<div className='menu-foods-details'>
					<h3>{name}</h3>
					<h3>${price}</h3>
				</div>
			</div>
			<DialogFoods
				open={open}
				handleClose={handleClose}
				item={item}
				cartItem={cartItem}
				handleClick={handleClick}
			/>
		</>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});

export default connect(mapStateToProps, { addCart, addItemToCart })(MenuFoods);
