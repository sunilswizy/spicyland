import { getDayList, updateTable } from "./utils";
import { TABLE_BOOKED, REFRESH_TABLE } from "./types";

const initialState = {
	dayList: getDayList(),
};

const tableReducer = (state = initialState, action) => {
	switch (action.type) {
		case TABLE_BOOKED:
			return {
				...state,
				dayList: updateTable(
					state.dayList,
					action.payload.id,
					action.payload.table_id
				),
			};

		case REFRESH_TABLE:
			return {
				...state,
				dayList: getDayList(),
			};

		default:
			return state;
	}
};

export default tableReducer;
