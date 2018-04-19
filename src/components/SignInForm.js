import React from "react";
import moment from "moment";
import "react-dates/initialize";
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from "../firebase/firebase";
import { startLogin } from "../actions/auth";

export default class PostForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			password: props.post ? props.post.password : "",
      email: props.post ? props.post.email : ""
		}
	}

	onPasswordChange = (e) => {
		const password = e.target.value;
		this.setState(() => ({ password }));
	};

	onEmailChange = (e) => {
		const email = e.target.value;
    this.setState(() => ({ email }));
	};

	onSubmit = (e) => {
		e.preventDefault();

		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((e) => {
      console.log("Error: ", e);
    })
	};

	render() {
		return (
				<form className="form" onSubmit={this.onSubmit}>
					{this.state.error && <p className="form__error">{this.state.error}</p>}
					<input
						className="text-input"
						type="text"
						placeholder="Email"
						autoFocus
						value={this.state.email}
						onChange={this.onEmailChange}
					/>
					<input
						className="text-input"
            placeholder="Password"
            type="password"
						value={this.state.password}
						onChange={this.onPasswordChange}
					></input>
					<div>
						<button className="button">Sign In</button>
					</div>
				</form>
		)
	}
}