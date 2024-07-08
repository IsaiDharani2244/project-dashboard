import React from "react";

const CorrosionTab = () => {
  return (
    <div className="corrosion-tab">
      <h2>Corrosion Details</h2>
      <div className="input-group">
        <label>Consider Method:</label>
        <select>
          <option>Aggressive Romanoff Method</option>
        </select>
      </div>
      <div className="input-group">
        <label>Resistivity (ohm-cm):</label>
        <input type="number" value="900" readOnly />
      </div>
      <div className="input-group">
        <label>Design Life (years):</label>
        <input type="number" value="30" readOnly />
      </div>
      <div className="input-group">
        <label>Zinc Coating (mils):</label>
        <input type="number" value="3" readOnly />
      </div>
    </div>
  );
};

export default CorrosionTab;
