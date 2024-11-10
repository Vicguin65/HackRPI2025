import React from "react";
import "../App.css";
import "./Problem.css";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import teamPhoto from "../team.jpg";
import "./Team.css";

const Team: React.FC = () => {
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
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <nav className="App-nav">
                <ul>
                    <li>
                    <button onClick={handleHomeClick} className="button-style">Home</button>
                    </li>
                    <li>
                    <button onClick={handleProblemClick} className="button-style">About</button>
                    </li>
                    <li>
                    <button onClick={handleTeamClick} className="button-style">Our Team</button>
                    </li>
                </ul>
                </nav>
            </header>

            <div className="Problem-title">
                Our Team
            </div>
            <div >
                <img src={teamPhoto} className="img-style"/>
            </div>
        </div>
    );
};

export default Team;