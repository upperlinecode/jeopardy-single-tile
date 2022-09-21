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

  // Keep the guess in state matching the guess on screen
  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check the answer
    if (guess.toLowerCase() === answer.toLowerCase()) {
      changeScore(props.value);
      alert("Correct!");
    } else {
      changeScore(props.value * -1);
      alert("Sorry! The correct answer was: " + props.answer);
    }
    // Clear the guess
    setGuess("");
  };

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
        <form className="answer-group">
          <input
            type="text"
            name="answer-box"
            onChange={handleChange}
            value={guess}
          />
          <input type="submit" onClick={handleSubmit} value="Guess!" />
        </form>
      </div>
    </div>
  );
};

export default Card;
