import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

import { persistStore } from "redux-persist";

const initializeState = {};

const middleware = [logger];

const store = createStore(
	rootReducer,
	initializeState,
	applyMiddleware(...middleware)
);

export const persister = persistStore(store);

export default store;
