import MENU_ITEMS from "./shop.data";

const initialState = {
	collection: MENU_ITEMS,
};

export const collectionReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
