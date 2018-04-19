import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import AddPostPage from "../components/AddPostPage";
import BlogPage from "../components/BlogPage";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";
import NotFoundPage from "../components/NotFoundPage";
import PortfolioPage from "../components/PortfolioPage";

export const history = createHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<NavBar />
			<Switch>
				<Route path="/" component={HomePage} exact/>
				<Route path="/blog" component={BlogPage} />
				<Route path="/newpost" component={AddPostPage} />
				<Route path="/portfolio" component={PortfolioPage} />
				<Route component={NotFoundPage} />
			</Switch>
			<Footer />
		</div>
	</Router>
);

export default AppRouter;