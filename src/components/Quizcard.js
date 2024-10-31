import React from 'react';

const QuizCard = ({ quiz }) => {
  return (
    <div className="quiz-card">
      <h2 className="quiz-question">{quiz.question}</h2>
      <div className="quiz-answers">
        <strong>Correct Answer:</strong> {quiz.correct_answer}
      </div>
    </div>
  );
};

export default QuizCard;
