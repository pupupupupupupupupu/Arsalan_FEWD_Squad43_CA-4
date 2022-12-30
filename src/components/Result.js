import React, { useContext } from "react";
import { QuizContext } from "../extra/context";

export default function Result(props) {
  const { setGameState } = useContext(QuizContext);

  const restartQuiz = () => {
    setGameState("endScreen");
  };

  return (
    <div className="scoreBoard">
      <h1 className="componentStaticBeta">Your score is {props.score} out of 5 - {props.score/5 *100}%</h1>
      <div className="reset">
        <button onClick={restartQuiz}>Reset</button>
      </div>
    </div>
  );
}
