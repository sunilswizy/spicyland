import React from "react";
import "./single-item.styles.scss";

import { useParams } from "react-router-dom";
import MenuFoods from "../Menu-foods/menu-foods.component";
import MENU_ITEMS from "../Menu/shop.data";
import { v4 as uuid } from "uuid";

const SingleItem = () => {
	const { food } = useParams();

	const items = MENU_ITEMS;

	const data = items.find(el => {
		return el.title.toLowerCase() === food.toLowerCase();
	});

	return (
		<div className='single-item'>
			<div className='single-item-headings'>
				<h1>{data.title}</h1>
			</div>
			<div className='single-item-items'>
				{data.items.map(({ ...others }) => {
					const id = uuid();
					return <MenuFoods key={id} id={id} {...others} />;
				})}
			</div>
		</div>
	);
};

export default SingleItem;
