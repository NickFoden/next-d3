import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import drawBars from "../components/charts/ChartFour";
import drawLineChart from "../components/charts/ChartOne";
import drawScatterChart from "../components/charts/ChartTwo";
import drawBarChart from "../components/charts/ChartThree";

const Home = () => {
  useEffect(() => {
    drawLineChart();
    drawScatterChart();
    drawBarChart();
    drawBars();
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="hero">
        <h1 className="title">Next D3</h1>
      </div>
      <h2>Updated Bar</h2>
      <div id="wrapper4"></div>
      <div id="button4"></div>
      <h2>Histograms</h2>
      <div id="wrapper3"></div>
      <h2>Dew Point X Relative Humidity</h2>
      <div id="wrapper2"></div>
      <h2>NYC High Temps 2019 Chart</h2>
      <div id="wrapper1"></div>
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 20px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title {
          text-align: center;
        }
        h2 {
          margin-left: 25px;
        }
        .bin rect {
          fill: cornflowerblue;
          transition: height 1s ease-out, y 1s ease-out;
        }

        .bin text {
          text-anchor: middle;
          fill: darkgrey;
          font-size: 12px;
          font-family: sans-serif;
          transition: transform 1s ease-out;
        }

        .mean {
          stroke: maroon;
          stroke-dasharray: 2px 4px;
          transition: transform 1s ease-out;
        }

        .x-axis-label {
          fill: black;
          font-size: 1.4em;
          text-transform: capitalize;
        }

        body {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2em;
        }

        button {
          font-size: 1.2em;
          margin-left: 1em;
          padding: 0.5em 1em;
          appearance: none;
          -webkit-appearance: none;
          background: darkseagreen;
          color: white;
          border: none;
          box-shadow: 0 5px 0 0 seagreen;
          border-radius: 6px;
          font-weight: 600;
          outline: none;
          cursor: pointer;
          transition: all 0.1s ease-out;
        }

        button:hover,
        button:focus {
          background: #73b173;
          box-shadow: 0 4px 0 0 seagreen;
          transform: translateY(1px);
        }

        button:hover:active,
        button:focus:active,
        button:active {
          box-shadow: 0 1px 0 0 seagreen;
          transform: translateY(4px);
        }
      `}</style>
    </div>
  );
};

export default Home;
