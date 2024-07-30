import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const InteractiveGrid = () => {
  const svgRef = useRef();
  const [gridData, setGridData] = useState([]);
  const numRows = 5;
  const numCols = 5;
  const cellSize = 80;
  const padding = 10;

  useEffect(() => {
    const initialGridData = [];
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        initialGridData.push({
          x: col * cellSize,
          y: row * cellSize,
          visible: true,
        });
      }
    }
    setGridData(initialGridData);
  }, []);

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", numCols * cellSize + 2 * padding)
      .attr("height", numRows * cellSize + 2 * padding);

    const updateGrid = () => {
      const squares = svg
        .selectAll("rect.square")
        .data(gridData, (d) => `${d.x}-${d.y}`);

      squares
        .enter()
        .append("rect")
        .attr("class", "square")
        .attr("x", (d) => d.x + padding)
        .attr("y", (d) => d.y + padding)
        .attr("width", cellSize)
        .attr("height", cellSize)
        .attr("fill", "lightblue")
        .attr("stroke", "black")
        .attr("stroke-width", 1)
        .on("mouseover", function (event, d) {
          if (d.visible) d3.select(this).attr("fill", "#FDC954");
        })
        .on("mouseout", function (event, d) {
          if (d.visible) d3.select(this).attr("fill", "lightblue");
        })
        .on("click", function (event, d) {
          event.stopPropagation();
          setGridData((prevGridData) =>
            prevGridData.map((cell) =>
              cell.x === d.x && cell.y === d.y
                ? { ...cell, visible: !cell.visible }
                : cell
            )
          );
        });

      squares
        .attr("x", (d) => d.x + padding)
        .attr("y", (d) => d.y + padding)
        .attr("width", cellSize)
        .attr("height", cellSize)
        .attr("fill", (d) => (d.visible ? "lightblue" : "none"))
        .attr("stroke", (d) => (d.visible ? "black" : "none"));

      squares.exit().remove();
    };

    updateGrid();

    svg.on("click", function (event) {
      const [x, y] = d3.pointer(event);
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      setGridData((prevGridData) =>
        prevGridData.map((cell) =>
          cell.x === col * cellSize && cell.y === row * cellSize
            ? { ...cell, visible: !cell.visible }
            : cell
        )
      );
    });
  }, [gridData]);

  return (
    <div>
      <svg ref={svgRef} style={{ backgroundColor: "#f3f3f3" }}></svg>
    </div>
  );
};

export default InteractiveGrid;
