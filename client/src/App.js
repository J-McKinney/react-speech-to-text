import React from "react";
import "./App.css";
import ReactSpeech from "./react-speech-recognition";
// import CommentPage from "./CommentPage";

function App() {
  return (
    <div className="App">
      <div id="main">
        <ReactSpeech />
      </div>
    </div>
  );
}

export default App;
