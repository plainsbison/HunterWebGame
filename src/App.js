import React from 'react';
import './App.css'; // Global styles
import Header from './components/pagelayout/Header'; // Import Header component
import Footer from './components/pagelayout/Footer'; // Import Footer component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router

// Import pages
import Cards from './components/mainpage/Cards'; // Import Home page component
import GamePage from './components/gamepage/GamePage'; // Import Game page component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Set up Routes for Home and Game page */}
        <Routes>
          <Route path="/" element={<Cards />} /> {/* Home Page */}
          <Route path="/game" element={<GamePage />} /> {/* Game Page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
