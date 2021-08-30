
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import userReducer, { detailReducer, saveReducer, templateReducer } from "./redux/reducers";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
let rootReducer=combineReducers({
  user : userReducer,
  tid : templateReducer,
  details : detailReducer, 
  saveId : saveReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);