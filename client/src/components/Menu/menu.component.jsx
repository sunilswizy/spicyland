import React from "react";
import "./menu.styles.scss";

import MenuOverview from "../Menu-overview/menu-overview.component";

import { useSelector } from "react-redux";
import {
	selectCollection,
	selectLoading,
} from "../../redux/collection/selector";
import ColorSpinner from "../color-spinner/color-spinner.component";
import Footer from "../Footer/footer.component";

const Menu = () => {
	const collection = useSelector(selectCollection);
	const isLoading = useSelector(selectLoading);

	return (
		<>
			<div className='menu-component'>
				{isLoading ? (
					<ColorSpinner />
				) : (
					Object.keys(collection).map((product, id) => {
						return <MenuOverview key={id} product={collection[product]} />;
					})
				)}
			</div>

			<Footer />
		</>
	);
};

export default Menu;
