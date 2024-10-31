import React from 'react';
import QuizCard from './Quizcard';

const GameList = ({ quizzes }) => {
  return (
    <div className="game-list">
      {quizzes.map((quiz, index) => (
        <QuizCard key={index} quiz={quiz} />
      ))}
    </div>
  );
};

export default GameList;
