// src/Map.tsx

import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { findClosestBuilding } from "./solar";
import SolarPanelEstimator from "./SolarPanelEstimator"; // Import the slider component
import './Map.css';
const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 42.728661, // Troy latitude
  lng: -73.679733, // Troy longitude
};

interface DisplayCoordinatesProps {
  coordinates: GeocodeResponse;
}

interface GeocodeResponse {
  lat: number;
  lng: number;
}

const Map: React.FC<DisplayCoordinatesProps> = ({ coordinates }) => {
  const [solarPotential, setSolarPotential] = useState<any | null>(null);

  const handleCoordinatesUpdate = () => {
    const apiKey = process.env.REACT_APP_API_KEY;

    findClosestBuilding(
      { lat: () => coordinates.lat, lng: () => coordinates.lng },
      apiKey
    )
      .then((data) => {
        setSolarPotential(data.solarPotential);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (coordinates) {
      handleCoordinatesUpdate();
    }
  }, [coordinates]);

  return (
    <div className="map-container">
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={18}
         
        >
          <Marker position={coordinates} />
        </GoogleMap>
      </LoadScript>
      <div id="coordinates" className="coordinates-display">


        {/* Conditionally render the SolarPanelEstimator if solar panel configurations are available */}
        {solarPotential?.solarPanelConfigs && (
        <div className="solar-panel-estimator">
        <SolarPanelEstimator solarPotential={solarPotential} />
      </div>
          
        )}
      </div>
    </div>
  );
};

export default Map;
