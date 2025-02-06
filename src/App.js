import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Points from "./components/Points";
import Account from "./components/Account";
import Lab from "./components/Lab";
import Notifications from "./components/Notifications";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("Basic Info");

  return (
    <div style={styles.app}>
      <Sidebar
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <div style={styles.contentContainer}>
        {selectedSection === "Basic Info" && <Profile />}
        {selectedSection === "Points" && <Points />}
        {selectedSection === "Account" && <Account />}
        {selectedSection === "Lab" && <Lab />}
        {selectedSection === "Notifications" && <Notifications />}
      </div>
    </div>
  );
};

const styles = {
  app: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#121212", // Set the same background color for the whole screen
    color: "white",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#121212", // Match the content section's background with the screen
    padding: "20px",
  },
};

export default App;
