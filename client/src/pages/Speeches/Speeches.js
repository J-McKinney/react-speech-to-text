import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Dictaphone from "../../components/SpeechRecognition/Dictaphone";

class Speeches extends Component {
  // Setting our component's initial state
  state = {
    speeches: [],
    sentence: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadSpeeches();
    console.log(Dictaphone)
  }

  // Loads all books  and sets them to this.state.books
  loadSpeeches = () => {
    API.getSpeeches()
      .then(res =>
        this.setState({ speech: res.data, sentence: ""})
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteSpeech = id => {
    API.deleteSpeech(id)
      .then(res => this.loadSpeeches())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.sentence) {
      API.saveSpeech({
        sentence: this.state.sentence
      })
        .then(res => this.loadSpeeches())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Speeches Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.sentence}
                onChange={this.handleInputChange}
                name="sentence"
                placeholder="sentence (required)"
              />
              <FormBtn
                disabled={!(this.state.sentence)}
                onClick={this.handleFormSubmit}
              >
                Submit Speech
              </FormBtn>
            </form>
          </Col>

          <Col size="md-6">
          <Dictaphone />
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default Speeches;
