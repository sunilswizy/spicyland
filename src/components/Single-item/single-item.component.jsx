import React, { useEffect, useState } from "react";
import "./single-item.styles.scss";

import { useParams } from "react-router-dom";
import MenuFoods from "../Menu-foods/menu-foods.component";

import { useSelector } from "react-redux";
import {
	selectCollection,
	selectLoading,
} from "../../redux/collection/selector";
import ColorSpinner from "../color-spinner/color-spinner.component";

const SingleItem = () => {
	const collection = useSelector(selectCollection);
	const loading = useSelector(selectLoading);

	const { food } = useParams();
	const [sigleCollection, setSingleCollection] = useState({});

	useEffect(() => {
		setSingleCollection(collection[food.toLowerCase()]);
	}, [collection, food]);

	return (
		<div className='single-item'>
			<div className='single-item-headings'>
				<h1>{food}</h1>
			</div>

			{loading ? (
				<ColorSpinner />
			) : (
				<div className='single-item-items'>
					{setSingleCollection ? (
						sigleCollection?.items?.map(({ id, ...others }) => {
							return <MenuFoods key={id} id={id} {...others} />;
						})
					) : (
						<ColorSpinner />
					)}
				</div>
			)}
		</div>
	);
};

export default SingleItem;
