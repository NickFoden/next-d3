import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>Css</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="hero">
        <h1 className="title">Next D3</h1>
      </div>
      <h2>Css</h2>
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
