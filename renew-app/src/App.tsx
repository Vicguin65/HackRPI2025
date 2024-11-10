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

function App() {
  // Define a function to handle the coordinates found by AddressFinder
  const handleCoordinatesFound = (coordinates: { lat: number; lng: number }) => {
    console.log("Coordinates found:", coordinates);
    // Additional logic can go here, such as updating state or making API calls
  };

  return (
    <div className="App">
      {/* The Header with navigation */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav className="App-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#problem">Our Problem</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="App-body">
        <h1 className="App-title">Where do you want to build solar panels?</h1>
      </div>
      
      {/* Replace UserInputForm with AddressFinder */}
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
}

export default App;
