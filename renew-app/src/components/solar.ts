interface BuildingInsightsResponse {
  status: string;
  data: any; // Replace `any` with a more specific type if known
  solarPotential: {
    maxArrayPanelsCount: number;
    maxArrayAreaMeters2: number;
    maxSunshineHoursPerYear: number;
    solarPanelConfigs: SolarPanelConfig[];
    financialAnalyses: FinancialAnalysis[];
    // Add other solar-related fields here
  };
}

interface SolarPanelConfig {
  panelsCount: number;
  yearlyEnergyDcKwh: number;
}

interface Currency {
  currencyCode: string;
  units: string;
  nanos?: number;
}

interface Savings {
  savingsYear1: Currency;
  savingsYear20: Currency;
  financiallyViable: boolean;
}

interface LeasingSavings extends Savings {
  annualLeasingCost: Currency;
}

interface CashPurchaseSavings extends Savings {
  paybackYears: number;
  upfrontCost: Currency;
}

interface FinancedPurchaseSavings extends Savings {
  annualLoanPayment: Currency;
}

interface FinancialDetails {
  initialAcKwhPerYear: number;
  remainingLifetimeUtilityBill: Currency;
  federalIncentive: Currency;
  costOfElectricityWithoutSolar: Currency;
  solarPercentage: number;
}

interface FinancialAnalysis {
  panelConfigIndex: number;
  financialDetails?: FinancialDetails;
  leasingSavings?: LeasingSavings;
  cashPurchaseSavings?: CashPurchaseSavings;
  financedPurchaseSavings?: FinancedPurchaseSavings;
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
  const params = new URLSearchParams({ ...args, key: apiKey });
  // https://developers.google.com/maps/documentation/solar/reference/rest/v1/buildingInsights/findClosest
  return fetch(
    `https://solar.googleapis.com/v1/buildingInsights:findClosest?${params}`
  ).then(async (response) => {
    const content = await response.json();
    if (response.status != 200) {
      console.error("Error \n", content);
      return content;
    }
    return content;
  });
}
