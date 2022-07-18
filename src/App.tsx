import React, { useState } from "react";
import "./App.css";
import { sampleData } from "./data";
import BarChart from "./components/BarChart";

function App() {
  const [dataSetData, setDataSetData] = useState<number[]>([]);

  const dataHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    sampleData.map((data) => {
      if (data.categoryId === e.currentTarget.id) {
        setDataSetData(data.data);
      }
    });
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
        <BarChart dataSets={dataSetData} />
      </div>
    </div>
  );
}

export default App;
