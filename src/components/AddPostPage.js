import React from "react";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import SignInForm from "./SignInForm";
import { startAddPost } from "../actions/post";
import { startLogin } from "../actions/auth";
import { firebase } from "../firebase/firebase";

export class AddPostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: null
    }
  }
  onSubmit = (post) => {
    this.props.startAddPost(post);
    this.props.history.push("/blog");
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState(() => ({ loggedIn: true }))
      } else {
        this.setState(() => ({ loggedIn: false }))
      }
    })
  }
  
  render() {
    return (
      <div>
        <div className="content-container blog-container">
          {this.state.loggedIn ? <PostForm onSubmit={this.onSubmit} /> : <SignInForm />}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(AddPostPage);