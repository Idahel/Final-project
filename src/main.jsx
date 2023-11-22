import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { quiz } from './reducers/quiz';
import "./index.css";
import "./components/ComponentsStyling/Quiz.css";
import "./components/ComponentsStyling/Secondhandstorespage.css";
import "./components/ComponentsStyling/Tipspage.css";
import "./components/ComponentsStyling/Home.css";


const store = configureStore({
  reducer: {
    quiz: quiz.reducer
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
