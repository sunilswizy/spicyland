import React from "react";
import "./menu-foods.styles.scss";

import CartButton from "../Cart-button/cart-button.component";

const MenuFoods = ({ name, imageUrl, price }) => {
	return (
		<div className='menu-foods'>
			<div
				className='menu-foods-background'
				style={{ backgroundImage: `url(${imageUrl})` }}>
				<div className='cart-button'>
					<CartButton>ADD</CartButton>
				</div>
			</div>
			<div className='menu-foods-details'>
				<h3>{name}</h3>
				<h3>${price}</h3>
			</div>
		</div>
	);
};

export default MenuFoods;
