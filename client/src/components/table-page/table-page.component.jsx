import React, { useState } from "react";
import "./table-page.styles.scss";

import TableDateDisplay from "../table-date-display/table-date-display.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDayList } from "../../redux/table/selector";
import TableChild from "../table-child/table-child.component";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// "https://i.ibb.co/1QKhfrh/table.jpg"
// https://www.opentable.com/r/the-druid-garden-bangalore?originId=9c950057-11d6-4733-b710-37cef7527911&corrid=9c950057-11d6-4733-b710-37cef7527911&avt=eyJ2IjoyLCJtIjoxLCJwIjowLCJzIjowLCJuIjowfQ
// https://resy.com/cities/chn/barracks?date=2022-03-04&seats=2

const TablePage = ({ daysList }) => {
	const [currentDayItem, setCurrentDayItem] = useState(0);

	const [guests, setGuests] = useState("2 Guests");
	const currentDate = `${daysList[currentDayItem].dayInWeek}
	${daysList[currentDayItem].month} ${daysList[currentDayItem].day}`;

	const handleChange = event => {
		setGuests(event.target.value);
	};
	return (
		<div>
			<h1>TablePage</h1>
			<h2>{currentDate}</h2>

			<FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
				<InputLabel id='select-filled-label'>Guests</InputLabel>
				<Select
					labelId='select-filled-label'
					id='simple-select-filled'
					value={guests}
					onChange={handleChange}>
					<MenuItem value='2 Guests'>2 Guests</MenuItem>
					<MenuItem value='3 Guests'>3 Guests</MenuItem>
					<MenuItem value='4 Guests'>4 Guests</MenuItem>
				</Select>
			</FormControl>
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

			<h1>Lunch</h1>
			<div>
				{daysList[currentDayItem].timing.map(el =>
					el.type === "lunch" ? (
						<TableChild
							{...el}
							currentDayItem={currentDayItem}
							guests={guests}
							currentDate={currentDate}
						/>
					) : null
				)}
			</div>
			<h1>Dinner</h1>
			<div>
				{daysList[currentDayItem].timing.map(el =>
					el.type === "dinner" ? (
						<TableChild
							{...el}
							currentDayItem={currentDayItem}
							guests={guests}
							currentDate={currentDate}
						/>
					) : null
				)}
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	daysList: selectDayList,
});

export default connect(mapStateToProps)(TablePage);
