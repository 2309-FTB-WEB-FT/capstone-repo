import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shows from './components/Shows';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <h1>Boilerplate</h1>
        <img id='comp-img' src='./computer.png' alt="computer" />
        <p>Replace the starter code in this template with something cool</p>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shows" element={<Shows />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

