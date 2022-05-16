import {scaleLinear} from "d3-scale";
import {create} from "d3-selection";
import {axisLeft} from "../src/index.js";

export function axisLeftScaleLinear() {
  const svg = create("svg");
  svg.append("g").call(axisLeft(scaleLinear()));
  return svg.node();
}

export function axisLeftScaleLinearNonNumericRange() {
  const svg = create("svg");
  svg.append("g").call(axisLeft(scaleLinear().range([0, "500"])));
  return svg.node();
}

export function axisLeftTickSizeFunction() {
  const scale = scaleLinear([0, 10], [10, 140]);
  const svg = create("svg");
  svg.append("g")
    .attr("transform", "translate(20, 0)")
    .call(axisLeft(scale).tickSize(function(d, i) { return i * 2 }));
  return svg.node();
}
