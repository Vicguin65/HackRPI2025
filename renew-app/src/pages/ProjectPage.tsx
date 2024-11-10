import React from "react";
import { useLocation } from "react-router-dom";
import Map from "../components/Map";
import Navbar from "../components/Navbar";
interface GeocodeResponse {
  lat: number;
  lng: number;
}

const ProjectPage: React.FC = () => {
  const location = useLocation();
  const coordinates = location.state?.coordinates || {
    lat: 41.728661,
    lng: -73.679733,
  };

  return (
    
    <div className="App">
      <Navbar />
      <Map coordinates={coordinates} />
    </div>
  );
};

export default ProjectPage;
