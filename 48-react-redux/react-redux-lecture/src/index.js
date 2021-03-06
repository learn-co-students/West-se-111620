import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import bowieReducer from "./redux/reducers/index";
import { Provider } from "react-redux";

const store = createStore(bowieReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
