import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import AddPostPage from "../components/AddPostPage";
import BlogPage from "../components/BlogPage";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import PortfolioPage from "../components/PortfolioPage";
import IndecisionPage from "../indecision/components/IndecisionApp";

export const history = createHistory();

export default class AppRouter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			scrolling: null
		}
	}

	componentDidMount() {
		let killScroll = this.state.scrolling;
		
		window.addEventListener("scroll", (event) => {
			this.setState({ scrolling: true });
			clearTimeout(killScroll);
			setTimeout(() => this.setState({ scrolling: false}), 1000);
		});
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	render() {
		return (
	<Router history={history}>
		<div>
			<Header />
			<div className={this.state.scrolling ? "scrolling no-scroll" : "no-scroll"}>
			</div>
				<Switch>
					<Route path="/" component={HomePage} exact/>
					<Route path="/blog" component={BlogPage} />
					<Route path="/newpost" component={AddPostPage} />
					<Route path="/portfolio" component={PortfolioPage} />
					<Route path="/indecision" component={IndecisionPage} />
					<Route component={NotFoundPage} />
				</Switch>
			
			<Footer />
		</div>
	</Router>
		)
	}
};