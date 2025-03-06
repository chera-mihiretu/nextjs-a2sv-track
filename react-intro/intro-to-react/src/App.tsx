import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [count, increment] = useState(0);
  return (
    <div className="App" >

      <h1>Clicked {count} times </h1>

      <button onClick={() => increment(count + 1)}>Click Inc</button>
      <button onClick={() => increment(count - 1)}>Clicke Dec</button>
    </div>
  );
}

export default App;
