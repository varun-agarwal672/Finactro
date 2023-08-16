import React from "react";
import "../styles/FlowChart.css";
import flow from "../constants/FLOWFINAL.jpg"

const FlowChart = () => {
    return (
      <div className="flowchart-container">
        <img src={flow} alt="Flow Chart" className="centered-image" />
      </div>
    );
};

export default FlowChart;
  