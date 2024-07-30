import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const ContinuousAnimatedStacks = () => {
  const d3Container = useRef(null);
  const [data, setData] = useState([
    { count: 3, color: "steelblue" },
    { count: 5, color: "tomato" },
    { count: 2, color: "goldenrod" },
    { count: 4, color: "mediumseagreen" },
    { count: 6, color: "orchid" },
  ]);
  const [initialAnimation, setInitialAnimation] = useState(true);

  useEffect(() => {
    if (d3Container.current) {
      const svgWidth = 800;
      const svgHeight = 400;
      const svg = d3
        .select(d3Container.current)
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .style("background-color", "#f0f0f0");

      const rectWidth = 50;
      const rectHeight = 50;
      const numStacks = data.length;
      const totalRectWidth = numStacks * rectWidth;
      const spacing = (svgWidth - totalRectWidth) / (numStacks + 1);

      const gravityEase = d3.easeCubicIn; // Using cubic-in easing function for gravity effect

      const drawBlocks = () => {
        const groups = svg.selectAll("g").data(data, (d) => d.color);

        groups
          .enter()
          .append("g")
          .attr(
            "transform",
            (d, i) => `translate(${spacing + i * (rectWidth + spacing)}, 0)`
          )
          .merge(groups)
          .each(function (d, i) {
            const group = d3.select(this);
            const rects = group.selectAll("rect").data(d3.range(d.count));

            rects
              .enter()
              .append("rect")
              .attr("x", 0)
              .attr(
                "y",
                initialAnimation
                  ? -rectHeight
                  : (i, j) => svgHeight - (j + 1) * rectHeight
              ) // Start above SVG only for initial animation
              .attr("width", rectWidth)
              .attr("height", rectHeight)
              .attr("fill", d.color)
              .attr("stroke", "black")
              .attr("stroke-width", 2)
              .merge(rects)
              .transition()
              .duration(1000)
              .delay((d, i) => (initialAnimation ? i * 200 : 0)) // Delay only for initial animation
              .ease(gravityEase) // Apply the gravity-like easing function
              .attr("y", (d, i) => svgHeight - (i + 1) * rectHeight); // End position at the bottom of the stack

            rects.exit().remove();
          });

        groups.exit().remove();
      };

      drawBlocks();

      const updateData = () => {
        setData((prevData) =>
          prevData.map((d) => ({
            ...d,
            count: Math.min(
              6,
              Math.max(1, d.count + (Math.random() > 0.5 ? 1 : -1))
            ), // Ensure count is between 1 and 6
          }))
        );
      };

      const interval = setInterval(() => {
        setInitialAnimation(false); // Disable initial animation flag
        updateData();
        drawBlocks();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [data, initialAnimation]);

  return (
    <div className="App">
      <svg ref={d3Container}></svg>
    </div>
  );
};

export default ContinuousAnimatedStacks;
