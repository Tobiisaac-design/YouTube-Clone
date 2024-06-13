// src/App.js
import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";
import "./App.css";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  const toggleSidebar = () => {
    console.log("Toggle sidebar clicked");
    setSidebar((prev) => !prev);
    console.log("Sidebar state:", !sidebar);
  };

  return (
    <div className="app-container">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
      <div
        className={`content ${
          sidebar ? "content-expanded" : "content-collapsed"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Video/:categoryId/:videoId" element={<Video />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
