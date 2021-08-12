import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const subjects = ["ddi", "dsw", "fdsw"];
const languages = { python: true, cs: false, php: true };

ReactDOM.render(
  <App
    name={"Jeremy"}
    lastname={"León"}
    age={26}
    subjects={subjects}
    languages={languages}
  />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
