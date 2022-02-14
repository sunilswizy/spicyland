import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectData = createSelector(
	[selectDirectory],
	directory => directory.data
);
