import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import MovieItem from "./components/MovieItem";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container-fluid">
    <Router>
      <Routes>
        <Route index exact path="/" element={<App />} />
        <Route index exact path="/movies/:id" element={<MovieItem />} />
      </Routes>
    </Router>
  </div>
);
