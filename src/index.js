import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/headlines-reducer";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import middlewareLogger from "./middleware/middleware-logger";

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, middlewareLogger)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function.
