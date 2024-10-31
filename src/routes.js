import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/quiz" element={<QuizPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/admin" element={<AdminDashboard />} />
  </Routes>
);

export default AppRoutes;


/*
Code summarry explaination:
1. AppRoutes is the central routing component of this React app.
2. It uses React Router to manage the various URLs (routes) and render the appropriate components for each URL.
3. Each Route maps a specific URL path to a component.
4. When a user navigates to a particular URL, React Router determines which component to render based on the path.

How it works
1. When the user navigates to the root URL (http://localhost:3000/), the HomePage component is rendered.
2. When the user navigates to /quiz, the QuizPage component is rendered.
3. When the user navigates to /login, the LoginPage component is rendered.
4. When the user navigates to /admin, the AdminDashboard component is rendered.

This routing system allows the app to navigate seamlessly between different pages 
without refreshing the entire page, providing a single-page application experience.
*/