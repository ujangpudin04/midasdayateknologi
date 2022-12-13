import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";
import Home from "./component/Home";
import Login from "./component/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/" exact element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
