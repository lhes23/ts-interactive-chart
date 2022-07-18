import React, { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { months, sampleData } from "../data";
ChartJS.register(...registerables);

const options = {
  maintainAspectRatio: true,
  responsive: true,
};

const BarChart = ({ categoryId }: { categoryId: string }) => {
  const mySampleData = [
    {
      categoryId: "2020",
      data: [
        5000, -17000, 15000, 8000, 20000, -600, 13000, 20000, -9000, 4000,
        17000, -40000,
      ],
    },
    {
      categoryId: "2021",
      data: [
        5000, -17000, 15000, 8000, 20000, -600, 13000, 20000, -9000, 4000,
        17000, -40000,
      ],
    },
    {
      categoryId: "2022",
      data: [
        5000, -17000, 15000, 8000, 20000, -600, 13000, 20000, -9000, 4000,
        17000, -40000,
      ],
    },
  ];

  const [dataSetData, setDataSetData] = useState<number[]>([]);
  useEffect(() => {
    mySampleData.map((data) => {
      if (data.categoryId === categoryId) {
        setDataSetData(data.data);
      }
    });
  }, [categoryId]);

  const data = {
    labels: months,
    datasets: [
      {
        label: "Cashflow",
        data: dataSetData,
        backgroundColor: ["rgba(75, 192, 192, 0.5)"],
        borderColor: ["green"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar data={data} height={200} options={options} />
    </div>
  );
};

export default BarChart;
