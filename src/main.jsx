import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { quiz } from './reducers/quiz';
import "./index.css";
import "./pages/pagestyling/Quiz.css";
import "./pages/pagestyling/Secondhandstorespage.css";
import "./pages/pagestyling/Tipspage.css";
import "./pages/pagestyling/Home.css";
import "./pages/pagestyling/Storedetailpage.css";


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
