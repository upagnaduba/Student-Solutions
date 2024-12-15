import React, { useState } from "react";
import "./ConsistencyDevelopment.css"; // Import your CSS file for styling

const ConsistencyDevelopment = () => {
  const [domain, setDomain] = useState("");
  const [age, setAge] = useState("");
  const [questions, setQuestions] = useState([]);

  // Define questions and proverbs based on domain and age
  const questionsData = {
    Maths: {
      "Under 18": {
        question: "What is the fundamental theorem of arithmetic?",
        proverb: "Rome was not built in a day.",
      },
      "Above 18": {
        question: "Explain the concept of differentiation.",
        proverb: "Practice makes perfect.",
      },
    },
    Coding: {
      "Under 18": {
        question: "What is a loop in programming?",
        proverb: "A stitch in time saves nine.",
      },
      "Above 18": {
        question: "How would you implement a sorting algorithm?",
        proverb: "Where there is a will, there is a way.",
      },
    },
  };

  // Update domain state and set questions based on selected domain and age
  const handleDomainChange = (event) => {
    const selectedDomain = event.target.value;
    setDomain(selectedDomain);
    setQuestions(questionsData[selectedDomain][age]);
  };

  // Update age state and set questions based on selected domain and age
  const handleAgeChange = (event) => {
    const selectedAge = event.target.value;
    setAge(selectedAge);
    setQuestions(questionsData[domain][selectedAge]);
  };

  return (
    <div className="consistency-development-container">
      <h1>Consistency Development</h1>

      <div className="select-options">
        <div className="domain-selection">
          <h3>Select Domain:</h3>
          <label>
            <input
              type="radio"
              value="Maths"
              checked={domain === "Maths"}
              onChange={handleDomainChange}
            />
            Maths
          </label>
          <label>
            <input
              type="radio"
              value="Coding"
              checked={domain === "Coding"}
              onChange={handleDomainChange}
            />
            Coding
          </label>
        </div>

        <div className="age-selection">
          <h3>Select Age Category:</h3>
          <label>
            <input
              type="radio"
              value="Under 18"
              checked={age === "Under 18"}
              onChange={handleAgeChange}
            />
            Under 18
          </label>
          <label>
            <input
              type="radio"
              value="Above 18"
              checked={age === "Above 18"}
              onChange={handleAgeChange}
            />
            Above 18
          </label>
        </div>
      </div>

      {questions && (
        <div className="question-section">
          <h3>Question:</h3>
          <p>{questions.question}</p>
          <h3>Proverb:</h3>
          <p>{questions.proverb}</p>
        </div>
      )}
    </div>
  );
};

export default ConsistencyDevelopment;
