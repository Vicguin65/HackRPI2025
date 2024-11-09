import * as dotenv from "dotenv";

// Load the .env file
dotenv.config();

// Access environment variables
const apiKey = process.env.API_KEY;

if (!apiKey) {
  throw new Error("API_KEY is not defined in the environment variables");
}

interface BuildingInsightsResponse {
  status: string;
  data: any; // Replace `any` with a more specific type if known
}

/**
 * Fetches the building insights information from the Solar API.
 *   https://developers.google.com/maps/documentation/solar/building-insights
 *
 * @param  {LatLng} location      Point of interest as latitude longitude.
 * @param  {string} apiKey        Google Cloud API key.
 * @return {Promise<DataLayersResponse>}  Building Insights response.
 */
export async function findClosestBuilding(
  location: { lat: () => number; lng: () => number },
  apiKey: string
): Promise<BuildingInsightsResponse> {
  const args = {
    "location.latitude": location.lat().toFixed(5),
    "location.longitude": location.lng().toFixed(5),
  };
  console.log("GET buildingInsights\n", args);
  const params = new URLSearchParams({ ...args, key: apiKey });
  // https://developers.google.com/maps/documentation/solar/reference/rest/v1/buildingInsights/findClosest
  return fetch(
    `https://solar.googleapis.com/v1/buildingInsights:findClosest?${params}`
  ).then(async (response) => {
    const content = await response.json();
    if (response.status != 200) {
      console.error("findClosestBuilding\n", content);
      throw content;
    }
    console.log("buildingInsightsResponse", content);
    return content;
  });
}

// Example coordinates (latitude and longitude) for the location
const location = {
  lat: () => 37.7749,
  lng: () => -122.4194,
};

// Call the function
findClosestBuilding(location, apiKey)
  .then((data) => {
    console.log("Building Insights Data:", data);
  })
  .catch((error) => {
    console.error("Error fetching building insights:", error);
  });
