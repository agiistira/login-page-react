import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Layout from "./Components/Layout";
import Profile from "./Pages/Profile";
import "./App.css";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <BrowserRouter BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login-page" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
