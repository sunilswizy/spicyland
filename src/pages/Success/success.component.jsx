import React from "react";
import "./success.styles.scss";

import { Link } from "react-router-dom";
import CartButton from "../../components/Cart-button/cart-button.component";
import { useHistory } from "react-router-dom";

const Success = () => {
	const history = useHistory();
	return (
		<div className='success-con disable-select'>
			<div className='success-img-con'>
				<img
					src={`https://i.ibb.co/Sv2Sh7B/takeaway-food-box-rice1.jpg`}
					alt='rice box'
				/>
			</div>
			<div className='success-img-heading'>
				<h1>Order placed successfully!</h1>
				<div className='success-logo'>
					<Link to='/' className='link navbar-brand '>
						<i className='fas fa-pizza-slice'></i> SpicylanD
					</Link>
				</div>
				<div className='success-btn'>
					<CartButton dialog='true' onClick={() => history.push("/")}>
						HOME
					</CartButton>
				</div>
			</div>
		</div>
	);
};

export default Success;
