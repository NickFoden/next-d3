import React, { useEffect } from "react";
import Head from "next/head";
import Nav from "../components/nav";
import animateCircle from "../components/animations/circle";

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
      <button onClick={() => animateCircle()}>Animate the Circle</button>
      <br />
      <br />
      <h4>Hover on the div for 12 steps transition</h4>
      <br />
      <div className="box" />
      <br />
      <br />
      <br />
      <svg>
        <circle cx="50" cy="50" r="50" id="circle2" />
      </svg>
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
        .box {
          background: cornflowerblue;
          height: 100px;
          width: 100px;
          transition: transform 1s steps(12), background 2s ease-out;
        }
        .box:hover {
          background: yellowgreen;
          transform: translateX(30px);
        }
        svg {
          width: 100vw;
        }
      `}</style>
    </div>
  );
};

export default Home;
