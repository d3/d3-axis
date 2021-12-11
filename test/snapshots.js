import {scaleLinear, scaleUtc} from "d3-scale";
import {create} from "d3-selection";
import {utcFormat} from "d3-time-format";
import {axisBottom, axisLeft, axisRight, axisTop} from "../src/index.js";

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

export function axisBottomScaleLinearMultiLine() {
  const x = scaleUtc([new Date(Date.UTC(2000, 4, 1)), new Date(Date.UTC(2002, 10, 1))], [10, 290]);
  const axis = axisBottom(x).tickFormat(utcFormat("%b\n?%Y"));
  const svg = create("svg");
  svg.append("g").call(axis);
  return svg.node();
}

export function axisTopScaleLinearMultiLine() {
  const x = scaleUtc([new Date(Date.UTC(2000, 4, 1)), new Date(Date.UTC(2002, 10, 1))], [10, 290]);
  const axis = axisTop(x).tickFormat(utcFormat("%b\n?%Y"));
  const svg = create("svg");
  svg.append("g").attr("transform", "translate(0,40)").call(axis);
  return svg.node();
}

export function axisLeftScaleLinearMultiLine() {
  const x = scaleUtc([new Date(Date.UTC(2000, 4, 1)), new Date(Date.UTC(2002, 10, 1))], [10, 290]);
  const axis = axisLeft(x).tickFormat(utcFormat("%b\n?%Y"));
  const svg = create("svg");
  svg.append("g").attr("transform", "translate(40,0)").call(axis);
  return svg.node();
}

export function axisRightScaleLinearMultiLine() {
  const x = scaleUtc([new Date(Date.UTC(2000, 4, 1)), new Date(Date.UTC(2002, 10, 1))], [10, 290]);
  const axis = axisRight(x).tickFormat(utcFormat("%b\n?%Y"));
  const svg = create("svg");
  svg.append("g").attr("transform", "translate(40,0)").call(axis);
  return svg.node();
}
