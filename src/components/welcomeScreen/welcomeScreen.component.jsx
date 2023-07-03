import React from 'react';

const WelcomeScreen = ({ onLogout }) => {
  const handleLogout = () => {
    // Call the onLogout function passed from the parent component
    if (typeof onLogout === 'function') {
      onLogout();
    }
  };

  return (
    <div>
      <h1>Cześć name</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default WelcomeScreen;
