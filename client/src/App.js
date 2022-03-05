import React, { useEffect, useLayoutEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";

import "@stripe/stripe-js";

import Homepage from "./pages/Homepage/homepage.component";
import Header from "./components/Header/header.component";
import Menu from "./components/Menu/menu.component";
import SingleItem from "./components/Single-item/single-item.component";
import Contact from "./components/Contact/contact.component";
import Search from "./components/Search/search.component";
import SignUpForm from "./components/Sign-up-form/sign-up-form.component";
import SignInForm from "./components/Sign-in-form/sign-in-form.component";
import Checkout from "./pages/Checkout/checkout.component";
import Footer from "./components/Footer/footer.component";
import TablePage from "./components/table-page/table-page.component";
import Chat from "./components/chat/chat.component";

import ErrorBoundary from "./pages/Error-boundary/error-boundary.component";

import { Route, Redirect, Switch } from "react-router-dom";

import {
	auth,
	createUserProfileDocument,
} from "./pages/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/actions";
import { selectCurrentUser } from "./redux/user/selector";
import { createStructuredSelector } from "reselect";
import Success from "./pages/Success/success.component";
import Aos from "aos";

const App = ({ currentUser, setCurrentUser }) => {
	useLayoutEffect(() => {
		let unSubscribe;
		const checkAuth = async () => {
			unSubscribe = onAuthStateChanged(auth, async userAuth => {
				if (userAuth) {
					const userRef = await createUserProfileDocument(userAuth);

					onSnapshot(userRef, user => {
						setCurrentUser({ ...user.data(), id: user.id });
					});
				}

				setCurrentUser(userAuth);
			});
		};
		checkAuth();

		return unSubscribe;
	}, []);

	useEffect(() => {
		Aos.init({
			duration: 1000,
			offset: 250,
			easing: "ease-in-out-sine",
		});
	}, []);

	return (
		<div>
			<Header />
			<ErrorBoundary>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route
						exact
						path='/menu'
						render={({ ...props }) => <Menu {...props} title='Menu' />}
					/>
					<Route path='/search' component={Search} />
					<Route path='/contact' component={Contact} />
					<Route
						exact
						path='/signin'
						render={() => (currentUser ? <Redirect to='/' /> : <SignInForm />)}
					/>
					<Route
						exact
						path='/signup'
						render={() => (currentUser ? <Redirect to='/' /> : <SignUpForm />)}
					/>
					<Route
						exact
						path='/chat'
						render={() => (currentUser ? <Chat /> : <SignInForm />)}
					/>
					<Route path='/menu/:food' component={SingleItem} />
					<Route
						exact
						path='/checkout'
						render={() => (currentUser ? <Checkout /> : <SignInForm />)}
					/>
					<Route exact path='/success' component={Success} />
					<Route
						exact
						path='/dining'
						render={() => (currentUser ? <TablePage /> : <SignInForm />)}
					/>
				</Switch>
				{/* <Footer /> */}
			</ErrorBoundary>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
