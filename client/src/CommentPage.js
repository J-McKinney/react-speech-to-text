import React, { Component } from "react";
// import API from "./utils/API";
import axios from "axios";

class CommentPage extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    this.loadComments();
  }

  loadComments = () => {
      axios.get("/api/comments")
      console.log(this)
  }

  render() {
    return (
      <>
        <h3>{this.state.comments}</h3>
      </>
    );
  }
}

export default CommentPage;
