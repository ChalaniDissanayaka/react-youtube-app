import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import Reviews from "../pages/Reviews";
import Contact from "../pages/Contact";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
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