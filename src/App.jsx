import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';

const sampleQuestion = {
  "id": 12,
  "answer": "a catapult",
  "question": "Ancient weapon kept a stone's throw from its target",
  "value": 200,
  "airdate": "1985-02-08T12:00:00.000Z",
  "created_at": "2014-02-11T22:47:18.947Z",
  "updated_at": "2014-02-11T22:47:18.947Z",
  "category_id": 6,
  "game_id": null,
  "invalid_count": null,
  "category": {
      "id": 6,
      "title": "'cat'-egory",
      "created_at": "2014-02-11T22:47:18.750Z",
      "updated_at": "2014-02-11T22:47:18.750Z",
      "clues_count": 5
  }
}

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(sampleQuestion);
  const [score, setScore] = useState(1000);
  const [questionNumber, setQuestionNumber] = useState(0);

  const changeScore = (x) => {
    setScore(score + x);
  }

  useEffect(() => {
    const endpoint = "https://jservice.io/api/random";
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setCurrentQuestion(data[0])
      })
  }, [questionNumber])

  return (
    <div className="App">
      <h1>Category: {currentQuestion.category.title}</h1>
      <h3>Score: {score}</h3>
      <Card question={currentQuestion.question} answer={currentQuestion.answer} value={currentQuestion.value} changeScore={changeScore} />
      <button onClick={() => setQuestionNumber(questionNumber + 1)}>Next Card</button>
    </div>
  );
}

export default App;
