import { getProductsFromStore } from "../../pages/firebase/firebase.config";
import { FETCHING } from "./types";

const fetchProductsStart = () => ({
	type: FETCHING.FETCH_PRODUCTS_START,
});

const fetchProductsSuccess = products => ({
	type: FETCHING.FETCH_PRODUCTS_SUCCESS,
	payload: products,
});

const fetchProductsFailure = err => ({
	type: FETCHING.FETCH_PRODUCTS_ERROR,
	payload: err,
});

export const fetchProductsAsync = () => async dispatch => {
	dispatch(fetchProductsStart());
	try {
		const data = await getProductsFromStore("products");
		dispatch(fetchProductsSuccess(data));
	} catch (e) {
		dispatch(fetchProductsFailure(e));
	}
};
