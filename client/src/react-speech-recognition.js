import React from "react";
import PropTypes from "prop-types";
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
      <br />
      <button onClick={startListening}>Start Recording</button>
      <br />
      <br />
      <button onClick={stopListening}>Stop Recording</button>
      <br />
      <br />
      <button onClick={resetTranscript}>Reset Records</button>
      <br />
      {console.log(propTypes) /**/}
      <span>{transcript}</span>
    </div>
  );
};

// Dictaphone.continuous = false;
// This is set to true by default for continuous recording after start button
// Set to false and it will only record the one sentence it hears
Dictaphone.autoStart = false;
Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);
