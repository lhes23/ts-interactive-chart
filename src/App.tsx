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
        <div>
          {sampleData.map((data) => {
            return (
              <button
                id={data.categoryId}
                onClick={dataHandler}
                className="btnStyle"
              >
                {data.categoryId}
              </button>
            );
          })}
        </div>
        <div>
          <Plot
            data={[{ type: "bar", x: selectData?.x, y: selectData?.y }]}
            layout={{ width: 600, height: 300, title: "Interactive Chart" }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
