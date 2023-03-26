import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;