import "./Rate.css";
import Star from "/images/Star.png";
import { useState } from "react";

export default function Rate() {
  let numbers = [1, 2, 3, 4, 5];
  const [rate, setRate] = useState(null);
  return (
    <div className="rating-card">
      <img src={Star} alt="star" className="star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttons">
        {numbers.map((item, index) => (
          <button
            className="button"
            onClick={() => setRate(item)}
            key={index}
            style={rate == item ? { backgroundColor: "#fc7614" } : {}}
          >
            {item}
          </button>
        ))}
      </div>
      <button className="sumbit">SUMBIT</button>
    </div>
  );
}
