// src/components/Notifications.js
import React from "react";

const Notifications = () => {
  return (
    <div style={styles.container}>
      <h2>Notification Settings</h2>
      <p>Manage email and push notifications.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
};

export default Notifications;
