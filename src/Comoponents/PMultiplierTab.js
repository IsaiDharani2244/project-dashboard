import React, { useImperativeHandle, forwardRef, useState } from "react";

const PMultiplierTab = forwardRef((props, ref) => {
  const [pStart, setPStart] = useState("");
  const [pEnd, setPEnd] = useState("");
  const [soilLayers, setSoilLayers] = useState([]);
  const [newSoilLayer, setNewSoilLayer] = useState("");

  useImperativeHandle(ref, () => ({
    handleSave,
  }));

  const addSoilLayer = () => {
    if (newSoilLayer) {
      setSoilLayers([...soilLayers, newSoilLayer]);
      setNewSoilLayer("");
    }
  };

  const handleSave = () => {
    if (pStart && pEnd && soilLayers.length > 0) {
      const inputData = {
        pStart,
        pEnd,
        soilLayers,
      };

      // Send data in JSON format (e.g., to a server endpoint)
      console.log("Data saved:", JSON.stringify(inputData, null, 2));

      // Reset fields after saving
      setPStart("");
      setPEnd("");
      setSoilLayers([]);
      setNewSoilLayer("");
    } else {
      alert("Please fill in all fields and add at least one soil layer.");
    }
  };

  return (
    <div className="p-multiplier-tab">
      <h2>P Multiplier Details</h2>
      <div className="input-group">
        <label>P Multiplier Start:</label>
        <input
          type="number"
          value={pStart}
          onChange={(e) => setPStart(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>P Multiplier End:</label>
        <input
          type="number"
          value={pEnd}
          onChange={(e) => setPEnd(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Soil Layers:</label>
        <input
          type="text"
          value={newSoilLayer}
          onChange={(e) => setNewSoilLayer(e.target.value)}
        />
        <button type="button" onClick={addSoilLayer}>
          +Add Soil Layer
        </button>
      </div>
      <ul>
        {soilLayers.map((layer, index) => (
          <li key={index}>{layer}</li>
        ))}
      </ul>
    </div>
  );
});

export default PMultiplierTab;
