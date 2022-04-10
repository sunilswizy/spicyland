import React from "react";
import "./menu-overview.styles.scss";
import MenuFoods from "../Menu-foods/menu-foods.component";
import { useHistory } from "react-router-dom";

import { memo } from "react";
import { getRandItems } from "./menu-overview.utils";

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
				{randItems.map(({ id, ...others }) => {
					return (
						<div
							key={id}
							data-aos='zoom-in'
							data-aos-offset='150'
							data-aos-duration='600'>
							<MenuFoods id={id} {...others} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default memo(MenuOverview);
