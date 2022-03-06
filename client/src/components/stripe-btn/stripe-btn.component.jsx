import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price, handleClick, reservedTime, guests }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51JZ3dlSGqpX5B65eSEpcncrRfo7nz9Qb6EaWHix0sU77cfce6DXWS7kNq17TYsMQUH5ec0DeGxrl3rvCQDWlqbnZ00pMNLc73P";

	const onToken = token => {
		fetch("http://localhost:5000/send-mail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ token, price, reservedTime, guests }),
		});
		alert("Payment Succesfull! Your table is reserved, Check your email!");
		handleClick();
	};

	return (
		<StripeCheckout
			label='Reserve Now'
			name='Spicyland Ltd.'
			image='https://i.ibb.co/D8gXSg7/logo192.png'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Reserve Now'
			token={onToken}
			stripeKey={publishableKey}
			allowRememberMe={true}>
			<button className='table-stripe-btn'>Reserve now</button>
		</StripeCheckout>
	);
};

export default StripeButton;
