import {
	ADD_CART,
	REMOVE_CART,
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_TO_CART,
	CART_TOGGGLE,
} from "./types";
import {
	addingItemToaCart,
	removingItemFromaCart,
	getTotalPrice,
} from "./utils";

const initialState = {
	cartItems: [],
	itemsCount: 0,
	isHidden: true,
	price: 0,
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CART:
			return {
				...state,
				itemsCount: state.itemsCount + 1,
			};

		case REMOVE_CART:
			return {
				...state,
				itemsCount: state.itemsCount === 0 ? 0 : state.itemsCount - 1,
			};

		case ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addingItemToaCart(state.cartItems, action.payload),
				price: getTotalPrice(state.cartItems),
			};

		case REMOVE_ITEM_TO_CART:
			return {
				...state,
				cartItems: removingItemFromaCart(state.cartItems, action.payload),
				price: getTotalPrice(state.cartItems),
			};

		case CART_TOGGGLE:
			return {
				...state,
				isHidden: action.payload,
			};

		default:
			return state;
	}
};
