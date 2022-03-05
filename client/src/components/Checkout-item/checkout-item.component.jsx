import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import Button from "../../components/Thriple-button/thriple-button.component";
import { removeItem } from "../../redux/cart/action";

const CheckoutItem = ({ price, item, removeItem, isStockAvailable }) => {
	return (
		<>
			<div className='check-out-container disable-select'>
				<div className='checkout-item'>
					<div
						className='checkout-item-img'
						style={{ backgroundImage: `url(${item.imageUrl})` }}
					/>
					<h1 className='checkout-item-name'>{item.name}</h1>
					<div className='checkout-item-button'>
						<Button
							item={item}
							cartItem={item}
							inverted='true'
							isStockAvailable={isStockAvailable}
						/>
					</div>
					<h1 className='checkout-item-price'>${price}</h1>
					<button className='checkout-item-delete'>
						<i className='fas fa-times' onClick={() => removeItem(item)}></i>
					</button>
				</div>
			</div>
			<div className='checkout-ruler'>
				<hr className='hr' />
			</div>
		</>
	);
};

export default connect(null, { removeItem })(CheckoutItem);
