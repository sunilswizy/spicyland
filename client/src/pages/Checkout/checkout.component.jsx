import React from "react";
import "./checkout.styles.scss";

import { useState } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartItemsTotal,
} from "../../redux/cart/selector";

import CartButton from "../../components/Cart-button/cart-button.component";
import CheckoutItem from "../../components/Checkout-item/checkout-item.component";

import { useHistory } from "react-router-dom";

const Checkout = props => {
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	const items = props.cartItems.map(item => ({
		price: item.priceUrl,
		quantity: item.quantity,
	}));

	const handlePay = () => {
		setLoading(true);

		setTimeout(() => {
			fetch("https://spicyland.herokuapp.com/create-checkout-session", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					items,
				}),
			})
				.then(res => {
					setLoading(true);
					if (res.ok) return res.json();
					return res.json().then(json => Promise.reject(json));
				})
				.then(({ url }) => {
					window.location = url;
				})
				.catch(err => {
					console.log(err);
				});
		}, 500);
		setLoading(false);
	};

	return (
		<div className='checkout'>
			<div className='checkout-header'>
				<h1>
					Check <span>out</span>
				</h1>
			</div>
			{props.cartItems.length ? (
				<>
					<div className='checkout-item-list'>
						{props.cartItems.map(item => {
							const price = item.quantity * item.price;
							return <CheckoutItem key={item.name} price={price} item={item} />;
						})}
					</div>
					<div className='checkout-total'>
						<h1>Total ${props.total}</h1>
						<CartButton dialog='true' disabled={loading} onClick={handlePay}>
							{loading ? (
								"please wait"
							) : (
								<span>
									<i className='fab fa-amazon-pay' />
									&nbsp;&nbsp;Now
								</span>
							)}
						</CartButton>
					</div>
				</>
			) : (
				<div className='empty-con disable-select'>
					<div className='empty-img-con'>
						<img
							src='https://i.ibb.co/TwdCrVS/fast-food-clipart.jpg'
							alt='food box'
						/>
					</div>
					<div className='empty-img-heading'>
						<h1>Cart is Empty!</h1>
						<p>
							Good Food is always cooking! go ahead and order some yummy items
							in menu!
						</p>
						<div className='empty-btn'>
							<CartButton dialog='true' onClick={() => history.push("/menu")}>
								Menu
							</CartButton>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(Checkout);
