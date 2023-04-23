import {
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_TO_CART,
	CART_TOGGGLE,
	REMOVE_ITEM,
} from "./types";

export const addItemToCart = item => ({
	type: ADD_ITEM_TO_CART,
	payload: item,
});

export const removeItemFromCart = item => ({
	type: REMOVE_ITEM_TO_CART,
	payload: item,
});

export const cartToggle = value => ({
	type: CART_TOGGGLE,
	payload: value,
});

export const removeItem = item => ({
	type: REMOVE_ITEM,
	payload: item,
});
