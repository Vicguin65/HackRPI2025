import React, { useState } from 'react';

function SolarPanelEstimator({ solarPanelConfigs }) {
  const [panelIndex, setPanelIndex] = useState(0);

  // Guard against missing data
  if (!solarPanelConfigs || solarPanelConfigs.length === 0) {
    return <p>No solar panel data available</p>;
  }

  // Get the current configuration based on the selected index
  const currentConfig = solarPanelConfigs[panelIndex];

  // Extract financial data for the selected panel configuration, handling missing data
  const financialData = currentConfig?.financialAnalyses?.[0] || {};

  // Get the savings and payback years with safe fallback values
  const savingsYear1 = financialData?.cashPurchaseSavings?.savings?.savingsYear1?.units || 'N/A';
  const savingsYear20 = financialData?.cashPurchaseSavings?.savings?.savingsYear20?.units || 'N/A';
  const paybackYears = financialData?.cashPurchaseSavings?.paybackYears || 'N/A';

  return (
    <div>
      <h2>Estimate on Solar Panels</h2>

      <p>
        <strong>Number of Panels:</strong> {currentConfig.panelsCount}
      </p>
      <p>
        <strong>Estimated Yearly DC Energy Output:</strong> {currentConfig.yearlyEnergyDcKwh} kWh
      </p>

      {/* Display Financial Information */}
      <div>
        <h3>Financial Estimate</h3>
        <p>
          <strong>Savings Year 1:</strong> ${savingsYear1}
        </p>
        <p>
          <strong>Savings Year 20:</strong> ${savingsYear20}
        </p>
        <p>
          <strong>Payback Years:</strong> {paybackYears} years
        </p>
      </div>

      {/* Panel Slider */}
      <label htmlFor="panelSlider">
        Select Number of Panels:
        <input
          type="range"
          id="panelSlider"
          min="0"
          max={solarPanelConfigs.length - 1}
          value={panelIndex}
          onChange={(e) => setPanelIndex(Number(e.target.value))}
        />
      </label>

      {/* Display current panel index */}
      <p>Current Panel Index: {panelIndex}</p>
    </div>
  );
}

export default SolarPanelEstimator;