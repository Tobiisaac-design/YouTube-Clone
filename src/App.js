import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
