import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function BasicStacks() {
  const d3ref = useRef(null);

  useEffect(() => {
    if (d3ref.current) {
      const svgWidth = 800;
      const svgHeight = 400;
      const data = [3, 5, 2, 4, 6]; // Different numbers of squares for each stack
      const rectWidth = 50;
      const rectHeight = 50;
      const numStacks = data.length;
      const totalRectWidth = numStacks * rectWidth;
      const spacing = (svgWidth - totalRectWidth) / (numStacks + 1);

      const svg = d3
        .select(d3ref.current)
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .style("background-color", "#f0f0f0");

      svg
        .selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr(
          "transform",
          (d, i) => `translate(${spacing + i * (rectWidth + spacing)}, 0)`
        )
        .selectAll("rect")
        .data((d) => d3.range(d))
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", (d, i) => svgHeight - (i + 1) * rectHeight)
        .attr("width", rectWidth)
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

export default BasicStacks;