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
	const sty = {
		backgroundColor: isActive ? "#444" : "#ee536d",
		border: isActive ? "2px solid #ee536d" : "2px solid #444",
	};
	return (
		<div className='table-date-con'>
			<div
				className='table-page-con'
				style={sty}
				onClick={() => handleClick(id)}>
				<h1>{day}</h1>
			</div>
			<p>{dayInWeek}</p>
		</div>
	);
};

export default TableDateDisplay;
