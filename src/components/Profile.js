import React, { useState, useEffect } from "react";

const Profile = ({ setProfileImage }) => {
  const uniqueUserId = "USER-" + Math.floor(100000 + Math.random() * 900000);

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
    dob: "",
    location: "Your location",
    emailVerified: JSON.parse(localStorage.getItem("emailVerified")) || false,
    contactVerified:
      JSON.parse(localStorage.getItem("contactVerified")) || false,
    profileImage:
      localStorage.getItem("profileImage") || "https://via.placeholder.com/100",
  });

  const [emailOtp, setEmailOtp] = useState("");
  const [contactOtp, setContactOtp] = useState("");
  const [generatedEmailOtp, setGeneratedEmailOtp] = useState(null);
  const [generatedContactOtp, setGeneratedContactOtp] = useState(null);
  const [isEmailVerifying, setIsEmailVerifying] = useState(false);
  const [isContactVerifying, setIsContactVerifying] = useState(false);

  useEffect(() => {
    setProfileImage(userData.profileImage);
  }, [userData.profileImage, setProfileImage]);

  // Handle input changes
  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  // Handle Profile Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserData({ ...userData, profileImage: imageUrl });
      setProfileImage(imageUrl);
      localStorage.setItem("profileImage", imageUrl);
    }
  };

  // Simulate sending OTP to email
  const sendEmailOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedEmailOtp(otp);
    alert(`OTP sent to ${userData.email}: ${otp}`); // Simulated OTP, replace with backend API
    setIsEmailVerifying(true);
  };

  // Verify Email OTP
  const verifyEmailOtp = () => {
    if (emailOtp === generatedEmailOtp?.toString()) {
      setUserData({ ...userData, emailVerified: true });
      localStorage.setItem("emailVerified", true);
      alert("Email verified successfully!");
      setIsEmailVerifying(false);
      setEmailOtp("");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  // Simulate sending OTP to contact number
  const sendContactOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedContactOtp(otp);
    alert(`OTP sent to ${userData.contactNumber}: ${otp}`); // Simulated OTP, replace with backend API
    setIsContactVerifying(true);
  };

  // Verify Contact OTP
  const verifyContactOtp = () => {
    if (contactOtp === generatedContactOtp?.toString()) {
      setUserData({ ...userData, contactVerified: true });
      localStorage.setItem("contactVerified", true);
      alert("Contact number verified successfully!");
      setIsContactVerifying(false);
      setContactOtp("");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.profileHeader}>
        <div style={styles.profilePictureContainer}>
          <label htmlFor="profileUpload">
            <img
              src={userData.profileImage}
              alt="Profile"
              style={styles.profilePicture}
            />
          </label>
          <input
            type="file"
            id="profileUpload"
            accept="image/*"
            style={styles.fileInput}
            onChange={handleImageUpload}
          />
        </div>
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
              ["Password", "password"],
              ["Professional Summary", "summary"],
              ["Website", "website"],
              ["GitHub", "github"],
              ["LinkedIn", "linkedin"],
              ["X (formerly Twitter)", "twitter"],
            ].map(([label, field]) => (
              <tr key={field}>
                <td style={styles.label}>{label}</td>
                <td>
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
                    style={styles.input}
                  />
                </td>
              </tr>
            ))}

            {/* Email Verification */}
            <tr>
              <td style={styles.label}>Email</td>
              <td>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  style={styles.input}
                />
              </td>
              <td>
                {userData.emailVerified ? (
                  <span style={styles.verified}>✅ Verified</span>
                ) : (
                  <button style={styles.verifyButton} onClick={sendEmailOtp}>
                    Send OTP
                  </button>
                )}
              </td>
            </tr>

            {isEmailVerifying && (
              <tr>
                <td style={styles.label}>Enter OTP</td>
                <td>
                  <input
                    type="text"
                    value={emailOtp}
                    onChange={(e) => setEmailOtp(e.target.value)}
                    style={styles.input}
                  />
                </td>
                <td>
                  <button style={styles.verifyButton} onClick={verifyEmailOtp}>
                    Verify
                  </button>
                </td>
              </tr>
            )}

            {/* Contact Verification */}
            <tr>
              <td style={styles.label}>Contact Number</td>
              <td>
                <input
                  type="text"
                  value={userData.contactNumber}
                  onChange={(e) =>
                    handleChange("contactNumber", e.target.value)
                  }
                  style={styles.input}
                />
              </td>
              <td>
                {userData.contactVerified ? (
                  <span style={styles.verified}>✅ Verified</span>
                ) : (
                  <button style={styles.verifyButton} onClick={sendContactOtp}>
                    Send OTP
                  </button>
                )}
              </td>
            </tr>

            {isContactVerifying && (
              <tr>
                <td style={styles.label}>Enter OTP</td>
                <td>
                  <input
                    type="text"
                    value={contactOtp}
                    onChange={(e) => setContactOtp(e.target.value)}
                    style={styles.input}
                  />
                </td>
                <td>
                  <button
                    style={styles.verifyButton}
                    onClick={verifyContactOtp}
                  >
                    Verify
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "20px", backgroundColor: "#121212", color: "white" },
  profileHeader: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #333",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  profilePicture: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid white",
  },
  verified: { color: "#4CAF50", fontWeight: "bold" },
  verifyButton: {
    backgroundColor: "#fdd835",
    padding: "5px 10px",
    cursor: "pointer",
  },
  input: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#121212",
    color: "white",
  },
};

export default Profile;
