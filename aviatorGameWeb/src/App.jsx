import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import LoginSignup from './pages/LoginSignup';
import Register from './pages/Register';


function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeEnd = () => {
    setShowWelcome(false); // Hide the welcome page after it's done
  };

  return (
    <Router>
      {showWelcome ? (
        <Welcome onWelcomeEnd={handleWelcomeEnd} />
      ) : (
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<LoginSignup />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
