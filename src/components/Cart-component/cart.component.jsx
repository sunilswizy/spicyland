import React from "react";
import "./cart.styles.scss";

import CartButton from "../Cart-button/cart-button.component";

import { connect } from "react-redux";
import { cartToggle } from "../../redux/cart/action";
import { useHistory } from "react-router-dom";
import {
	selectCartItems,
	selectCartItemsTotal,
} from "../../redux/cart/selector";
import { createStructuredSelector } from "reselect";

const Cart = ({ cartItems, cartToggle, price }) => {
	const history = useHistory();

	const handleToggle = () => {
		setTimeout(() => {
			cartToggle(true);
		}, 2500);
	};

	const handleRoute = () => {
		cartToggle(true);
		history.push("/checkout");
	};

	const handleMenuRoute = () => {
		cartToggle(true);
		history.push("/menu");
	};

	return (
		<div className='cart-box' onMouseLeave={handleToggle}>
			<div className='cart-list'>
				{cartItems.map(el => {
					return (
						<>
							<div className='cart-list-child' key={el.id}>
								<div
									style={{ backgroundImage: `url(${el.imageUrl})` }}
									className='cart-list-image'
								/>
								<h1 className='card-list-name'>{el.name}</h1>
								<span className='card-list-quantity'>
									{el.quantity} X ${el.price}
								</span>
							</div>
							<hr />
						</>
					);
				})}
			</div>

			<div className='cart-buttons'>
				{cartItems.length ? (
					<>
						<div className='cart-price disable-select'>
							<h3>TOTAL ${price}</h3>
						</div>
						<div className='cart-button'>
							<CartButton
								dialog='true'
								cart='true'
								onClick={handleRoute}
								className='disable-select'>
								CHECKOUT
							</CartButton>
						</div>
					</>
				) : (
					<>
						<div className='empty-msg disable-select'>
							<h1>Empty Cart !</h1>
							<p>
								Good Food is always cooking!
								<br /> go ahead and order some yummy items in menu!
							</p>
						</div>
						<div className='cart-button'>
							<CartButton
								dialog='true'
								cart='true'
								className='disable-select'
								onClick={handleMenuRoute}>
								Menu
							</CartButton>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	price: selectCartItemsTotal,
});

const mapDispatchToProps = dispatch => ({
	cartToggle: value => dispatch(cartToggle(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
