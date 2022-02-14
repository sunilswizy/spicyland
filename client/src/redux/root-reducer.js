import { combineReducers } from "redux";

import { cartReducer } from "./cart/reducer";
import userReducer from "./user/reducer";
import directoryReducer from "./directory/reducer";
import { collectionReducer } from "./collection/reducer";

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
	directory: directoryReducer,
	collection: collectionReducer,
});

export default persistReducer(persistConfig, rootReducer);
