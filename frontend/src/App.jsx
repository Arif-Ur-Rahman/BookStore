import React from "react";
import Home from "./components/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
