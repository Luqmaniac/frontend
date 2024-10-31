//React and relevant hooks are imported for managing state, creating context, and handling lifecycle events.
import React, { createContext, useState, useContext, useEffect } from 'react';

import axios from 'axios'; //Imported to handle HTTP requests, specifically to fetch quizzes from a server

// Create the Quiz Context
const QuizContext = createContext();

// Create a custom hook for easier access to the context
export const useQuiz = () => useContext(QuizContext);

// Create a QuizProvider component
/* State variables are created:
- quizzes: Holds the list of quiz data. Initialized as an empty array.
- loading: Tracks the loading state of the quiz-fetching process. Initialized as false.
- error: Holds error messages. Initialized as null.
*/
export const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Fetch quizzes from the server
  const fetchQuizzes = async () => {
    setLoading(true);
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL || 'http://localhost:5000/api/quiz', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setQuizzes(response.data);
      setError(null); 
    } catch (err) {
      setError('Failed to fetch quizzes');
    } finally {
      setLoading(false);
    }
  };

  // Fetch quizzes on initial load
  useEffect(() => {
    fetchQuizzes();
  }, []);

  return (
    <QuizContext.Provider value={{ quizzes, loading, error, fetchQuizzes }}>
      {children}
    </QuizContext.Provider>
  );
};

/* 
Code explaination summary:
- The QuizProvider component provides a context (QuizContext) that holds quiz data, loading state, and error state.
- It fetches quiz data from an API endpoint when the component mounts using useEffect.
- The context value contains the quiz data, loading status, error messages, and a function to fetch quizzes again.
- Child components wrapped by QuizProvider can easily access this data using the custom useQuiz hook.
*/