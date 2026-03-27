import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false, // Allows the chart to fill its parent container
  interaction: {
    mode: "index",
    intersect: false, // Makes the tooltip appear even if you hover slightly off the bar
  },
  plugins: {
    legend: {
      display: false, // Hidden for a cleaner look (the parent title usually explains what it is)
    },
    title: {
      display: false, // Removed to avoid redundant titles
    },
    tooltip: {
      backgroundColor: "#0f172a", // Sleek dark tooltip
      titleColor: "#f8fafc",
      bodyColor: "#f8fafc",
      titleFont: {
        family: "'Inter', sans-serif",
        size: 13,
        weight: "600",
      },
      bodyFont: {
        family: "'Inter', sans-serif",
        size: 12,
      },
      padding: 12,
      cornerRadius: 6,
      displayColors: false, // Hides the distracting color square in the tooltip
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            // Adds commas to large numbers (e.g., 1,500.00)
            label += new Intl.NumberFormat("en-IN", {
              maximumFractionDigits: 2,
            }).format(context.parsed.y);
          }
          return label;
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false, // Removes vertical grid lines for a cleaner look
        drawBorder: false, // Removes the bottom axis line
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          size: 11,
        },
        color: "#64748b",
      },
    },
    y: {
      grid: {
        color: "#f1f5f9", // Very faint horizontal grid lines
        drawBorder: false, // Removes the left vertical axis line
      },
      border: {
        display: false,
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif",
          size: 11,
        },
        color: "#64748b",
        padding: 8,
        callback: function (value) {
          // Format large numbers cleanly on the Y-axis (e.g., 5000 -> 5k)
          if (value >= 1000) {
            return value / 1000 + "k";
          }
          return value;
        },
      },
    },
  },
  animation: {
    duration: 800,
    easing: "easeOutQuart", // A very smooth startup animation
  },
};

export function VerticalGraph({ data }) {
  return (
    // The container forces the chart to a specific height, preventing it from growing infinitely
    <div style={{ height: "280px", width: "100%", marginTop: "20px" }}>
      <Bar options={options} data={data} />
    </div>
  );
}