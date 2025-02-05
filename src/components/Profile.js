// src/components/Profile.js
import React, { useState } from "react";

const Profile = () => {
  // Unique ID for the user
  const uniqueUserId = Math.floor(100000 + Math.random() * 900000);

  // State to manage user details
  const [userData, setUserData] = useState({
    name: "Shailesh Sharma K",
    gender: "Not provided",
    location: "Your location",
    birthday: "Your birthday",
    summary: "Tell us about yourself...",
    website: "Your blog, portfolio, etc.",
    github: "Your Github username or URL",
    linkedin: "Your LinkedIn username or URL",
  });

  // Track which field is being edited
  const [editingField, setEditingField] = useState(null);

  // Handle input change
  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileHeader}>
        <div style={styles.profilePicture}>S</div>
        <div>
          <h2>{userData.name}</h2>
          <p>User ID: {uniqueUserId}</p>
        </div>
      </div>

      <div style={styles.profileInfo}>
        <h3>Basic Info</h3>
        <table style={styles.table}>
          <tbody>
            {Object.keys(userData).map((field) => (
              <tr key={field}>
                <td style={styles.label}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </td>
                <td>
                  {editingField === field ? (
                    <input
                      type="text"
                      value={userData[field]}
                      onChange={(e) => handleChange(field, e.target.value)}
                      onBlur={() => setEditingField(null)}
                      autoFocus
                      style={styles.input}
                    />
                  ) : (
                    <span>{userData[field]}</span>
                  )}
                </td>
                <td>
                  <button
                    style={styles.editButton}
                    onClick={() => setEditingField(field)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    padding: "20px",
  },
  profileHeader: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #333",
    paddingBottom: "10px",
  },
  profilePicture: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    backgroundColor: "#007bff",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    fontWeight: "bold",
    marginRight: "15px",
  },
  profileInfo: {
    marginTop: "20px",
    backgroundColor: "#1e1e1e",
    padding: "15px",
    borderRadius: "5px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  label: {
    fontWeight: "bold",
    padding: "10px",
  },
  input: {
    width: "100%",
    padding: "5px",
    fontSize: "16px",
  },
  editButton: {
    backgroundColor: "#fdd835",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Profile;
