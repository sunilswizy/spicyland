import React from "react";
import "./checkout.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
	selectCartItems,
	selectCartItemsTotal,
} from "../../redux/cart/selector";

import CheckoutItem from "../../components/Checkout-item/checkout-item.component";

const Checkout = ({ cartItems, total }) => {
	return (
		<div className='checkout'>
			<div className='checkout-header'>
				<h1>
					Check <span>out</span>
				</h1>
			</div>

			<div className='checkout-item-list'>
				{cartItems.map(item => {
					const price = item.quantity * item.price;
					return <CheckoutItem key={item.name} price={price} item={item} />;
				})}
			</div>
			<div className='checkout-total'>
				<h1>Total ${total}</h1>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartItemsTotal,
});

export default connect(mapStateToProps)(Checkout);
