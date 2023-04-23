import React from "react";
import "./start-page.styles.scss";

import { useHistory } from "react-router-dom";

const StartPage = () => {
	const history = useHistory();

	return (
		<div
			className='start-page disable-select'
			style={{
				backgroundImage: `url(https://i.ibb.co/PDLB4jf/istockphoto-1179449390-612x612.jpg)`,
			}}>
			<div className='transparent' />
			<div className='transparent-contenet' />
			<div
				className='start-page-details'
				data-aos='zoom-in'
				data-aos-offset='250'
				data-aos-duration='600'>
				<p className='start-page-subheading'>Welcome to land of spicy.</p>
				<h1 className='start-page-heading'>SpicylanD!</h1>
				<div className='start-page-btn-con'>
					<button onClick={() => history.push("/menu")}>
						COME ON IN, WE'RE OPEN
					</button>
				</div>
			</div>
		</div>
	);
};

export default StartPage;
