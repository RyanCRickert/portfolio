import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import { startSetPosts } from "./actions/post";
import configureStore from "./store/configureStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";

const store = configureStore();
const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById("app"));
		store.dispatch(startSetPosts());
		hasRendered = true;
	}
};

renderApp();