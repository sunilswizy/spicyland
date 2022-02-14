import React from "react";
import "./single-item.styles.scss";

import { useParams } from "react-router-dom";
import MenuFoods from "../Menu-foods/menu-foods.component";
import { v4 as uuid } from "uuid";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/collection/selector";

const SingleItem = ({ collection }) => {
	const { food } = useParams();

	const data = collection.find(el => {
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

const mapStateToProps = createStructuredSelector({
	collection: selectCollection,
});

export default connect(mapStateToProps)(SingleItem);
