import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import LoginSignup from './pages/LoginSignup';
import Register from './pages/Register';
import ResetPassword from './pages/resetPassword';
import ResetOtpScreen from './pages/ResetOtpScreen';
import GameScreen from './pages/GameScreen';


function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeEnd = () => {
    setShowWelcome(false);
  };

  return (
    <Router>
      {showWelcome ? (
        <Welcome onWelcomeEnd={handleWelcomeEnd} />
      ) : (
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/password-reset" element={<ResetPassword />} />
          <Route path="/password-reset-otp" element={<ResetOtpScreen />} />
          <Route path="/aviator-game" element={<GameScreen />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
