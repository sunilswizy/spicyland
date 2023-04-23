import React, { useEffect, useState } from "react";
import "./table-page.styles.scss";

import TableDateDisplay from "../table-date-display/table-date-display.component";

import { connect } from "react-redux";
import { refreshTable } from "../../redux/table/actions";
import { createStructuredSelector } from "reselect";
import { selectDayList } from "../../redux/table/selector";
import TableChild from "../table-child/table-child.component";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TablePage = ({ daysList, refreshTable }) => {
	const [currentDayItem, setCurrentDayItem] = useState(0);

	const [guests, setGuests] = useState(2);
	const currentDate = `${daysList[currentDayItem].dayInWeek}
	${daysList[currentDayItem].month} ${daysList[currentDayItem].day}`;

	const handleChange = event => {
		setGuests(event.target.value);
	};

	useEffect(() => {
		const weekDay = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
		const currentDay = new Date();
		let nextDay = new Date(currentDay);
		nextDay.setDate(currentDay.getDate() + 1);
		let dayInWeek = weekDay[nextDay.getDay()];
		let month = nextDay.toString().slice(3, 7);
		let day = nextDay.toString().slice(7, 10);

		if (
			daysList[0].dayInWeek !== dayInWeek ||
			daysList[0].month !== month ||
			daysList[0].day !== day
		) {
			refreshTable();
		}
	}, []);

	return (
		<div className='table-page-container'>
			<div className='table-heading'>
				<h1>
					Reserve <span>Dinning! </span>
				</h1>
			</div>

			<div className='table-page-items'>
				<h2>{currentDate}</h2>
				<div className='table-page-select'>
					<FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
						<InputLabel id='select-filled-label'>Guests</InputLabel>
						<Select
							labelId='select-filled-label'
							id='simple-select-filled'
							value={guests}
							onChange={handleChange}>
							<MenuItem value={2}>2 Guests</MenuItem>
							<MenuItem value={3}>3 Guests</MenuItem>
							<MenuItem value={4}>4 Guests</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>

			<div className='table-page-hr'>
				<hr />
			</div>

			<div className='tables-container'>
				{daysList.map(el => (
					<TableDateDisplay
						{...el}
						key={el.id}
						isActive={el.id === currentDayItem}
						handleClick={setCurrentDayItem}
					/>
				))}
			</div>

			<div className='table-page-hr'>
				<hr />
			</div>

			<div className='table-page-lunch'>
				<h1>Lunch</h1>
				<div className='table-page-btn-child'>
					{daysList[currentDayItem].timing.map(el =>
						el.type === "lunch" ? (
							<TableChild
								{...el}
								currentDayItem={currentDayItem}
								guests={guests}
								currentDate={currentDate}
								key={el.table_id}
							/>
						) : null
					)}
				</div>
			</div>
			<div className='table-page-lunch'>
				<h1>Dinner</h1>
				<div className='table-page-btn-child'>
					{daysList[currentDayItem].timing.map(el =>
						el.type === "dinner" ? (
							<TableChild
								{...el}
								currentDayItem={currentDayItem}
								guests={guests}
								currentDate={currentDate}
								key={el.table_id}
							/>
						) : null
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	daysList: selectDayList,
});

const mapDispatchToProps = dispatch => ({
	refreshTable: () => dispatch(refreshTable()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
