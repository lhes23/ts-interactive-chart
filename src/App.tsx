import React, { useState } from "react";
import "./App.css";
// import Plot from "react-plotly.js";
import { IData, sampleData } from "./data";
import BarChart from "./components/BarChart";

function App() {
  // const [selectData, setSelectData] = useState<IData>(sampleData[0]);

  const [dataSetData, setDataSetData] = useState<number[]>([]);

  const dataHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    // sampleData.map((data) => {
    //   if (data.categoryId === e.currentTarget.id) {
    //     setSelectData({ categoryId: e.currentTarget.id, x: data.x, y: data.y });
    //   }
    // });

    sampleData.map((data) => {
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
        {sampleData.map((data) => {
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
        <div style={{ width: "80%" }}>
          <BarChart dataSets={dataSetData} />
        </div>
      </div>
    </div>
  );
}

export default App;
