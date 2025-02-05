// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ selectedSection, setSelectedSection }) => {
  const menuItems = [
    { name: "Basic Info", icon: "ℹ️" },
    { name: "Points", icon: "💰" },
    { name: "Account", icon: "⚙️" },
    { name: "Lab", icon: "🔬" },
    { name: "Privacy", icon: "🔒" },
    { name: "Notifications", icon: "🔔" },
  ];

  return (
    <div style={styles.sidebar}>
      {menuItems.map((item) => (
        <button
          key={item.name}
          style={
            selectedSection === item.name ? styles.activeButton : styles.button
          }
          onClick={() => setSelectedSection(item.name)}
        >
          <span style={{ marginRight: "10px" }}>{item.icon}</span> {item.name}
        </button>
      ))}
    </div>
  );
};

const styles = {
  sidebar: {
    width: "220px",
    backgroundColor: "#1e1e1e",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    background: "none",
    color: "white",
    fontSize: "16px",
    border: "none",
    padding: "10px",
    textAlign: "left",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "background 0.2s",
  },
  activeButton: {
    backgroundColor: "#2a3d50",
    borderRadius: "5px",
    color: "white",
    fontSize: "16px",
    border: "none",
    padding: "10px",
    textAlign: "left",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
};

export default Sidebar;
