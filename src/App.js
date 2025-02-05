// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Points from "./components/Points";
import Account from "./components/Account";
import Lab from "./components/Lab";
import Privacy from "./components/Privacy";
import Notifications from "./components/Notifications";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("Basic Info");

  return (
    <div style={styles.app}>
      <Sidebar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <div style={styles.profileContainer}>
        {selectedSection === "Basic Info" && <Profile />}
        {selectedSection === "Points" && <Points />}
        {selectedSection === "Account" && <Account />}
        {selectedSection === "Lab" && <Lab />}
        {selectedSection === "Privacy" && <Privacy />}
        {selectedSection === "Notifications" && <Notifications />}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  app: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#121212",
    color: "white",
  },
  profileContainer: {
    flex: 1,
    padding: "20px",
  },
};

export default App;
