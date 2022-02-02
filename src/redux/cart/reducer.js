import {
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_TO_CART,
	CART_TOGGGLE,
	REMOVE_ITEM,
} from "./types";
import { addingItemToaCart, removeItem, removingItemFromaCart } from "./utils";

const initialState = {
	cartItems: [],
	isHidden: true,
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM_TO_CART:
			return {
				...state,
				cartItems: addingItemToaCart(state.cartItems, action.payload),
			};

		case REMOVE_ITEM_TO_CART:
			return {
				...state,
				cartItems: removingItemFromaCart(state.cartItems, action.payload),
			};

		case CART_TOGGGLE:
			return {
				...state,
				isHidden: action.payload,
			};

		case REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItem(state.cartItems, action.payload),
			};

		default:
			return state;
	}
};
