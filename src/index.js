import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.js";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Redirect,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
        <Router>
            <App />
        </Router>
);