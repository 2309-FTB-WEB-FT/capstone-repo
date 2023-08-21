import { BrowserRouter as Routes, Route, } from 'react-router-dom';
import React, { useState } from 'react'; 
import Login from './components/Login';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shows from './components/Shows';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
        <Navbar />
        <h1>Boilerplate</h1>
        <img id='comp-img' src='./computer.png'></img>
        <p>Replace the starter code in this template with something cool</p>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/Shows" component={Shows} />
          <Route path="/Login" component={Login} />
        </Routes>
        <Login />
    </div>
  );
}

export default App;
