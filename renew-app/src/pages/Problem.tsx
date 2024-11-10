import React from "react";
import "../App.css";
import "./Problem.css";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";

const Problem: React.FC = () => {
    const navigate = useNavigate();
  
    // Function to handle navigation to /problem
    const handleProblemClick = () => {
      navigate('/about');
    };
  
    // Function to handle navigation to /team
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
                    <button  className="button-style">Home</button>
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
                Our Inspiration
            </div>
            <div className="Problem-body">
            Renewable energy served as our primary inspiration. Our goal is to promote cleaner energy for a more sustainable world, and we recognize that one of the key challenges in adopting renewable energy is determining whether solar panel installation offers a worthwhile return on investment, given that the benefits can vary significantly between homes.
            </div>
            <div className="Problem-title">
            How we built it
            </div>
            <div className="Problem-body">
            We developed this project using React for the front end, combining it with the TypeScript template for type safety and scalability. The Google Places API was used to gather precise location data, while the Google Solar API provided information on solar potential based on geographic and environmental data. The app’s UI and logic were built to create a smooth user experience, allowing users to search for places and view solar data efficiently.            </div>
      </div>
    );
};

export default Problem;