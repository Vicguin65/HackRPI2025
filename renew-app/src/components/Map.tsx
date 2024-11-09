// src/Map.tsx

import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 42.728661, // San Francisco latitude
  lng: -73.679733, // San Francisco longitude
};

const Map: React.FC = () => {
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number }>({
    lat: defaultCenter.lat,
    lng: defaultCenter.lng,
  });

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const lat = event.latLng?.lat() ?? defaultCenter.lat;
    const lng = event.latLng?.lng() ?? defaultCenter.lng;

    setCoordinates({ lat, lng });
  };

  return (
    <div>
      <h1>Click on the Map to Get Coordinates</h1>
      <LoadScript googleMapsApiKey={process.env.API_KEY!}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={10}
          onClick={handleMapClick}
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
      </div>
    </div>
  );
};

export default Map;
