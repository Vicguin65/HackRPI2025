import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface GeocodeResponse {
  lat: number;
  lng: number;
}

interface AddressFinderProps {
  onCoordinatesFound: (coordinates: GeocodeResponse) => void;
}

const AddressFinder: React.FC<AddressFinderProps> = ({ onCoordinatesFound }) => {
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const findAddress = async () => {
    setError(null);

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
      onCoordinatesFound({ lat, lng });
      
      // Navigate to ProjectPage with coordinates as state
      navigate("/project", { state: { coordinates: { lat, lng } } });
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
    </div>
  );
};

export default AddressFinder;
