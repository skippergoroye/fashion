import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import About from './pages/About';
import Store from './pages/Store';




function App() {
  

  return (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Store />} /> 
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
