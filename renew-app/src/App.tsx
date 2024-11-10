import React from "react";
import logo from "./assets/logo.png";
import "./App.css";
import AddressFinder from "./components/AddressFinder";
import ProjectPage from "./pages/ProjectPage";
import BackgroundTransition from "./components/BackgroundTransition";
import { ReactComponent as ContinentsShape } from "./Continents.svg";
import { ReactComponent as AfricaShape } from "./assets/africa.svg";
import { ReactComponent as AsiaShape } from "./assets/asia.svg";
import { ReactComponent as NAmericaShape } from "./assets/north-america.svg";
import { ReactComponent as SAmericaShape } from "./assets/south-america.svg";
import { ReactComponent as AustraliaShape } from "./assets/australia.svg";
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  // Define a function to handle the coordinates found by AddressFinder
  const handleCoordinatesFound = (coordinates: { lat: number; lng: number }) => {
    console.log("Coordinates found:", coordinates);
    // Additional logic can go here, such as updating state or making API calls
  };
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
    <div className="App">
      {/* The Header with navigation */}
      <Navbar />
      <div className="App-body">
        <h1 className="App-title">Should you build solar panels on your house?</h1>
      </div>
      
      <AddressFinder onCoordinatesFound={handleCoordinatesFound} />
      
      <div className="App-background">
        <AsiaShape className="asia-shape" />
        <AfricaShape className="africa-shape" />
        <NAmericaShape className="north-america-shape" />
        <SAmericaShape className="south-america-shape" />
        <AustraliaShape className="australia-shape" />
      </div>
    </div>
  );
};

export default App;
