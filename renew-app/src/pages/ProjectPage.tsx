import React from "react";
import { useLocation } from "react-router-dom";
import Map from "../components/Map";

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
      <Map coordinates={coordinates} />
    </div>
  );
};

export default ProjectPage;
