import React, { useState } from "react";

const Account = () => {
  const [account, setAccount] = useState({
    email: "shailesh@example.com",
    newPassword: "",
    confirmPassword: "",
    twoFactorAuth: false,
  });

  const [privacy, setPrivacy] = useState({
    showProfile: true,
    allowMessages: false,
  });

  const handleAccountChange = (field, value) => {
    setAccount({ ...account, [field]: value });
  };

  const handlePrivacyChange = (e) => {
    setPrivacy({ ...privacy, [e.target.name]: e.target.checked });
  };

  return (
    <div style={styles.container}>
      <h2>Account Settings</h2>

      {/* Email Update */}
      <div style={styles.section}>
        <label style={styles.label}>Email Address</label>
        <input
          type="email"
          value={account.email}
          onChange={(e) => handleAccountChange("email", e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Password Change */}
      <div style={styles.section}>
        <label style={styles.label}>New Password</label>
        <input
          type="password"
          value={account.newPassword}
          onChange={(e) => handleAccountChange("newPassword", e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.section}>
        <label style={styles.label}>Confirm Password</label>
        <input
          type="password"
          value={account.confirmPassword}
          onChange={(e) =>
            handleAccountChange("confirmPassword", e.target.value)
          }
          style={styles.input}
        />
      </div>

      {/* Two-Factor Authentication */}
      <div style={styles.section}>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={account.twoFactorAuth}
            onChange={() =>
              handleAccountChange("twoFactorAuth", !account.twoFactorAuth)
            }
          />
          Enable Two-Factor Authentication (2FA)
        </label>
      </div>

      <h3>Privacy Settings</h3>

      {/* Privacy Settings */}
      <label style={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="showProfile"
          checked={privacy.showProfile}
          onChange={handlePrivacyChange}
        />
        Show Profile to Public
      </label>

      <label style={styles.checkboxLabel}>
        <input
          type="checkbox"
          name="allowMessages"
          checked={privacy.allowMessages}
          onChange={handlePrivacyChange}
        />
        Allow Direct Messages
      </label>

      <button style={styles.saveButton}>Save Changes</button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#1e1e1e",
    borderRadius: "8px",
    color: "white",
    maxWidth: "400px",
  },
  section: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  checkboxLabel: {
    display: "block",
    margin: "10px 0",
  },
  saveButton: {
    backgroundColor: "yellow",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default Account;
