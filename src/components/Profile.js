import React, { useState } from "react";

const Profile = () => {
  const uniqueUserId = "LC-" + Math.floor(100000 + Math.random() * 900000);

  // User Data state
  const [userData, setUserData] = useState({
    name: "Shailesh Sharma K",
    email: "shailesh@example.com",
    password: "",
    contactNumber: "123-456-7890",
    summary: "Aspiring Full Stack Developer",
    github: "https://github.com/shailesh",
    linkedin: "https://linkedin.com/in/shailesh",
    website: "https://shailesh.dev",
    twitter: "https://twitter.com/shailesh",
    workplace: "Add a workplace",
    school: "Add a school",
    skills: "Your Skills",
    technicalSkills: "Your Technical Skills",
    softSkills: "Your Soft Skills",
    experience: "Add work experience",
    education: "Add education details",
    dob: "",
    location: "Your location",
  });

  // Track which field is being edited
  const [editingField, setEditingField] = useState(null);

  // Store original user data for comparison
  const [originalData, setOriginalData] = useState({ ...userData });

  // Handle input changes
  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  // Handle save action (track changes)
  const handleSave = () => {
    const changes = [];

    // Compare current data with original data and track which fields were changed
    for (let field in userData) {
      if (userData[field] !== originalData[field]) {
        changes.push(`${field} updated`);
      }
    }

    // Display a message indicating what data was updated
    if (changes.length > 0) {
      console.log("Changes: ", changes.join(", "));
      alert(`Changes: ${changes.join(", ")}`);
    } else {
      alert("No changes detected.");
    }

    // Optionally, update the original data to reflect the new values
    setOriginalData({ ...userData });
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
            {[
              ["Name", "name"],
              ["Date of Birth", "dob"],
              ["Location", "location"],
              ["Email", "email"],
              ["Password", "password"],
              ["Contact Number", "contactNumber"],
              ["Professional Summary", "summary"],
              ["Website", "website"],
              ["GitHub", "github"],
              ["LinkedIn", "linkedin"],
              ["X (formerly Twitter)", "twitter"],
              ["Experience", "experience"],
              ["Education", "education"],
              ["Technical Skills", "technicalSkills"],
              ["Soft Skills", "softSkills"],
            ].map(([label, field]) => (
              <tr key={field}>
                <td style={styles.label}>{label}</td>
                <td>
                  {editingField === field ? (
                    <input
                      type={
                        field === "password"
                          ? "password"
                          : field === "dob"
                          ? "date"
                          : "text"
                      }
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
            <tr>
              <td colSpan="2">
                <button style={styles.saveButton} onClick={handleSave}>
                  Save Changes
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#121212",
  },
  profileHeader: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #333",
    paddingBottom: "10px",
    marginBottom: "20px",
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
    padding: "20px",
    borderRadius: "8px",
    flexGrow: 1,
  },
  table: { width: "100%", borderCollapse: "separate", borderSpacing: "0 15px" },
  label: {
    fontWeight: "bold",
    padding: "10px 0",
    width: "200px",
    display: "inline-block",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#121212",
    color: "white",
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
    borderRadius: "5px",
  },
};

export default Profile;
