// src/components/Points.js
import React from "react";

const Points = () => {
  return (
    <div style={styles.container}>
      <h2>User Points</h2>
      <p>
        You have <strong>1500</strong> points available!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
};

export default Points;
