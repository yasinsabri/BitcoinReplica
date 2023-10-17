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
import Resources from "./pages/Resources";
import Developers from "./pages/Developers";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/Individuals" element={<Individuals />} />
          <Route index path="/Businesses" element={<Businesses />} />
          <Route index path="/Resources" element={<Resources />} />
          <Route index path="/Developers" element={<Developers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
