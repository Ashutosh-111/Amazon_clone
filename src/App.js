import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Banner from "./components/Banner";
import Items from "./components/Items";
import SignIn from "./components/Singin";
import ProductShowCase from "./components/ProductShowCase";
import cart from "./components/cart";
import Error from "./components/Error";
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

      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>

      <Routes>
        <Route path="/productshowcase" element={<ProductShowCase />} />
      </Routes>

      <Routes>
        <Route path="/cart" element={<cart/>} />
      </Routes>

      <Routes>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;