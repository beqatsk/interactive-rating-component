import "./Result.css";
import Payment from "/images/payment.png";

export default function Result() {
  return (
    <div className="result-card">
      <img src={Payment} alt="payment" className="payment" />
      <div className="selected">You selected 4 out of 5</div>
      <h3>Thank you!</h3>
      <p className="result-paragraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
