import {
	ADD_CART,
	REMOVE_CART,
	ADD_ITEM_TO_CART,
	REMOVE_ITEM_TO_CART,
	CART_TOGGGLE,
} from "./types";

export const addCart = () => ({
	type: ADD_CART,
});

export const removeCart = () => ({
	type: REMOVE_CART,
});

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
