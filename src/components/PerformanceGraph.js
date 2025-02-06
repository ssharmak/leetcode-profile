import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const PerformanceGraph = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Performance Score",
        data: [20, 50, 80, 100],
        borderColor: "yellow",
        borderWidth: 2,
      },
    ],
  };

  return <Line data={data} />;
};

export default PerformanceGraph;
