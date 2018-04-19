import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from "../firebase/firebase";

export default class PostForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			description: props.post ? props.post.description : "",
      title: props.post ? props.post.title : "",
      createdAt: props.post ? moment(props.post.createdAt) : moment(),
      calendarFocused: false,
      error: ""
		}
	}

	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};

	onTitleChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({ title }));
	};

	onDateChange = (createdAt) => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};

	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};

	signOut = () => {
		firebase.auth().signOut().then(function() {

		}).catch(function(error) {
			console.log(e);
		});
	};

	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.description || !this.state.title) {
			this.setState(() => ({ error: "Please enter both a description and a title."}));
		} else {
			this.setState(() => ({ error: ""}));
			this.props.onSubmit({
				description: this.state.description,
        title: this.state.title,
        createdAt: this.state.createdAt.valueOf(),
			});
		}
	};

	render() {
		return (
			<div>
				<form className="form" onSubmit={this.onSubmit}>
					{this.state.error && <p className="form__error">{this.state.error}</p>}
					<input
						className="text-input"
						type="text"
						placeholder="Title"
						autoFocus
						value={this.state.title}
						onChange={this.onTitleChange}
					/>
					<textarea
						className="text-area"
						placeholder="Description"
						value={this.state.description}
						onChange={this.onDescriptionChange}
					></textarea>
					<SingleDatePicker
						date={this.state.createdAt}
						onDateChange={this.onDateChange}
						focused={this.state.calendarFocused}
						onFocusChange={this.onFocusChange}
						numberOfMonths={1}
						isOutsideRange={() => false}
						block
					/>

					<div>
						<button className="button">Post</button>
					</div>
				</form>
				<button className="button" onClick={this.signOut}>Signout</button>
			</div>
		)
	}
}