import React from "react";
import PerformanceGraph from "./PerformanceGraph";

const Points = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>User Points</h2>
      <p>
        You have <strong>1500</strong> points available!
      </p>
      <PerformanceGraph />
    </div>
  );
};

export default Points;
