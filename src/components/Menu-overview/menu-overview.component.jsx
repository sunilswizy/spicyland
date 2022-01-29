import React from "react";
import "./menu-overview.styles.scss";
import MenuFoods from "../Menu-foods/menu-foods.component";
import { useHistory } from "react-router-dom";

import { memo } from "react";
import { getRandItems } from "./menu-overview.utils";
import { v4 as uuid } from "uuid";

const MenuOverview = ({ title, routeName, items }) => {
	const history = useHistory();

	const randItems = getRandItems(items);

	return (
		<div className='menu-overview'>
			<div
				className='menu-overview-heading'
				onClick={() => history.push(`/menu/${routeName}`)}>
				<h1>{title}</h1>
			</div>
			<div className='menu-overview-items'>
				{randItems.map(({ ...others }) => {
					return <MenuFoods key={uuid()} {...others} />;
				})}
			</div>
		</div>
	);
};

export default memo(MenuOverview);
