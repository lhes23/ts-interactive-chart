import React, { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { months } from "../data";
ChartJS.register(...registerables);

const BarChart = ({ dataSets }: { dataSets: number[] }) => {
  const options = {
    maintainAspectRatio: true,
    responsive: true,
  };

  const data = {
    labels: months,
    datasets: [
      {
        label: "Cashflow",
        data: dataSets,
        backgroundColor: ["rgba(75, 192, 192, 0.5)"],
        borderColor: ["green"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Bar data={data} height="100%" width="100%" options={options} />
    </>
  );
};

export default BarChart;
