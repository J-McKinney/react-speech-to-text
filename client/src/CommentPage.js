import React, { Component } from "react";
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
  }

  render() {
    return (
      <>
        <h3>{console.log(this.state.comments[0])}</h3>
      </>
    );
  }
}

export default CommentPage;
