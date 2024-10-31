import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Wrap your App with BrowserRouter */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

/* reportWebVitals is defaultly included when i Create React App to give developers an easy way to monitor and optimize their apps, 
but it is not essential for the core functionality of the application.*/
reportWebVitals();

/*
Code explaination summary
1. Imports the necessary libraries and components (React, ReactDOM, App, CSS styles, and reportWebVitals).
2. Creates the React root using ReactDOM.createRoot() and points to the DOM element with the ID 'root' (usually found in index.html).
3. Renders the <App /> component inside a React.StrictMode wrapper.
4. React.StrictMode adds extra checks in development mode to help find common problems and warnings.
*/