import { combineReducers } from "redux";
import { cartReducer } from "./cart/reducer";
import userReducer from "./user/reducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "spicyworld",
	storage,
	whitelist: ["cart"],
};

const rootReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
