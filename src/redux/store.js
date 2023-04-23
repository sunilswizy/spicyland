import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const initializeState = {};

const middleware = [
	process.env.NODE_ENV === "development" && logger,
	thunk,
].filter(Boolean);

const store = createStore(
	rootReducer,
	initializeState,
	applyMiddleware(...middleware)
);

export const persister = persistStore(store);

export default store;
