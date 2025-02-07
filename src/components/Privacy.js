import React, { useState } from "react";

const Privacy = () => {
  const [privacy, setPrivacy] = useState({
    profileVisibility: "Public",
    resumeVisibility: "Public",
    performanceVisibility: "Public",
    canContactForJob: true,
    showSubmissionHistory: true,
    acceptTerms: false,
  });

  // Handle Privacy Changes
  const handlePrivacyChange = (field, value) => {
    setPrivacy({ ...privacy, [field]: value });
  };

  // Handle Save Changes
  const handleSave = () => {
    if (!privacy.acceptTerms) {
      alert("You must accept the Terms & Conditions before saving changes.");
      return;
    }

    alert("Privacy settings updated successfully!");
  };

  return (
    <div style={styles.container}>
      <h2>Privacy Settings</h2>
      <p>Manage how your data is shared and displayed.</p>

      {/* Profile Visibility */}
      <div style={styles.section}>
        <label style={styles.label}>Profile Visibility</label>
        <select
          value={privacy.profileVisibility}
          onChange={(e) =>
            handlePrivacyChange("profileVisibility", e.target.value)
          }
          style={styles.select}
        >
          <option value="Public">Public</option>
          <option value="Friends">Friends</option>
          <option value="Private">Private</option>
        </select>
      </div>

      {/* Resume Visibility */}
      <div style={styles.section}>
        <label style={styles.label}>Resume Visibility</label>
        <select
          value={privacy.resumeVisibility}
          onChange={(e) =>
            handlePrivacyChange("resumeVisibility", e.target.value)
          }
          style={styles.select}
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
      </div>

      {/* Performance Visibility */}
      <div style={styles.section}>
        <label style={styles.label}>Performance Visibility</label>
        <select
          value={privacy.performanceVisibility}
          onChange={(e) =>
            handlePrivacyChange("performanceVisibility", e.target.value)
          }
          style={styles.select}
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
        </select>
      </div>

      {/* Can Companies Contact You? */}
      <div style={styles.section}>
        <label style={styles.label}>
          Can companies contact you with job opportunities?
        </label>
        <input
          type="checkbox"
          checked={privacy.canContactForJob}
          onChange={() =>
            handlePrivacyChange("canContactForJob", !privacy.canContactForJob)
          }
          style={styles.checkbox}
        />
        <span>Yes</span>
      </div>

      {/* Display Submission History */}
      <div style={styles.section}>
        <label style={styles.label}>Display my submission history</label>
        <input
          type="checkbox"
          checked={privacy.showSubmissionHistory}
          onChange={() =>
            handlePrivacyChange(
              "showSubmissionHistory",
              !privacy.showSubmissionHistory
            )
          }
          style={styles.checkbox}
        />
        <span>Yes</span>
      </div>

      {/* Terms & Conditions */}
      <h2>Terms & Conditions</h2>
      <div style={styles.termsBox}>
        <p>
          Welcome to our Personalized Coding Platform. By using our services,
          you agree to the following terms:
        </p>
        <ul style={styles.list}>
          <li>
            ✅ **User Responsibility**: Users must not share account credentials
            or misuse the platform.
          </li>
          <li>
            ✅ **Content Ownership**: Any code submitted remains the
            intellectual property of the user, but the platform may use
            anonymized submissions for improvement.
          </li>
          <li>
            ✅ **Data Privacy**: We do not share personal information with third
            parties without user consent.
          </li>
          <li>
            ✅ **Fair Usage Policy**: Abusing the system, spamming, or unethical
            behavior may result in suspension.
          </li>
          <li>
            ✅ **Performance Data**: Your coding performance data is stored to
            provide insights and analytics.
          </li>
          <li>
            ✅ **Modifications**: These terms may change over time, and users
            will be notified.
          </li>
        </ul>
      </div>

      {/* Accept Terms & Conditions */}
      <div style={styles.section}>
        <input
          type="checkbox"
          checked={privacy.acceptTerms}
          onChange={() =>
            handlePrivacyChange("acceptTerms", !privacy.acceptTerms)
          }
          style={styles.checkbox}
        />
        <span>I accept the Terms & Conditions</span>
      </div>

      {/* Save Button */}
      <button style={styles.saveButton} onClick={handleSave}>
        Save Changes
      </button>
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
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
    flex: "1",
  },
  select: {
    width: "50%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#121212",
    color: "white",
  },
  termsBox: {
    backgroundColor: "#2a2a2a",
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  list: {
    paddingLeft: "20px",
  },
  checkbox: {
    marginRight: "10px",
  },
  saveButton: {
    backgroundColor: (privacy) => (privacy.acceptTerms ? "#4CAF50" : "#777"),
    color: "green",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
    borderRadius: "5px",
  },
};

export default Privacy;
