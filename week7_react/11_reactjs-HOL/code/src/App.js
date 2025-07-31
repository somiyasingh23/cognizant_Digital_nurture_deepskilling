import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Multiple function call
  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert("Hello! Counter incremented.");
  };

  const sayWelcome = (msg) => {
    alert(`Welcome Message: ${msg}`);
  };

  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      <br />
      <button onClick={handleClick}>Click on me</button>

      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
