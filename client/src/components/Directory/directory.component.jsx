import React from "react";
import "./directory.styles.scss";

import MenuItem from "../styled-button/styled-button.component";
import { createStructuredSelector } from "reselect";
import { selectData } from "../../redux/directory/selector";
import { connect } from "react-redux";

const Directory = ({ data }) => {
	return (
		<div className='directory'>
			<div className='directory-heading'>
				<h1 className='directory-heading-name'>
					Our <span>specialty</span>
				</h1>
			</div>
			<div className='directory-con'>
				{data.map(({ id, dataAos, ...otherProps }) => {
					return (
						<div
							data-aos={dataAos}
							data-aos-offset='100'
							data-aos-duration='600'>
							<MenuItem key={id} {...otherProps} />;
						</div>
					);
				})}
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	data: selectData,
});

export default connect(mapStateToProps)(Directory);
