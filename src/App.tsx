import React, { useState } from "react";
import "./App.css";
import Plot from "react-plotly.js";
import { IData, sampleData } from "./data";

function App() {
  const [selectData, setSelectData] = useState<IData>(sampleData[0]);

  const dataHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    sampleData.map((data) => {
      if (data.categoryId === e.currentTarget.id) {
        setSelectData({ categoryId: e.currentTarget.id, x: data.x, y: data.y });
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interactive Chart</h1>
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
          <Plot
            data={[{ type: "bar", x: selectData?.x, y: selectData?.y }]}
            layout={{ title: "Interactive Chart" }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
