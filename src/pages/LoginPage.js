import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Perform login logic (e.g., authenticate with server)...
      // On successful login, navigate to the admin dashboard
      navigate('/admin'); // Use navigate instead of history.push
    } catch (err) {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

/*
Code explaination summary:
1. LoginPage is a React component that provides a basic login form.
2. It allows the user to input their username and password.
3. State hooks (useState) are used to manage the username, password, and error message.
4. The useNavigate hook from react-router-dom is used to navigate to the /admin page upon successful login.
5. If the login fails, an error message is displayed.
*/