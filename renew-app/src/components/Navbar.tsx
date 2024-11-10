import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Update with the correct path to the logo
import '../App.css'; // Make sure you create a CSS file for the Navbar styling

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleProblemClick = () => {
    navigate('/about');
  };

  const handleTeamClick = () => {
    navigate('/team');
  };

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav className="App-nav">
        <ul>
          <li>
            <button onClick={handleHomeClick} className="button-style">
              Home
            </button>
          </li>
          <li>
            <button onClick={handleProblemClick} className="button-style">
              About
            </button>
          </li>
          <li>
            <button onClick={handleTeamClick} className="button-style">
              Our Team
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
