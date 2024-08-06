import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
  datasets: [
    {
      label: "Activity",
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 15000, 3490, 2390, 4000],
      backgroundColor: "blue",
      borderRadius: 10,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#888888",
      },
    },
    y: {
      grid: {
        display: true,
        color: "#444444",
      },
      ticks: {
        color: "#888888",
      },
    },
  },
};

const CustomBarChart = () => {
  return (
    <>
      <Bar data={data} options={options} height={180}/>
    </>
  );
};

export default CustomBarChart;
