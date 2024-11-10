import React, { useState } from "react";

interface GeocodeResponse {
  lat: number;
  lng: number;
}

const AddressFinder: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [coordinates, setCoordinates] = useState<GeocodeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const findAddress = async () => {
    setError(null); // Reset any previous error

    if (!address) {
      setError("Please enter an address");
      return;
    }

    try {
      const apiKey = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${apiKey}`
      );

      if (!response.ok) throw new Error("Failed to fetch data from API");

      const data = await response.json();

      if (data.status !== "OK" || !data.results[0]) {
        throw new Error("Address not found");
      }

      const { lat, lng } = data.results[0].geometry.location;
      setCoordinates({ lat, lng });
    } catch (error: any) {
      setError(error.message || "An error occurred");
    }
  };

  return (
    <div>
      <h2>Find Address Coordinates</h2>
      <input
        type="text"
        value={address}
        onChange={handleInputChange}
        placeholder="Enter an address"
      />
      <button onClick={findAddress}>Find Address</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {coordinates && (
        <div>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
        </div>
      )}
    </div>
  );
};

export default AddressFinder;
