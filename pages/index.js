import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import drawLineChart from "../components/charts/ChartOne";

const Home = () => {
  useEffect(() => {
    drawLineChart();
  });

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
      <h2>NYC High Temps 2019 Chart</h2>
      <div id="wrapper"></div>
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
      `}</style>
    </div>
  );
};

export default Home;
