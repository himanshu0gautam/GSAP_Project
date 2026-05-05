import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agents from "./pages/About";
import Project from "./pages/Project";
import Navbar from "./Component/Navbar/Navbar";
import FullNavbar from "./Component/Navbar/FullNavbar";
import ReactLenis from "lenis/react";

const App = () => {
  return (
    <>
      <ReactLenis root options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true
      }}>
        <div className="text-white">
          <Navbar />
          <FullNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Agents />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
      </ReactLenis>
    </>
  );
};

export default App;
