import React from "react";
import "./table-home.styles.scss";

import { useHistory } from "react-router-dom";

const TableHome = () => {
	const history = useHistory();

	return (
		<div className='table-home disable-select'>
			<div
				className='table-home-img'
				data-aos='zoom-in-right'
				data-aos-offset='400'
				data-aos-duration='1000'>
				<img src='https://i.ibb.co/d4b2sSm/dining-table.png' alt='' />
			</div>
			<div
				className='table-home-content'
				data-aos='zoom-in-left'
				data-aos-offset='400'
				data-aos-duration='1000'>
				<div>
					<h2>SpicylanD!</h2>
					<h1>Dinning!</h1>
					<p>
						Reserve the dinning at SpicylanD
						<br /> based on your time.
					</p>
					<button onClick={() => history.push("/dining")}>RESERVE NOW!</button>
				</div>
			</div>
		</div>
	);
};

export default TableHome;
