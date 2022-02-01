import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const initializeState = {};

const middleware = [logger];

const store = createStore(
	rootReducer,
	initializeState,
	applyMiddleware(...middleware)
);

export default store;
