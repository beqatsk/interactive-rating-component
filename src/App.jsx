// import { useState } from "react";
import "./App.css";
import Star from "/images/Star.png";

function App() {
  return (
    <>
      <div className="rating-card">
        <img src={Star} alt="star" />
        <h1>How did we do?</h1>
      </div>
    </>
  );
}

export default App;
