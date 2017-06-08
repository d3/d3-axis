var fs = require("fs"),
    path = require("path"),
    tape = require("tape"),
    jsdom = require("jsdom"),
    d3 = Object.assign({}, require("d3-scale"), require("d3-selection"), require("../"));

tape("axisLeft(scale) has the expected defaults", function(test) {
  var s = d3.scaleLinear(),
      a = d3.axisLeft(s);
  test.equal(a.scale(), s);
  test.deepEqual(a.tickArguments(), []);
  test.equal(a.tickValues(), null);
  test.equal(a.tickFormat(), null);
  test.equal(a.tickSize(), 6);
  test.equal(a.tickSizeInner(), 6);
  test.equal(a.tickSizeOuter(), 6);
  test.equal(a.tickPadding(), 3);
  test.end();
});

tape("axis.ticks(arguments…) sets the tick arguments", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).ticks(20);
  test.deepEqual(a.tickArguments(), [20]);
  a.ticks();
  test.deepEqual(a.tickArguments(), []);
  test.end();
});

tape("axis.tickArguments(null) sets the tick arguments to the empty array", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).tickArguments(null);
  test.deepEqual(a.tickArguments(), []);
  test.end();
});

tape("axis.tickArguments() makes a defensive copy of the tick arguments", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).tickArguments([20]),
      v = a.tickArguments();
  v.push(10);
  test.deepEqual(a.tickArguments(), [20]);
  test.end();
});

tape("axis.tickValues(null) clears any explicitly-set tick values", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).tickValues([1, 2, 3]);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  a.tickValues([]);
  test.deepEqual(a.tickValues(), []);
  a.tickValues(null);
  test.equal(a.tickValues(), null);
  test.end();
});

tape("axis.tickValues(values) sets the tick values explicitly", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).tickValues([1, 2, 3]);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  test.end();
});

tape("axis.tickValues(values) makes a defensive copy of the specified tick values", function(test) {
  var v = [1, 2, 3],
      a = d3.axisLeft(d3.scaleLinear()).tickValues(v);
  v.push(4);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  test.end();
});

tape("axis.tickValues() makes a defensive copy of the tick values", function(test) {
  var a = d3.axisLeft(d3.scaleLinear()).tickValues([1, 2, 3]),
      v = a.tickValues();
  v.push(4);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  test.end();
});

tape("axisLeft(selection) produces the expected result", function(test) {
  var bodyActual = (new jsdom.JSDOM("<!DOCTYPE html><svg><g></g></svg>")).window.document.body,
      bodyExpected = (new jsdom.JSDOM(file("axis-left.html"))).window.document.body;
  d3.select(bodyActual).select("g").call(d3.axisLeft(d3.scaleLinear()));
  test.equal(bodyActual.outerHTML, bodyExpected.outerHTML);
  test.end();
});

tape("axisLeft.scale(nonNumericRangeScale)(selection) produces the expected result", function(test) {
  var bodyActual = (new jsdom.JSDOM("<!DOCTYPE html><svg><g></g></svg>")).window.document.body,
      bodyExpected = (new jsdom.JSDOM(file("axis-left-500.html"))).window.document.body;
  d3.select(bodyActual).select("g").call(d3.axisLeft(d3.scaleLinear().range([0, "500"])));
  test.equal(bodyActual.outerHTML, bodyExpected.outerHTML);
  test.end();
});

function file(file) {
  return fs.readFileSync(path.join(__dirname, file), "utf8").replace(/\n\s*/mg, "");
}
