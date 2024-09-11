import React from "react";
import Home from "./components/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
