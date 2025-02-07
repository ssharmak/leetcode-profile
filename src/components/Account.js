import React, { useState } from "react";

const Account = () => {
  // Unique User ID for integration
  const uniqueUserId = "USER-" + Math.floor(100000 + Math.random() * 900000);

  const [accountInfo] = useState({
    userId: uniqueUserId,
    name: "Shailesh Sharma K",
    email: "shailesh@example.com",
  });

  const [connectedAccounts, setConnectedAccounts] = useState({
    google: false,
    linkedin: true,
    github: false,
  });

  // Toggle Social Account Connection
  const toggleConnection = (platform) => {
    setConnectedAccounts((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }));
  };

  // Delete Account Handler
  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );

    if (confirmDelete) {
      alert(`Account with User ID ${accountInfo.userId} has been deleted.`);
      console.log(`Deleting account with User ID: ${accountInfo.userId}`);
      // Backend API call should be made here to remove user data
    }
  };

  return (
    <div style={styles.container}>
      <h2>Account Information</h2>

      {/* Account Information Section */}
      <div style={styles.accountInfo}>
        <p>
          <strong>User ID:</strong> {accountInfo.userId}
        </p>
        <p>
          <strong>Name:</strong> {accountInfo.name}
        </p>
        <p>
          <strong>Email:</strong> {accountInfo.email}
        </p>
      </div>

      <h2>Connected Accounts</h2>

      {/* Google */}
      <div style={styles.section}>
        <label style={styles.label}>Google</label>
        <button
          style={
            connectedAccounts.google
              ? styles.disconnectButton
              : styles.connectButton
          }
          onClick={() => toggleConnection("google")}
        >
          {connectedAccounts.google ? "Disconnect" : "Connect"}
        </button>
      </div>

      {/* LinkedIn */}
      <div style={styles.section}>
        <label style={styles.label}>LinkedIn</label>
        <button
          style={
            connectedAccounts.linkedin
              ? styles.disconnectButton
              : styles.connectButton
          }
          onClick={() => toggleConnection("linkedin")}
        >
          {connectedAccounts.linkedin ? "Disconnect" : "Connect"}
        </button>
      </div>

      {/* GitHub */}
      <div style={styles.section}>
        <label style={styles.label}>GitHub</label>
        <button
          style={
            connectedAccounts.github
              ? styles.disconnectButton
              : styles.connectButton
          }
          onClick={() => toggleConnection("github")}
        >
          {connectedAccounts.github ? "Disconnect" : "Connect"}
        </button>
      </div>

      {/* Delete Account Button */}
      <div style={styles.deleteSection}>
        <h3>Delete Account</h3>
        <p style={styles.warningText}>
          Deleting your account will permanently remove all your data and cannot
          be undone.
        </p>
        <button style={styles.deleteButton} onClick={handleDeleteAccount}>
          Delete Account
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#1e1e1e",
    borderRadius: "8px",
    color: "white",
    maxWidth: "500px",
    margin: "0 auto",
  },
  accountInfo: {
    backgroundColor: "#2a2a2a",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
  },
  label: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  connectButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "8px 12px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  disconnectButton: {
    backgroundColor: "#d9534f",
    color: "white",
    padding: "8px 12px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  deleteSection: {
    marginTop: "30px",
    padding: "15px",
    backgroundColor: "#3a3a3a",
    borderRadius: "5px",
    textAlign: "center",
  },
  warningText: {
    color: "#ffcc00",
    fontSize: "14px",
    marginBottom: "10px",
  },
  deleteButton: {
    backgroundColor: "#ff4d4d",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
    borderRadius: "5px",
  },
};

export default Account;
