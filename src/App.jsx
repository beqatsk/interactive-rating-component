// import { useState } from "react";
import "./App.css";
import Star from "/images/Star.png";

function App() {
  return (
    <>
      <div className="rating-card">
        <img src={Star} alt="star" />
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
    </>
  );
}

export default App;
