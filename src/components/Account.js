// src/components/Account.js
import React from "react";

const Account = () => {
  return (
    <div style={styles.container}>
      <h2>Account Settings</h2>
      <p>Change your email, password, and security settings.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
};

export default Account;
