import { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [showing, setShowing] = useState("front");
  const [clickable, setClickable] = useState(true);
  const [guess, setGuess] = useState("");
  const answer = props.answer;
  const changeScore = props.changeScore;

  const handleClick = () => {
    clickable && setShowing("back");
    setClickable(false);
  };

  const handleChange = (e) => {
    setGuess(e.target.value)
  };
  const handleSubmit = () => {
    // Check the answer
    if (guess.toLowerCase() === answer.toLowerCase()) {
      changeScore(props.value)
    } else {
      changeScore(props.value * -1)
    }
    // Clear the guess
    setGuess("")
  }

  return (
    <div className="Card">
      <div
        className={`card-front ${showing === "back" ? "hidden" : ""}`}
        onClick={handleClick}
      >
        <p className="card-value">{props.value}</p>
      </div>
      <div className={`card-back ${showing === "front" ? "hidden" : ""}`}>
        <p className="card-question">{props.question}</p>
        <div className="answer-group">
          <input type="text" name="answer-box" onChange={handleChange} value={guess} />
          <button onClick={handleSubmit}>Guess!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
