import { createSelector } from "reselect";

const selectTable = state => state.table;

export const selectDayList = createSelector(
	[selectTable],
	table => table.dayList
);
