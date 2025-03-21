import './App.css'
import { useState } from 'react';
import CustomButton from './components/CustomButton';

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
      <CustomButton onClick={handleClick} />
      <h1>{heading}</h1>
    </div>
  );
}

export default App;
