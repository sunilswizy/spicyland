import React from "react";
import "./menu.styles.scss";

import MenuOverview from "../Menu-overview/menu-overview.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/collection/selector";

const Menu = props => {
	// useEffect(() => {
	// 	document.title = title;
	// }, []);

	return (
		<div className='menu-component'>
			{props.collection.map(({ id, ...others }) => {
				return <MenuOverview key={id} {...others} />;
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collection: selectCollection,
});

export default connect(mapStateToProps)(Menu);
