import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const Graph = (props) => {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://covid19.mathdro.id/api");
      const data = await response.json();
      console.log(data);
      setConfirmed(
        data.confirmed.value - (data.recovered.value + data.deaths.value)
      );
      setRecovered(data.recovered.value);
      setDeaths(data.deaths.value);
    }
    fetchData();
  });

  const data = {
    labels: ["Confirmed Cases", "Recovered", "Deaths"],
    datasets: [
      {
        data: [confirmed, recovered, deaths],
        backgroundColor: ["orange", "green", "red"],
        hoverBackgroundColor: ["gray", "gray", "gray"],
      },
    ],
  };

  return (
    <>
      <h3>Worldwide COVID-19 Live Statistics</h3>
      <Doughnut data={data} />
    </>
  );
};

export default Graph;
