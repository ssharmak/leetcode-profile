import React, { useState } from "react";

const Points = () => {
  // Sample data: Question-wise points breakdown
  const [pointsData] = useState([
    { question: "Array Sorting Challenge", difficulty: "Easy", points: 10 },
    {
      question: "Binary Search Implementation",
      difficulty: "Medium",
      points: 20,
    },
    { question: "Graph Traversal (BFS & DFS)", difficulty: "Hard", points: 40 },
    {
      question: "Dynamic Programming - Knapsack",
      difficulty: "Hard",
      points: 50,
    },
    { question: "SQL Joins & Optimization", difficulty: "Medium", points: 15 },
    {
      question: "String Manipulation in Python",
      difficulty: "Easy",
      points: 10,
    },
  ]);

  // Calculate Total Points Earned
  const totalPoints = pointsData.reduce((acc, item) => acc + item.points, 0);

  return (
    <div style={styles.container}>
      <h2>Points Breakdown</h2>
      <p>
        Total Points Earned: <strong>{totalPoints}</strong>
      </p>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Question</th>
            <th style={styles.th}>Difficulty</th>
            <th style={styles.th}>Points Earned</th>
          </tr>
        </thead>
        <tbody>
          {pointsData.map((item, index) => (
            <tr key={index} style={styles.row}>
              <td style={styles.td}>{item.question}</td>
              <td style={styles.td}>{item.difficulty}</td>
              <td style={styles.td}>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#1e1e1e",
    borderRadius: "8px",
    color: "white",
    maxWidth: "600px",
    margin: "0 auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
    backgroundColor: "#2a2a2a",
    borderRadius: "8px",
  },
  th: {
    backgroundColor: "#444",
    color: "white",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #555",
  },
  row: {
    backgroundColor: "#333",
  },
};

export default Points;
