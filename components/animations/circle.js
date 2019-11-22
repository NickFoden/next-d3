import * as d3 from "d3";

const animateCircle = () => {
  const cool = d3
    .select("#circle2")
    .attr("cx", 50)
    .style("fill", "cornflowerblue")
    .transition()
    .delay(500)
    .duration(2000)
    .ease(d3.easeBounce)
    .attr("cx", 500)
    .transition()
    .duration(1000)
    .ease(d3.easeElasticInOut)
    .style("fill", "lavender")
    .transition()
    .duration(1000)
    .ease(d3.easeBounceOut)
    .attr("cx", 50)
    .style("fill", "cornflowerblue");
};
export default animateCircle;
