import React from "react";
import Speeches from "./pages/Speeches";
import Dictaphone from "./components/SpeechRecognition/Dictaphone"

function App() {
  return (
    <div>
    <Dictaphone />
    <Speeches />
    </div>
  );
}

export default App;
