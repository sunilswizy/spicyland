import React from "react";
import "./directory.styles.scss";

import MenuItem from "../styled-button/styled-button.component";
import { createStructuredSelector } from "reselect";
import { selectData } from "../../redux/directory/selector";
import { connect } from "react-redux";

const Directory = ({ data }) => {
	console.log(data);
	return (
		<div className='directory'>
			<div className='directory-heading'>
				<h1 className='directory-heading-name'>
					Our <span>specialty</span>
				</h1>
			</div>
			<div className='directory-con'>
				{data.map(({ id, ...otherProps }) => {
					return <MenuItem key={id} {...otherProps} />;
				})}
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	data: selectData,
});

export default connect(mapStateToProps)(Directory);
