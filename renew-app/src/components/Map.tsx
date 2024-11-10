// src/Map.tsx

import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { findClosestBuilding } from "./solar";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 42.728661, // Troy latitude
  lng: -73.679733, // Troy longitude
};

const Map: React.FC = () => {
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number }>({
    lat: defaultCenter.lat,
    lng: defaultCenter.lng,
  });

  const [solarPotential, setSolarPotential] = useState<any | null>(null);

  const handleMapClick = async (event: google.maps.MapMouseEvent) => {
    const lat = event.latLng?.lat() ?? defaultCenter.lat;
    const lng = event.latLng?.lng() ?? defaultCenter.lng;

    setCoordinates({ lat, lng });
    const location = {
      lat: () => lat,
      lng: () => lng,
    };

    // Provide your actual Google API key here
    const apiKey = process.env.REACT_APP_API_KEY;

    findClosestBuilding(location, apiKey)
      .then((data) => {
        setSolarPotential(data.solarPotential);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Click on the Map to Get Coordinates</h1>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={10}
          onClick={(event) => handleMapClick(event)} // Correctly call handleMapClick
        >
          <Marker position={coordinates} />
        </GoogleMap>
      </LoadScript>
      <div id="coordinates">
        <p>
          <strong>Latitude:</strong> {coordinates.lat.toFixed(5)}
        </p>
        <p>
          <strong>Longitude:</strong> {coordinates.lng.toFixed(5)}
        </p>
        <p>
          <h2>maxArrayPanelsCount:</h2>
          {solarPotential?.maxArrayPanelsCount ?? "N/A"} {/* Safe access */}
          <h2>maxArrayAreaMeters2:</h2>
          {solarPotential?.maxArrayAreaMeters2 ?? "N/A"}
          <h2>maxSunshineHoursPerYear</h2>
          {solarPotential?.maxSunshineHoursPerYear ?? "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Map;
