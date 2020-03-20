import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
// import Dictaphone from "../../components/SpeechRecognition/Dictaphone";

class Speeches extends Component {
  // Setting our component's initial state
  state = {
    speeches: [],
    sentence: ""
  };

  // When the component mounts, load all sentences and save them to this.state.sentence
  componentDidMount() {
    this.loadSpeeches();
  }

  // Loads all sentences and sets them to this.state.sentence
  loadSpeeches = () => {
    API.getSpeeches()
      .then(res =>
        this.setState({ speeches: res.data, sentence: ""})
      )
      .catch(err => console.log(err));
  };

  // Deletes a sentence from the database with a given id, then reloads sentence from the db
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

  // When the form is submitted, use the API.savespeeches method to save the sentence data
  // Then reload sentence from the database
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

          {/*<Col size="md-6">
          <Dictaphone />
          </Col>*/}
          
        </Row>
      </Container>
    );
  }
}

export default Speeches;
