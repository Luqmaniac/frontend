import React, { useState, useEffect } from 'react';
import quizService from '../services/quizService';

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    console.log('Fetching quiz questions...');
    quizService.getQuizQuestions().then((data) => {
      console.log('Received quizzes:', data);
      setQuizzes(data);
    }).catch(error => console.error('Error fetching quizzes:', error));
  }, []);

  return (
    <div>
      <h1>Quizzes</h1>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <strong>Question: </strong>{quiz.question}<br />
            <strong>Correct Answer: </strong>{quiz.correct_answer}<br />
            <strong>Options: </strong>
            <ul>
              {[...quiz.incorrect_answers, quiz.correct_answer].map((answer, i) => (
                <li key={i}>{answer}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizPage;

/*
Code explaination summary
1. QuizPage is a functional component that fetches quiz questions when it is first rendered.
2. The component uses useEffect to make a call to quizService.getQuizQuestions() to fetch the quiz data.
3. State (quizzes) is used to store the fetched quiz data.
4. The quiz questions, correct answers, and options are then rendered on the page.
5. The options for each question include both correct and incorrect answers, which are displayed as a list.

How it suppose to work:
1. When QuizPage is loaded, useEffect triggers, calling quizService.getQuizQuestions() to get the quiz data.
2. Once the data is retrieved, the setQuizzes(data) updates the state.
3. The JSX then renders a list of quizzes, each showing the question, correct answer, and a list of options.

** This file is connected to quizServices.js, explaination is there.
*/