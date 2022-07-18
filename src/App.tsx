import React, { useState } from "react";
import "./App.css";
// import Plot from "react-plotly.js";
import { IData, sampleData } from "./data";
import BarChart from "./components/BarChart";

const mySampleData = [
  {
    categoryId: "2020",
    data: [
      5000, -17000, 15000, 8000, 20000, -600, 13000, 20000, -9000, 4000, 17000,
      -40000,
    ],
  },
  {
    categoryId: "2021",
    data: [
      -200000, -50000, 3000, 1000, -13000, 338, 3500, 19000, 18000, -5000,
      17000, 117000,
    ],
  },
  {
    categoryId: "2022",
    data: [-70, -26000, -33000, -680, -18000, 1500, 30000],
  },
];

function App() {
  const [selectData, setSelectData] = useState<IData>(sampleData[0]);

  const [dataSetData, setDataSetData] = useState<number[]>([]);

  const dataHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // sampleData.map((data) => {
    //   if (data.categoryId === e.currentTarget.id) {
    //     setSelectData({ categoryId: e.currentTarget.id, x: data.x, y: data.y });
    //   }
    // });

    mySampleData.map((data) => {
      if (data.categoryId === e.currentTarget.id) {
        setDataSetData(data.data);
      }
    });
    console.log(e.currentTarget.id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Chart</h1>
      </header>
      <div className="btnContainer">
        {mySampleData.map((data) => {
          return (
            <button
              id={data.categoryId}
              onClick={dataHandler}
              className="btnStyle"
              key={data.categoryId}
            >
              {data.categoryId}
            </button>
          );
        })}
      </div>
      <div className="chartContainer">
        <div style={{ width: "50%" }}>
          <BarChart dataSets={dataSetData} />
        </div>
      </div>
    </div>
  );
}

export default App;
