/*
axios is a HTTP client used to make requests to the server. 
It simplifies HTTP calls and provides a clean interface for handling API interactions.
*/
import axios from 'axios';

// Dynamically set the API URL based on the environment
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/quiz';

const getQuizQuestions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch quiz questions:', error);
    return [];
  }
};

const quizService = {
  getQuizQuestions,
};

export default quizService;

/*
Code summary:
*This is a background process where it is not visible to the user.
It is part of the frontend code that runs in the user's browser but behind the scenes. 
It is responsible for communicating with the backend to fetch the quiz data.

- This file is a service module that uses axios to make HTTP requests to an API.
- API_URL is dynamically determined based on the environment (either from an environment variable or a default local development URL).
- The quizService object, which includes getQuizQuestions, is exported so that other components can use it to get quiz data.
- getQuizQuestions is an async function that:
  1. Sends a GET request to fetch quiz data.
  2. Returns the data if successful or an empty array if an error occurs.

What i envision flow to the user:
1. User Opens the Quiz Page: The user navigates to the QuizPage component (e.g., clicking a "Start Quiz" button).
2. React Component (QuizPage) Mounts:The useEffect hook in QuizPage runs and calls quizService.getQuizQuestions().
3. Data Fetching Happens in the Background:
  - The API call from quizService.js retrieves the quiz questions from the server.
  - This happens asynchronously (in the background) while the user sees a loading state.
4. User Sees the Questions:
  - Once the quiz questions are fetched, they are displayed by the QuizPage component.
  - The user now sees the quiz questions, options, and UI elements and can interact with them.
*/