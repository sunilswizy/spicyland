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
					const id = uuid();
					return (
						<div
							data-aos='zoom-in'
							data-aos-offset='150'
							data-aos-duration='600'>
							<MenuFoods key={id} id={id} {...others} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default memo(MenuOverview);
