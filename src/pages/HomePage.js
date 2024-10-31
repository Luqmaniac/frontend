import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      <h1>Welcome to the Educational Games & Quizzes Platform</h1>
      <p>Guess can select a quiz to get started<p>
        </p> Users log in to manage your quizzes.</p>
      
      <div style={{ marginTop: '20px' }}>
        <button>
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Log In</Link>
        </button>
        <button style={{ marginLeft: '10px' }}>
          <Link to="/play-quiz" style={{ textDecoration: 'none', color: 'inherit' }}>Play as Guest</Link>
        </button>
      </div>
    </main>
  );
};

export default HomePage;

/*
Basic Homepage for user to login & guest to play quiz without login
*/