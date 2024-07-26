import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { randomIntArray } from "./utils/random";

const pallette = ["#908FFF", "#FDC954", "#2FCEA2", "#F37F7D"];
const fullPallette = pallette.concat(pallette, pallette);

function AnimatedStacks() {
  const d3ref = useRef(null);

  useEffect(() => {
    if (d3ref.current) {
      const svgWidth = 700;
      const svgHeight = 350;
      const svg = d3
        .select(d3ref.current)
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .style("background-color", "#ffffff");
      // .style("background-color", "#f3f3f3");

      const rectWidth = 50;
      const rectHeight = 50;
      const numStacks = 12;
      const totalRectWidth = numStacks * rectWidth;
      const bottomPadding = 10;
      const padding = (svgWidth - totalRectWidth) / 2;
      // const spacing = (svgWidth - totalRectWidth) / (numStacks + 1)
      const spacing = 0;
      // const numStacks = data.length;

      // generate data for the stacks (# of blocks)
      const stackSizes = randomIntArray(1, 6, numStacks);
      const data = stackSizes.map((d, i) => ({
        size: d,
        color: fullPallette[i],
      }));
      console.log(data);

      const groups = svg
        .selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr(
          "transform",
          (d, i) =>
            `translate(${padding + spacing + i * (rectWidth + spacing)}, 0)`
        );

      groups
        .selectAll("rect")
        .data((d) => d3.range(d.size).map(() => d.color))
        .enter()
        .append("rect")
        .attr("x", 0)
        .attr("y", -2 * rectHeight) // Start position above the SVG canvas
        .attr("width", rectWidth)
        .attr("height", rectHeight)
        .attr("fill", (d) => d)
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .transition()
        .duration(1000)
        .delay((d, i) => i * 200) // Delay for each rectangle to create falling effect
        .ease(d3.easeCubicIn) // Apply the gravity-like easing function
        .attr("y", (d, i) => svgHeight - bottomPadding - (i + 1) * rectHeight); // End position at the bottom of the stack
    }
  }, []);

  return (
    <div>
      <svg ref={d3ref}></svg>
    </div>
  );
}

export default AnimatedStacks;
