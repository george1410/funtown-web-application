import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/MainApp/App.js";
import reportWebVitals from "./reportWebVitals";

const unused = 'blah';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
