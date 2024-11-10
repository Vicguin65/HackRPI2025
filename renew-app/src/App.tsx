
import logo from "./logo.svg";
import "./App.css";
import Map from "./components/Map";
import AddressFinder from "./components/AddressFinder";
import React, { useState } from "react";
interface GeocodeResponse{
  lat: number;
  lng: number;
}


function App() {
  const [coordinates, setCoordinates] = useState<GeocodeResponse | null>(null);
const handleCoordinatesFound = (coords: GeocodeResponse) => {
    setCoordinates(coords); // Store coordinates in parent state
  };
  return (
    <div className="App">
      <AddressFinder onCoordinatesFound = {handleCoordinatesFound}/>
      <Map />
    </div>
  );
}

export default App;
