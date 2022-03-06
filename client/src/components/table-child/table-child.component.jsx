import React, { useState } from "react";
import "./table-child.styles.scss";

import DialogTable from "../table-dialog/table-dialog.component";
import { useDispatch } from "react-redux";
import { updateTableList } from "../../redux/table/actions";

const TableChild = ({
	table_id,
	reserved,
	time,
	currentDayItem,
	guests,
	currentDate,
}) => {
	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};
	// () => dispatch(updateTableList(currentDayItem, table_id))

	return (
		<>
			<button
				disabled={reserved}
				style={{ backgroundColor: reserved ? "#e92727" : "#222" }}
				className='table-btn'
				onClick={() => setOpen(true)}
				key={table_id}>
				{time}
				<br />
				<span>{reserved ? "Reserved" : "Dinning Room"}</span>
			</button>
			<DialogTable
				open={open}
				handleClose={handleClose}
				handleReserve={() =>
					dispatch(updateTableList(currentDayItem, table_id))
				}
				currentDate={currentDate}
				guests={guests}
				time={time}
			/>
		</>
	);
};

export default TableChild;
