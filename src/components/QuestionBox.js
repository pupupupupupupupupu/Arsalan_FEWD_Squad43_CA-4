import React, { useState } from "react";
import questions from "../questions";
// import { QuizContext } from "../extra/context";
import Result from "./Result";

export default function QuestionBox() {


  // const { gameState, setGameState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);
  const handelAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div>
      {showScore ? (
        <Result score={score} />
      ) : (
        // setGameState("result")
        <>
          <div className="mainScreen">
            <div className="componentStaticAlpha">
              <h7>
                {currentQuestion + 1}/{questions.length} 
              </h7>
            </div>
            <div className="componentStaticBeta">
              <h3>{questions[currentQuestion].text}</h3>
            </div>

            <div className="options">
              {questions[currentQuestion].options.map((options) => (
                <button className="button"
                  onClick={() => handelAnswerButtonClick(options.isCorrect)}
                >
                  {options.text}
                </button>
              ))}
            </div>

            <div className="footer">
              <button className="buttonOne">highlight</button>
              <button className="buttonTwo">remove highlight</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
