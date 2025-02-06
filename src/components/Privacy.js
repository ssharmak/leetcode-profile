import React, { useState } from "react";

const Privacy = () => {
  // User Privacy Settings state
  const [privacySettings, setPrivacySettings] = useState({
    canContactForJob: true,
    joinLeaderboard: true,
    displaySubmissionHistory: true,
  });

  // Handle privacy setting change
  const handlePrivacyChange = (field, value) => {
    setPrivacySettings({ ...privacySettings, [field]: value });
  };

  return (
    <div style={styles.container}>
      <h2>Privacy Settings</h2>

      {/* Can contact you with job opportunities */}
      <div style={styles.section}>
        <label style={styles.label}>
          Can companies contact you with job opportunities?
        </label>
        <div>
          <input
            type="checkbox"
            checked={privacySettings.canContactForJob}
            onChange={(e) =>
              handlePrivacyChange("canContactForJob", e.target.checked)
            }
            style={styles.checkbox}
          />
          Yes
        </div>
        <button
          style={styles.editButton}
          onClick={() => alert("Privacy setting edited.")}
        >
          Edit
        </button>
      </div>

      {/* Join Study Plan Leaderboard */}
      <div style={styles.section}>
        <label style={styles.label}>Join study plan leaderboard</label>
        <div>
          <input
            type="checkbox"
            checked={privacySettings.joinLeaderboard}
            onChange={(e) =>
              handlePrivacyChange("joinLeaderboard", e.target.checked)
            }
            style={styles.checkbox}
          />
          Yes
        </div>
        <button
          style={styles.editButton}
          onClick={() => alert("Privacy setting edited.")}
        >
          Edit
        </button>
      </div>

      {/* Display Submission History */}
      <div style={styles.section}>
        <label style={styles.label}>Display my submission history</label>
        <div>
          <input
            type="checkbox"
            checked={privacySettings.displaySubmissionHistory}
            onChange={(e) =>
              handlePrivacyChange("displaySubmissionHistory", e.target.checked)
            }
            style={styles.checkbox}
          />
          Yes
        </div>
        <button
          style={styles.editButton}
          onClick={() => alert("Privacy setting edited.")}
        >
          Edit
        </button>
      </div>

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
    maxWidth: "500px",
    margin: "0 auto",
  },
  section: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  checkbox: {
    marginRight: "10px",
  },
  editButton: {
    backgroundColor: "#fdd835",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    marginLeft: "10px",
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "20px",
    width: "100%",
  },
};

export default Privacy;
