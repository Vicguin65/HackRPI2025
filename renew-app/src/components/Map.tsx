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

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const lat = event.latLng?.lat() ?? defaultCenter.lat;
    const lng = event.latLng?.lng() ?? defaultCenter.lng;

    setCoordinates({ lat, lng });
    const location = {
      lat: () => lat,
      lng: () => lng,
    };
    const data = findClosestBuilding(location, "");
    setSolarPotential(data);
    console.log(solarPotential);
  };

  return (
    <div>
      <h1>Click on the Map to Get Coordinates</h1>
      <LoadScript googleMapsApiKey={""}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={coordinates}
          zoom={10}
          onClick={async () => {
            await handleMapClick;
          }}
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
          <strong>Solar Potential Count:</strong>{" "}
          {solarPotential && <>{solarPotential.maxArrayPanelsCount}</>}
        </p>
      </div>
    </div>
  );
};

export default Map;
