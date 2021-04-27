import assert from "assert";
import * as d3 from "../src/index.js";
import {readFileSync} from "fs";
import path from "path";
import jsdom from "jsdom";
import {select} from "d3-selection";
import {scaleLinear} from "d3-scale";

it("axisLeft(scale) has the expected defaults", () => {
  const s = scaleLinear(),
      a = d3.axisLeft(s);
  assert.strictEqual(a.scale(), s);
  assert.deepStrictEqual(a.tickArguments(), []);
  assert.strictEqual(a.tickValues(), null);
  assert.strictEqual(a.tickFormat(), null);
  assert.strictEqual(a.tickSize(), 6);
  assert.strictEqual(a.tickSizeInner(), 6);
  assert.strictEqual(a.tickSizeOuter(), 6);
  assert.strictEqual(a.tickPadding(), 3);
});

it("axis.ticks(arguments…) sets the tick arguments", () => {
  const a = d3.axisLeft(scaleLinear()).ticks(20);
  assert.deepStrictEqual(a.tickArguments(), [20]);
  a.ticks();
  assert.deepStrictEqual(a.tickArguments(), []);
});

it("axis.tickArguments(null) sets the tick arguments to the empty array", () => {
  const a = d3.axisLeft(scaleLinear()).tickArguments(null);
  assert.deepStrictEqual(a.tickArguments(), []);
});

it("axis.tickArguments() makes a defensive copy of the tick arguments", () => {
  const a = d3.axisLeft(scaleLinear()).tickArguments([20]),
      v = a.tickArguments();
  v.push(10);
  assert.deepStrictEqual(a.tickArguments(), [20]);
});

it("axis.tickValues(null) clears any explicitly-set tick values", () => {
  const a = d3.axisLeft(scaleLinear()).tickValues([1, 2, 3]);
  assert.deepStrictEqual(a.tickValues(), [1, 2, 3]);
  a.tickValues([]);
  assert.deepStrictEqual(a.tickValues(), []);
  a.tickValues(null);
  assert.strictEqual(a.tickValues(), null);
});

it("axis.tickValues(values) sets the tick values explicitly", () => {
  const a = d3.axisLeft(scaleLinear()).tickValues([1, 2, 3]);
  assert.deepStrictEqual(a.tickValues(), [1, 2, 3]);
});

it("axis.tickValues(values) makes a defensive copy of the specified tick values", () => {
  const v = [1, 2, 3],
      a = d3.axisLeft(scaleLinear()).tickValues(v);
  v.push(4);
  assert.deepStrictEqual(a.tickValues(), [1, 2, 3]);
});

it("axis.tickValues() makes a defensive copy of the tick values", () => {
  const a = d3.axisLeft(scaleLinear()).tickValues([1, 2, 3]),
      v = a.tickValues();
  v.push(4);
  assert.deepStrictEqual(a.tickValues(), [1, 2, 3]);
});

it("axisLeft(selection) produces the expected result", () => {
  const bodyActual = (new jsdom.JSDOM("<!DOCTYPE html><svg><g></g></svg>")).window.document.body,
      bodyExpected = (new jsdom.JSDOM(file("axis-left.html"))).window.document.body;
  select(bodyActual).select("g").call(d3.axisLeft(scaleLinear()));
  assert.strictEqual(bodyActual.outerHTML, bodyExpected.outerHTML);
});

it("axisLeft.scale(nonNumericRangeScale)(selection) produces the expected result", () => {
  const bodyActual = (new jsdom.JSDOM("<!DOCTYPE html><svg><g></g></svg>")).window.document.body,
      bodyExpected = (new jsdom.JSDOM(file("axis-left-500.html"))).window.document.body;
  select(bodyActual).select("g").call(d3.axisLeft(scaleLinear().range([0, "500"])));
  assert.strictEqual(bodyActual.outerHTML, bodyExpected.outerHTML);
});

function file(file) {
  return readFileSync(path.join("./test", file), "utf8").replace(/\n\s*/mg, "");
}
