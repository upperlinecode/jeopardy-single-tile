import { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [showing, setShowing] = useState("front");
  const [clickable, setClickable] = useState(true);

  const handleClick = () => {
    clickable && setShowing("back");
    setClickable(false);
  };

  const handleChange = () => {};
  const handleSubmit = () => {}

  return (
    <div className="Card">
      <div
        className={`card-front ${showing === "back" ? "hidden" : ""}`}
        onClick={handleClick}
      >
        <p className="card-value">VALUE</p>
      </div>
      <div className={`card-back ${showing === "front" ? "hidden" : ""}`}>
        <p className="card-question">QUESTION</p>
        <div className="answer-group">
          <input type="text" name="answer-box" onChange={handleChange} />
          <button onClick={handleSubmit}>Guess!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
