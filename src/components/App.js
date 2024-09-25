import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Reviews from "../pages/Reviews";
import Contact from "../pages/Contact";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar /> {/* Navbar now comes from the component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;