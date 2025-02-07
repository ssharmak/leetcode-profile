import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Points from "./components/Points";
import PerformanceGraph from "./components/PerformanceGraph";
import Account from "./components/Account";
import Lab from "./components/Lab";
import Privacy from "./components/Privacy";
import Notifications from "./components/Notifications";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("Basic Info");
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || "https://via.placeholder.com/100"
  );

  return (
    <div style={styles.app}>
      {/* Profile image in the top-right corner */}
      <div style={styles.profileImageContainer}>
        <img src={profileImage} alt="Profile" style={styles.profileImage} />
      </div>

      <Sidebar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />

      <div style={styles.contentContainer}>
        {selectedSection === "Basic Info" && (
          <Profile setProfileImage={setProfileImage} />
        )}
        {selectedSection === "Points" && <Points />}
        {selectedSection === "Performance" && <PerformanceGraph />}
        {selectedSection === "Account" && <Account />}
        {selectedSection === "Lab" && <Lab />}
        {selectedSection === "Privacy" && <Privacy />}
        {selectedSection === "Notifications" && <Notifications />}
      </div>
    </div>
  );
};

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#121212",
    color: "white",
  },
  profileImageContainer: {
    position: "absolute",
    top: "15px",
    right: "20px",
    zIndex: 1000,
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%", // Makes it round
    border: "2px solid white",
    objectFit: "cover",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#121212",
    padding: "20px",
    overflowY: "auto",
  },
};

export default App;
