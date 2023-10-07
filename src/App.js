import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Individuals from "./pages/Individuals";
import Businesses from "./pages/Businesses";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/Individuals" element={<Individuals/>} />
          <Route index path="/Businesses" element={<Businesses/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
