import React, { useState } from "react";
import "./menu-overview.styles.scss";
import MenuFoods from "../Menu-foods/menu-foods.component";
import { useHistory } from "react-router-dom";

import { memo } from "react";
import { getRandItems } from "./menu-overview.utils";
import { useEffect } from "react";
import ColorSpinner from "../color-spinner/color-spinner.component";

const MenuOverview = ({ product }) => {
	const { title, routeName, items } = product;
	const [randItems, setRandItems] = useState([]);
	const history = useHistory();

	useEffect(() => {
		setRandItems(getRandItems(items));
	}, [items]);

	return (
		<div className='menu-overview'>
			{randItems.length ? (
				<>
					<div
						className='menu-overview-heading'
						onClick={() => history.push(`/menu/${routeName}`)}>
						<h1>{title}</h1>
					</div>
					<div className='menu-overview-items'>
						{!randItems.length ? (
							<ColorSpinner />
						) : (
							randItems.map(({ id, ...others }) => {
								return (
									<div
										key={id}
										data-aos='zoom-in'
										data-aos-offset='150'
										data-aos-duration='600'>
										<MenuFoods id={id} {...others} />
									</div>
								);
							})
						)}
					</div>
				</>
			) : (
				<ColorSpinner />
			)}
		</div>
	);
};

export default memo(MenuOverview);
