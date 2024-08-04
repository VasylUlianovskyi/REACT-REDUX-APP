import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./reset.css";

const initialState = {
  count: 0,
  step: 1,
};

function reducer(state = initialState, action) {
  const { type } = action;
  const { count, step } = state;
  switch (type) {
    case "decrement":
      return { ...state, count: count - step };

    case "increment":
      return { ...state, count: count + step };

    case "setStep":
      return { ...state, step: action.payload };

    default:
      return state;
  }
}

const store = legacy_createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
