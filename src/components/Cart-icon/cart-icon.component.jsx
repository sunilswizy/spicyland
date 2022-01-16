import React, { useState } from "react";
import { ReactComponent as Cart } from "../../assests/cart.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
	const [emptyHidden, setEmptyHidden] = useState(true);

	return (
		<>
			<div
				className='cart-icon  disable-select'
				onMouseOver={() => setEmptyHidden(false)}
				onMouseOut={() => setEmptyHidden(true)}>
				<Cart className='icon' />
				<span className='qty'>1</span>
				Cart
			</div>

			{!emptyHidden && (
				<div className='empty-cart  disable-select'>
					<div className='empty-card-title'>
						<h1>Cart Empty !</h1>
					</div>
					<div>
						<span className='empty-cart-sub'>
							Good food is always cooking! Go ahead, order some yummy items from
							the menu.
						</span>
					</div>
					{/* <div className="empty-cart-btn">
                    <ButtonBox>Menu</ButtonBox>
                </div> */}
				</div>
			)}
		</>
	);
};

export default CartIcon;
