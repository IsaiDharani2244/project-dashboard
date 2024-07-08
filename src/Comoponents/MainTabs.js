import React, { useState, useRef } from "react";
import PMultiplierTab from "./PMultiplierTab";
import "../assests/styles.css";
import runIcon from "../assests/run-icon.png";
import saveIcon from "../assests/save.png";
import draftIcon from "../assests/draft.png";

const MainTabs = () => {
  const [activeTab, setActiveTab] = useState("Input");
  const pMultiplierTabRef = useRef(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSave = () => {
    if (pMultiplierTabRef.current) {
      pMultiplierTabRef.current.handleSave();
    }
  };

  return (
    <div className="main-tabs">
      <div className="header">
        <span className="project-name">24015-254 WHC - Green Mallard</span>
        <div className="button-group">
          <button className="draft-button">
            <img src={draftIcon} alt="Draft" className="icon" /> Draft
          </button>
          <button className="save-button" onClick={handleSave}>
            <img src={saveIcon} alt="Save" className="icon" /> Save
          </button>
          <button className="run-button">
            <img src={runIcon} alt="Run" className="icon" /> Run
          </button>
        </div>
      </div>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "Details" ? "active" : ""}`}
          onClick={() => handleTabClick("Details")}
        >
          Details
        </button>
        <button
          className={`tab-button ${activeTab === "Settings" ? "active" : ""}`}
          onClick={() => handleTabClick("Settings")}
        >
          Settings
        </button>
        <button
          className={`tab-button ${activeTab === "Input" ? "active" : ""}`}
          onClick={() => handleTabClick("Input")}
        >
          Input
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "Details" && <div>Details Tab.</div>}
        {activeTab === "Settings" && <div>Settings Tab.</div>}
        {activeTab === "Input" && <PMultiplierTab ref={pMultiplierTabRef} />}
      </div>
    </div>
  );
};

export default MainTabs;
