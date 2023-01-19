import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import AppRouter from "./AppRouter";
import App from './App';

import './styles/index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={AppRouter} /> */}
    <App />
  </React.StrictMode>
);