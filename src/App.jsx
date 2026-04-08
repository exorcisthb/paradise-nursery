import React from "react";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("Welcome to Paradise Nursery!");
  };

  return (
    <div className="landing-page">
      <h1>Paradise Nursery 🌿</h1>
      <p>Your one-stop shop for beautiful indoor plants</p>

      <button onClick={handleClick}>
        Get Started
      </button>
    </div>
  );
}

export default App;
