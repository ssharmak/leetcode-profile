import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceGraph = () => {
  // Sample data: Points earned & time taken (in minutes) per question
  const performanceData = [
    { question: "Array Sorting Challenge", points: 10, time: 5 },
    { question: "Binary Search Implementation", points: 20, time: 12 },
    { question: "Graph Traversal (BFS & DFS)", points: 40, time: 20 },
    { question: "Dynamic Programming - Knapsack", points: 50, time: 25 },
    { question: "SQL Joins & Optimization", points: 15, time: 10 },
    { question: "String Manipulation in Python", points: 10, time: 6 },
  ];

  // Extract labels (Question Names), points, and time taken
  const labels = performanceData.map((item) => item.question);
  const points = performanceData.map((item) => item.points);
  const timeTaken = performanceData.map((item) => item.time);

  // Define chart data
  const chartData = {
    labels,
    datasets: [
      {
        label: "Points Earned",
        data: points,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
      },
      {
        label: "Time Taken (min)",
        data: timeTaken,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.3,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Performance Graph" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div style={styles.container}>
      <h2>Performance Analysis</h2>
      <p>This graph shows your points earned and time taken per question.</p>
      <div style={styles.chartContainer}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#1e1e1e",
    borderRadius: "8px",
    color: "white",
    maxWidth: "700px",
    margin: "0 auto",
    textAlign: "center",
  },
  chartContainer: {
    width: "100%",
    height: "400px",
  },
};

export default PerformanceGraph;
