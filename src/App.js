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

  return (
    <div style={styles.app}>
      {/* Sidebar for navigation */}
      <Sidebar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />

      {/* Main content area */}
      <div style={styles.contentContainer}>
        {selectedSection === "Basic Info" && <Profile />}
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
    backgroundColor: "#121212", // Consistent dark theme
    color: "white",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#121212",
    padding: "20px",
    overflowY: "auto", // Enables scrolling for long pages
  },
};

export default App;
