import React from "react";
import * as d3 from "d3";
import dataset from "../../pages/api/nyc_weather_data.json";

const dateParser = d3.timeParse("%Y-%m-%d");

async function drawLineChart() {
  const yAccessor = d => d.temperatureMax;
  const xAccessor = d => dateParser(d.date);

  let dimensions = {
    width: `${window ? window.innerWidth * 0.9 : "450px"}`,
    height: 400,
    margin: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 60
    }
  };

  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  const wrapper = d3
    .select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );
}

export default drawLineChart;
