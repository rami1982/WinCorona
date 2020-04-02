import React, { useState, useEffect } from "react";
import "../HomePage/homePage.css";

import MainBanner from "./mainBanner";
import Statistics from "./Statistics";
import Symptoms from "./Symptoms";

import logo from "./assets/images/01.png";

const HomePage = () => {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [active, setActive] = useState(0);

  const thousands_separators = num => {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://covid19.mathdro.id/api");
      const data = await response.json();
      console.log(data);
      setConfirmed(data.confirmed.value);
      setRecovered(data.recovered.value);
      setDeaths(data.deaths.value);
      setActive(confirmed - (recovered + deaths));
    }
    fetchData();
  });

  return (
    <div>
      <MainBanner confirmed={thousands_separators(confirmed)} />
      <Statistics
        active={thousands_separators(active)}
        recovered={thousands_separators(recovered)}
        deaths={thousands_separators(deaths)}
      />
      <Symptoms />
    </div>
  );
};

export default HomePage;
