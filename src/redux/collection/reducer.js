import { FETCHING } from "./types";

const initialState = {
	isLoading: false,
	collection: {},
	error: null,
};

export const collectionReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING.FETCH_PRODUCTS_START: {
			return {
				...state,
				isLoading: true,
			};
		}

		case FETCHING.FETCH_PRODUCTS_SUCCESS: {
			return {
				...state,
				isLoading: false,
				collection: action.payload,
			};
		}

		case FETCHING.FETCH_PRODUCTS_ERROR: {
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		}

		default:
			return state;
	}
};
