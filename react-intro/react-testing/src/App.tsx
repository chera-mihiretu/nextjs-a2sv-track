import './App.css'
import { useState } from 'react';

function App() {
  // You can change the initial heading and modified heading text as desired.
  const initialHeading = "Our First Test";
  const modifiedHeading = "Heading After Click";
  const [heading, setHeading] = useState(initialHeading);

  const handleClick = () => {
    setHeading(modifiedHeading);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <h1>{heading}</h1>
    </div>
  );
}

export default App;
