import './App.css';
import React from 'react';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="min-h-screen">
        <Routes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
 
/*
This is the main entry point for rendering the React application.
This is the root component of the React application, and it returns a JSX structure that combines various parts of the app.
It is a default when i created a react app. Can change it.

What users can see:
When the user opens your application, they will see the Header (at the top), 
different pages based on the route (through the Routes component), and the Footer (at the bottom).
Additionally, they will see the contents of the <div className="App"> section, 
which includes the React logo, a welcome message, and a link to the React documentation.
*/