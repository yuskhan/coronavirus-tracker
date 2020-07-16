import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./Graph.module.css";

const Graph = ({ historicalData: { cases, deaths, recovered } }) => {
  const Chart = cases ? (
    <Line
      className={styles.lineGraph}
      data={{
        labels: Object.keys(cases),
        datasets: [
          {
            data: Object.values(cases),
            label: "Total Cases",
            borderColor: "#ffc107",
            fill: true,
          },
          {
            data: Object.values(recovered),
            label: "Recoveries",
            borderColor: "#28a745",
            fill: true,
          },
          {
            data: Object.values(deaths),
            label: "Deaths",
            borderColor: "#dc3545",
            fill: true,
          },
        ],
      }}
      options={{
        legend: {
          labels: {
            fontColor: "white",
          },
        },
      }}
    />
  ) : null;

  return Chart;
};

export default Graph;
