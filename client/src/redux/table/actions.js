import { TABLE_BOOKED } from "./types";

export const updateTableList = (id, table_id) => ({
	type: TABLE_BOOKED,
	payload: {
		id,
		table_id,
	},
});
