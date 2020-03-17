import React from "react";
import PropTypes from "prop-types";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  // continuous: PropTypes.bool,
  autoStart: PropTypes.bool
};

const Dictaphone = ({
  transcript,
  resetTranscript,
  startListening,
  stopListening,
  // continuous,
  autoStart,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
    <hr />
      <Container>
        <Row>
          <Col>
            <Button id="startButton" onClick={startListening}>
              Start Recording
            </Button>
          </Col>
          <Col>
            <Button id="stopButton" onClick={stopListening}>
              Stop Recording
            </Button>
          </Col>
          <Col>
            <Button id="resetButton" onClick={resetTranscript}>
              Reset Records
            </Button>
          </Col>
        </Row>
      </Container>
      <hr />
      <br />
      <Jumbotron>
        <Container>
          <span>{transcript}</span>
        </Container>
      </Jumbotron>
    </div>
  );
};

// Dictaphone.continuous = false;
// This is set to true by default for continuous recording after start button
// Set to false and it will only record the one sentence it hears
Dictaphone.autoStart = false;
Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
