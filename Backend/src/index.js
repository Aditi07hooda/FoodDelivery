import React from "react";
// import ReactDOM from "react-dom/client"; ----> for react version 18
import { render } from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
// this will make the notification to appear in the bottom center and disappear after 5sec
const option = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

// const root = ReactDOM.createRoot(document.getElementById("root"));   ----> for react version 18
const root = document.getElementById("root"); // ----> for react version 16 and 17
// root.render(          ----> for react version 18
render(
  // provider will connect redux store and react app
  // store is a prop sent to provider which is accessed by all the components of react application
  <Provider store={store}>
    <AlertProvider template={AlertTemplate} {...option}>
      <App />
    </AlertProvider>
  </Provider>,
  root   // ----> for react version 16 and 17
);
