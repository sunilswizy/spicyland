import React from "react";
import "./menu.styles.scss";

import menuItem from "./shop.data";

import MenuOverview from "../Menu-overview/menu-overview.component";

const Menu = () => {
	const data = menuItem;
	return (
		<div className='menu-component'>
			{data.map(({ id, ...others }) => {
				return <MenuOverview key={id} {...others} />;
			})}
		</div>
	);
};

export default Menu;
