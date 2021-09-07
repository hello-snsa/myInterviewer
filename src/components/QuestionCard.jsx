import React from "react";

const QuestionCard = ({ question, answer, no }) => {
  return (
    <div>
      <h6>Question {no + 1}</h6>
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default QuestionCard;
