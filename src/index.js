import React from "react";
import ReactDOM from "react-dom";
import Door from "./Door";
import Calendar from "./Calendar.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Calendar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
