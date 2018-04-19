import React from "react";
import { connect } from "react-redux";
import BlogListItem from "./BlogListItem";
import SelectPosts from "../selectors/posts";


export const BlogList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Posts</div>
      <div className="show-for-larger">Post</div>
      <div className="show-for-larger">Date</div>
    </div>
    <div className="list-body">
  {
    props.posts.length === 0 ? (
      <div className="list-item list-item--message">
        <span>No posts</span>
      </div>
    ) : (
      props.posts.map((post) => (
      <BlogListItem key={post.id} {...post}/>
    ))
    )
  }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    posts: state.posts.sort((a, b) => {
      return a.createdAt < b.createdAt ? 1 : -1;
  })
  };
}

export default connect(mapStateToProps)(BlogList);