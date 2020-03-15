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
    console.log(this.state.comments);
  };

  render() {
    return (
      <>
        <div>
          {this.state.comments.length ? (
            <div>
              {this.state.comments.map(comment => (
                <div key={comment._id}></div>
              ))}
            </div>
          ) : (
            <h3>no results</h3>
          )}
        </div>
      </>
    );
  }
}

export default CommentPage;
