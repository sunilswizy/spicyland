import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "react-router-scroll-top";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persister } from "./redux/store";

import store from "./redux/store";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ScrollToTop>
					<PersistGate persistor={persister}>
						<App />
					</PersistGate>
				</ScrollToTop>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
