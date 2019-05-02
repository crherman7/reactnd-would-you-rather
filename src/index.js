import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import "./index.css";

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  document.getElementById("root")
);
