import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./store/authStore";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);