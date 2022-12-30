import React, { useState, useEffect } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

import { QuizContext } from "./extra/context";

function App() {
  const [gameState, setGameState] = useState("main");

  const [theme, setTheme] = useState(true);
  const [themeName, setThemeName] = useState("dark");

  const handleToggle = () => {
    setTheme(theme ? false : true);
  };

  function backGroundColors(color) {
    document.body.style.backgroundColor = color ? "#3E6D9C" : "#F0ECCF";
    document.body.style.color = color ? "#000000" : "#000000";
    return {
      backgroundColor: color ? "#3E6D9C" : "#F0ECCF",
    };
  }

  useEffect(() => {
    setThemeName(themeName === "light" ? "Dark" : "Light");
  }, [theme, themeName]);

  return (
    <div className="App" style={backGroundColors(theme)}>
      <div className="header">
        <h1>Kalvium</h1>
        <button className="toggle" onClick={handleToggle}>
          {themeName}
        </button>
      </div>

      <QuizContext.Provider value={{ gameState, setGameState }}>
        {gameState === "main" && <QuestionBox />}
        {gameState === "result" && <Result />}
        {gameState === "endScreen" && <QuestionBox />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
