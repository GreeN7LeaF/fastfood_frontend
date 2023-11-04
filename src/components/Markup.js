import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import {Home} from "../components/Element/"

import "../css/plugins.css";
// require("bootstrap");

function Markup() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/home" />
      </Routes>
    </Router>
  );
}

export default Markup;
