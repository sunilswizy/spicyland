import React, { useEffect } from "react";

import Menu from "../../components/Menu/menu.component";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import SingleItem from "../../components/Single-item/single-item.component";
import { useDispatch } from "react-redux";
import { fetchProductsAsync } from "../../redux/collection/actions";

const MentRoute = () => {
	// useEffect(() => {
	// 	const fetching = async () => {
	// 		await addProductsToStore("products", props.collection);
	// 	};

	// 	fetching();
	// });

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProductsAsync());
	}, [dispatch]);

	return (
		<Switch>
			<Route exact path='/menu' component={Menu} />
			<Route path='/menu/:food' component={SingleItem} />
		</Switch>
	);
};

export default MentRoute;
