import React, { useState } from "react";
import "./menu-foods.styles.scss";

import CartButton from "../Cart-button/cart-button.component";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/action";
import DialogFoods from "../Dialog-foods/dialog-foods.component";

import TripleButton from "../Thriple-button/thriple-button.component";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/selector";

const MenuFoods = ({
	id,
	name,
	imageUrl,
	price,
	stock,
	priceUrl,
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
		id,
		name,
		imageUrl,
		price,
		priceUrl,
		stock,
	};

	const handleClick = e => {
		e.stopPropagation();
		addItemToCart(item);
	};

	const cartItem = cartItems.find(el => el.name === name);
	const isStockAvailable = cartItem ? cartItem.stock > 1 : true;

	return (
		<>
			<div className='menu-foods' onClick={handleClickOpen}>
				<div
					className='menu-foods-background'
					style={{ backgroundImage: `url(${imageUrl})` }}>
					<>
						{cartItem ? (
							<div className='cart-triple-button'>
								<TripleButton
									item={item}
									cartItem={cartItem}
									isStockAvailable={isStockAvailable}
								/>
							</div>
						) : (
							<div className='cart-button'>
								<CartButton className='disable-select' onClick={handleClick}>
									ADD
								</CartButton>
							</div>
						)}
					</>
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
				isStockAvailable={isStockAvailable}
			/>
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default connect(mapStateToProps, { addItemToCart })(MenuFoods);
