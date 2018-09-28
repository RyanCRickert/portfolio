import React from "react";
import Modal from "react-modal";

export default class ThankYouModal extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<Modal
				ariaHideApp={false}
				onRequestClose={this.props.closeThankYouModal}
				isOpen={this.props.submitted}
				closeTimeoutMS={200}
				className="modal-thank"
			>
				<div>
					<h1>Thank you</h1>
					<div className="modal-thank__body">
						Thank you for taking the time to send a message, I will view it as soon as we can and respond to you quickly.
					</div>
					<button className="button modal-button" onClick={this.props.closeThankYouModal}>Close</button>
				</div>
      </Modal>
		)
	}
}