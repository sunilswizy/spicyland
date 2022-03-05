import React from "react";
import "./table-date-display.styles.scss";

const TableDateDisplay = ({
	id,
	day,
	handleClick,
	isActive,
	dayInWeek,
	lunch,
	dinner,
}) => {
	return (
		<div
			className='table-page-con'
			style={{ backgroundColor: isActive ? "white" : "blue" }}
			onClick={() => handleClick(id)}>
			<p>{dayInWeek}</p>
			<h1>{day}</h1>
		</div>

		// {/* <h1>Lunch</h1>
		// <div>
		// 	{lunch.map(el => (
		// 		<Button cart={true} dialog={true}>
		// 			{el.time}
		// 		</Button>
		// 	))}
		// </div>
		// <h1>Dinner</h1>
		// <div>
		// 	{dinner.map(el => (
		// 		<Button cart={true} dialog={true} reserved={true}>
		// 			{el.time}
		// 		</Button>
		// 	))}
		// </div> */}
	);
};

export default TableDateDisplay;
