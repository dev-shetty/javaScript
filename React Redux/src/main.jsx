import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Imported for redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/user";
import counterReducer from "./features/counter";
import todoReducer from "./features/todo";

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    todo: todoReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
