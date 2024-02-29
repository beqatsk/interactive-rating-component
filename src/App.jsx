// import { useState } from "react";
import "./App.css";
import Star from "/images/Star.png";

function App() {
  let numbers = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="rating-card">
        <img src={Star} alt="star" className="star" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="buttons">
          {numbers.map((item) => (
            <button className="button">{item}</button>
          ))}
        </div>
        <button className="sumbit">SUMBIT</button>
      </div>
    </>
  );
}

export default App;
