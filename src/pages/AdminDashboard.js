import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [newQuiz, setNewQuiz] = useState({ question: '', correct_answer: '', incorrect_answers: [] });

  // Fetch existing quizzes from the API
  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/quiz');
      setQuizzes(response.data);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
    }
  };

  // Add a new quiz
  const handleAddQuiz = async () => {
    try {
      // Here, i simply add the new quiz to the local state for simplicity
      const response = await axios.post('http://localhost:5000/api/quiz', newQuiz);
      if (response.status === 201) {
        fetchQuizzes(); // Refresh quizzes after adding a new one
        setNewQuiz({ question: '', correct_answer: '', incorrect_answers: [] }); // Reset the form
      }
    } catch (error) {
      console.error('Error adding quiz:', error);
    }
  };

  // Handle changes to form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuiz({ ...newQuiz, [name]: value });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Existing Quizzes</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            <strong>Question:</strong> {quiz.question}
            <br />
            <strong>Answer:</strong> {quiz.correct_answer}
          </li>
        ))}
      </ul>

      <h2>Add a New Quiz</h2>
      <form>
        <label>
          Question:
          <input
            type="text"
            name="question"
            value={newQuiz.question}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Correct Answer:
          <input
            type="text"
            name="correct_answer"
            value={newQuiz.correct_answer}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Incorrect Answers (comma separated):
          <input
            type="text"
            name="incorrect_answers"
            value={newQuiz.incorrect_answers.join(',')}
            onChange={(e) => setNewQuiz({ ...newQuiz, incorrect_answers: e.target.value.split(',') })}
            required
          />
        </label>
        <br />
        <button type="button" onClick={handleAddQuiz}>Add Quiz</button>
      </form>
    </div>
  );
};

export default AdminDashboard;

/* 
Code explainantion summary:
These functions help to manage data within the AdminDashboard:
1. fetchQuizzes loads quizzes initially and refreshes them after a new quiz is added.
2. handleAddQuiz adds a new quiz and updates the view.
3. handleInputChange handles form changes for adding a quiz.
*/