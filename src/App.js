import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Banner from "./components/Banner";
import Items from "./components/Items";
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

      <Routes>
        <Route path="/" element={<Banner />} />
      </Routes>
      
      <Routes>
        <Route path="/" element={<Items />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;