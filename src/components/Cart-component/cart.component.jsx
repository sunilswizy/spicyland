import React from "react";
import "./cart.styles.scss";

import CartButton from "../Cart-button/cart-button.component";

import { connect } from "react-redux";
import { cartToggle } from "../../redux/cart/action";
import { useHistory } from "react-router-dom";

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
							<div className='cart-list-child' key={el.name}>
								<div
									style={{ backgroundImage: `url(${el.imageUrl})` }}
									className='cart-list-image'
								/>
								<h1 className='card-list-name'>{el.name}</h1>
								<span className='card-list-quantity'>1 X {el.quantity}</span>
							</div>
							<hr />
						</>
					);
				})}
			</div>

			<div className='cart-buttons'>
				<div className='cart-price'>
					<h3>TOTAL ${price}</h3>
				</div>
				<div className='cart-button'>
					{cartItems.length ? (
						<CartButton
							dialog={true}
							cart={true}
							onClick={handleRoute}
							className='disable-select'>
							CHECKOUT
						</CartButton>
					) : (
						<CartButton
							dialog={true}
							cart={true}
							className='disable-select'
							onClick={handleMenuRoute}>
							ORDER NOW
						</CartButton>
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	cartItems: state.cart.cartItems,
	price: state.cart.price,
});

const mapDispatchToProps = dispatch => ({
	cartToggle: val => dispatch(cartToggle(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
