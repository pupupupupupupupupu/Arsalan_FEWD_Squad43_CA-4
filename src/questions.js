const questions = [
  {
    text: "What is ReactJS?",
    options: [
      { text: "Server-side framework", isCorrect: false },
      { text: "user interface framework", isCorrect: true },
      { text: "both a and b", isCorrect: false },
      { text: "none of the above", isCorrect: false },
    ],
  },

  {
    text: "React.js is written in which of the following language?",
    options: [
      { text: "JavaScript", isCorrect: false },
      { text: "Java", isCorrect:  false },
      { text: "C", isCorrect:  false },
      { text: "C++", isCorrect:  true },
    ],
  },
  {
    text: "What is a state in React?",
    options: [
      { text: "A permanent storage.", isCorrect:  false },
      { text: "Internal storage of the component.", isCorrect: false },
      { text: "External storage of the component.", isCorrect:  false },
      { text: "None of the above.", isCorrect:  true },
    ],
  },
  
  {
    text: "What is the return value of the useState hook?",
    options: [
      { text: "Current State", isCorrect:  false },
      { text: " Pair of current state and function updating it", isCorrect: true },
      { text: "Function updating the current state", isCorrect:  false },
      { text: "UseState returns nothing", isCorrect:  false },
    ],
  },
  {
    text: "How many elements can a valid react component return?",
    options: [
      { text: "1", isCorrect: false },
      { text: "2", isCorrect:  true },
      { text: "3", isCorrect:  false },
      { text: "4", isCorrect:  false },
    ],
  },
];

export default questions;