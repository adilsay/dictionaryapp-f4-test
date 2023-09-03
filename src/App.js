import React from "react";
import './App.css';
import {Routes , Route, Link} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import History from "./Components/History";
function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
    <Route path="/search/:searchTerm" element={<Home/>} />
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
    </div>
  );
}

export default App;
