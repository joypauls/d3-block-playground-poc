import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function BasicBlockStack() {
  const d3ref = useRef(null);

  useEffect(() => {
    if (d3ref.current) {
      const svg = d3
        .select(d3ref.current)
        .attr("width", 400)
        .attr("height", 400)
        .style("background-color", "#f0f0f0");

      const data = [1, 2, 3, 4, 5];
      const rectHeight = 50;

      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", 50)
        .attr("y", (d, i) => i * rectHeight)
        .attr("width", 50)
        .attr("height", rectHeight)
        .attr("fill", "steelblue")
        .attr("stroke", "black")
        .attr("stroke-width", 2);
    }
  }, []);

  return (
    <div>
      <svg ref={d3ref}></svg>
    </div>
  );
}

export default BasicBlockStack;
