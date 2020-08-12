import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import Grid from "./components/Grid";
import NavB from "./components/NavB";
import Algorithms from "./components/Algorithms";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <NavB/>
    <Algorithms />
    <Grid/>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();