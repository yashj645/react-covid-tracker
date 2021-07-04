import React, { useEffect, useState } from "react";
import "./covid.css";
const Covid = () => {
  const [covidData, setCovidData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const data = await res.json();
      setCovidData(data.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div>
      <h1 className="live-heading">🔴 Live</h1>
      <h2 style={{ textAlign: "center" }}>COVID-19 CORONAVIRUS TRACKER</h2>
      <ul>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>OUR</span>
                <span>COUNTRY</span>
              </p>
              <p className="card_total card_small">INDIA</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span>
                <span>RECOVERED</span>
              </p>
              <p className="card_total card_small">{covidData.recovered}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span>
                <span>CONFIRMED</span>
              </p>
              <p className="card_total card_small">{covidData.confirmed}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span>
                <span>DEATHS</span>
              </p>
              <p className="card_total card_small">{covidData.deaths}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>TOTAL</span>
                <span>ACTIVE</span>
              </p>
              <p className="card_total card_small">{covidData.active}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card_main">
            <div className="card_inner">
              <p className="card_name">
                <span>LAST</span>
                <span>UPDATED</span>
              </p>
              <p className="card_total card_small">
                {covidData.lastupdatedtime}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Covid;
