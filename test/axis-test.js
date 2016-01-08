var tape = require("tape"),
    axis = require("../");

tape("axis() has the expected defaults", function(test) {
  var a = axis.axis();
  test.deepEqual(a.scale().domain(), [0, 1]);
  test.deepEqual(a.scale().range(), [0, 1]);
  test.equal(a.orient(), axis.axisOrientBottom);
  test.deepEqual(a.tickArguments(), []);
  test.equal(a.tickValues(), null);
  test.equal(a.tickFormat(), null);
  test.equal(a.tickSize(), 6);
  test.equal(a.tickSizeInner(), 6);
  test.equal(a.tickSizeOuter(), 6);
  test.equal(a.tickPadding(), 3);
  test.end();
});

tape("axis.orient(orient) sets the orientation", function(test) {
  var a = axis.axis().orient(axis.axisOrientTop);
  test.equal(a.orient(), axis.axisOrientTop);
  test.end();
});

tape("axis.orient(orient) reverts to bottom for unknown orientations", function(test) {
  var a = axis.axis().orient("fail");
  test.equal(a.orient(), axis.axisOrientBottom);
  a.orient(undefined);
  test.equal(a.orient(), axis.axisOrientBottom);
  test.end();
});

tape("axis.ticks(arguments…) sets the tick arguments", function(test) {
  var a = axis.axis().ticks(20);
  test.deepEqual(a.tickArguments(), [20]);
  a.ticks();
  test.deepEqual(a.tickArguments(), []);
  test.end();
});

tape("axis.tickArguments(null) sets the tick arguments to the empty array", function(test) {
  var a = axis.axis().tickArguments(null);
  test.deepEqual(a.tickArguments(), []);
  test.end();
});

tape("axis.tickArguments() makes a defensive copy of the tick arguments", function(test) {
  var a = axis.axis().tickArguments([20]),
      v = a.tickArguments();
  v.push(10);
  test.deepEqual(a.tickArguments(), [20]);
  test.end();
});

tape("axis.tickValues(null) clears any explicitly-set tick values", function(test) {
  var a = axis.axis().tickValues([1, 2, 3]);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  a.tickValues([]);
  test.deepEqual(a.tickValues(), []);
  a.tickValues(null);
  test.equal(a.tickValues(), null);
  test.end();
});

tape("axis.tickValues(values) sets the tick values explicitly", function(test) {
  var a = axis.axis().tickValues([1, 2, 3]);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  test.end();
});

tape("axis.tickValues(values) makes a defensive copy of the specified tick values", function(test) {
  var v = [1, 2, 3],
      a = axis.axis().tickValues(v);
  v.push(4);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  test.end();
});

tape("axis.tickValues() makes a defensive copy of the tick values", function(test) {
  var a = axis.axis().tickValues([1, 2, 3]),
      v = a.tickValues();
  v.push(4);
  test.deepEqual(a.tickValues(), [1, 2, 3]);
  test.end();
});
