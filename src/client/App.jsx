import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Login from './components/Login';
import Navbar from './Navbar';
import Home from './components/Home';



function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
        <Navbar />
        <h1>Home</h1>
        <Home />
    </div>
  );
}

export default App;
