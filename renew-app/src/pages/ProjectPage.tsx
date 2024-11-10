import logo from "./logo.svg";
import Map from "../components/Map";
import AddressFinder from "../components/AddressFinder";
import React, { useState } from "react";

interface GeocodeResponse {
  lat: number;
  lng: number;
}

const ProjectPage: React.FC = () => {
  const [coordinates, setCoordinates] = useState<GeocodeResponse>({
    lat: 41.728661,
    lng: -73.679733,
  });
  const handleCoordinatesFound = (coords: GeocodeResponse) => {
    setCoordinates(coords); // Store coordinates in parent state
  };
  return (
    <div className="App">
      <AddressFinder onCoordinatesFound={handleCoordinatesFound} />
      <Map coordinates={coordinates} />
    </div>
  );
};

export default ProjectPage;
