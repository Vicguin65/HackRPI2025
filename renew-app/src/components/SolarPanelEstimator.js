import React, { useState } from 'react';
function SolarPanelEstimator({ solarPotential }) {
  const [panelIndex, setPanelIndex] = useState(0);

  // Guard against missing data
  if (!solarPotential.solarPanelConfigs || solarPotential.solarPanelConfigs.length === 0) {
    return <p>No solar panel data available</p>;
  }

  // Get the current configuration based on the selected index
  const currentConfig = solarPotential.solarPanelConfigs[panelIndex];
  
  console.log(currentConfig)

  // Extract financial data for the selected panel configuration, handling missing data
  const financialData = currentConfig?.financialAnalyses?.[0] || {};
  const financialDataSavings = solarPotential?.financialAnalyses?.find(
    (analysis) => analysis.panelConfigIndex === panelIndex
  )?.cashPurchaseSavings || {};


  // Get the savings and payback years with safe fallback values
  const savingsYear1 = financialData?.cashPurchaseSavings?.savings?.savingsYear1?.units || 'N/A';
  const savingsYear20 = financialData?.cashPurchaseSavings?.savings?.savingsYear20?.units || 'N/A';
  const paybackYears = financialData?.cashPurchaseSavings?.paybackYears || 'N/A';

  return (
    <div>
      <h2>Sustainability Estimates on Solar Panels</h2>

      <p>
        <strong>Number of Panels:</strong> {currentConfig.panelsCount}
      </p>
      <p>
        <strong>Estimated Yearly DC Energy Output:</strong> {currentConfig.yearlyEnergyDcKwh} kWh
      </p>
      <p>
        <strong>CO2 Offset Factor:</strong> {solarPotential.carbonOffsetFactorKgPerMwh} kWh
      </p>

      {/* Display Financial Information */}
      <div>
        <h3>Financial Estimate</h3>
        <p>
        <strong> Payback: </strong> {financialDataSavings?.paybackYears || 'N/A'};
        </p>
      </div>

      {/* Panel Slider */}
      <label htmlFor="panelSlider">
        Select Number of Panels:
        <input
          type="range"
          id="panelSlider"
          min="0"
          max={solarPotential.solarPanelConfigs.length - 1}
          value={panelIndex}
          onChange={(e) => setPanelIndex(Number(e.target.value))}
        />
      </label>

      {/* Display current panel index */}
    
    </div>
  );
}

export default SolarPanelEstimator;
