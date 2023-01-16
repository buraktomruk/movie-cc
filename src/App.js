import React from "react";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Redirect,
} from "react-router-dom";
import './App.scss';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail" element={<DetailPage />} />
            </Routes>
        </div>

    );
}

export default App;