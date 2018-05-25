import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import AddPostPage from "../components/AddPostPage";
import BlogPage from "../components/BlogPage";
import HomePage from "../components/HomePage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import PortfolioPage from "../components/PortfolioPage";
import IndecisionPage from "../indecision/components/IndecisionApp";

export const history = createHistory();

export default class AppRouter extends React.Component {
	render() {
		return (
	<Router history={history}>
		<div>
			<Header />
			<div>
			</div>
				<Switch>
					<Route path="/" component={HomePage} exact/>
					<Route path="/blog" component={BlogPage} />
					<Route path="/newpost" component={AddPostPage} />
					<Route path="/portfolio" component={PortfolioPage} />
					<Route path="/indecision" component={IndecisionPage} />
					<Route component={NotFoundPage} />
				</Switch>
		</div>
	</Router>
		)
	}
};