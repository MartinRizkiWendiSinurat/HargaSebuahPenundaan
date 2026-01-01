import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPlayerPage from "./pages/VideoPlayerPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<VideoPlayerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
