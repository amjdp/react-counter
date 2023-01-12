import React, { useState } from "react";
import "./App.css";

function App() {
  // Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      Counter App
      <div className="counter">{counter}</div>
      <div className="buttons">
        <button className="btn" onClick={handleClick1}>
          Increment
        </button>
        <button className="btn" onClick={handleClick2}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
