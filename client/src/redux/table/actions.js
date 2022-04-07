import { TABLE_BOOKED, REFRESH_TABLE } from "./types";

export const updateTableList = (id, table_id) => ({
	type: TABLE_BOOKED,
	payload: {
		id,
		table_id,
	},
});

export const refreshTable = () => ({
	type: REFRESH_TABLE,
});
