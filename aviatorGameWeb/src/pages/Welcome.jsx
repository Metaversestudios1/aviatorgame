import React, { useEffect, useState } from 'react';
import './../assets/styles/Welcome.css'; // Add any styles for the welcome screen
import bg from '../assets/images/welcome/bg.png'
const Welcome = ({ onWelcomeEnd }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          onWelcomeEnd(); // Call the callback to navigate to Home when done
        }
        return prevProgress + 10;
      });
    }, 500); // Progress increases every 500ms

    return () => clearInterval(interval); // Clean up the interval
  }, [onWelcomeEnd]);

  return (
    <div className="welcome-screen grid">
      <img src={bg} alt="..." className='w-screen h-screen'/>
      <div className="progress-bar absolute">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      {/* <p>{progress}%</p> */}
    </div>
  );
};

export default Welcome;
