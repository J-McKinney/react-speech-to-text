import React, { Component, useEffect, useState } from "react";
// import db from './config/fbConfig';
import API from "./utils/API";

class CommentPage extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.loadComments();
  }

  loadComments = () => {
    API.getComments()
      .then(res => this.setState({ comments: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
        <div className="comments">
          <h1>Comment Section</h1>
          {/*<button onClick={handleClick}>Click to speak</button>*/}
          {/*<div className="comment-block">
            {comments
              ? comments.map(comment => (
                  <div key={comment.title} className="blockquote">
                    {" "}
                    <p>{comment.title}</p>{" "}
                  </div>
                ))
              : null}
              </div>*/}
        </div>
    );
  }
}

export default CommentPage;
