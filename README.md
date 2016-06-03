# d3-axis

The axis component renders human-readable reference marks for [scales](https://github.com/d3/d3-scale). This alleviates one of the more tedious tasks in visualizing data.

## Installing

If you use NPM, `npm install d3-axis`. Otherwise, download the [latest release](https://github.com/d3/d3-axis/releases/latest). You can also load directly from [d3js.org](https://d3js.org), either as a [standalone library](https://d3js.org/d3-axis.v0.3.min.js) or as part of [D3 4.0](https://github.com/d3/d3). (Some dependencies are optional.) AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3_axis` global is exported:

```html
<script src="https://d3js.org/d3-array.v0.7.min.js"></script>
<script src="https://d3js.org/d3-collection.v0.2.min.js"></script>
<script src="https://d3js.org/d3-color.v0.4.min.js"></script>
<script src="https://d3js.org/d3-format.v0.5.min.js"></script>
<script src="https://d3js.org/d3-interpolate.v0.8.min.js"></script>
<script src="https://d3js.org/d3-time.v0.2.min.js"></script>
<script src="https://d3js.org/d3-time-format.v0.3.min.js"></script>
<script src="https://d3js.org/d3-scale.v0.7.min.js"></script>
<script src="https://d3js.org/d3-selection.v0.7.min.js"></script>
<script src="https://d3js.org/d3-dispatch.v0.4.min.js"></script>
<script src="https://d3js.org/d3-ease.v0.7.min.js"></script>
<script src="https://d3js.org/d3-timer.v0.4.min.js"></script>
<script src="https://d3js.org/d3-transition.v0.2.min.js"></script>
<script src="https://d3js.org/d3-axis.v0.3.min.js"></script>
<script>

var axis = d3_axis.axisLeft(scale);

</script>
```

[Try d3-axis in your browser.](https://tonicdev.com/npm/d3-axis)

## API Reference

Regardless of orientation, axes are always rendered at the origin. To change the position of the axis with respect to the chart, specify a [transform attribute](http://www.w3.org/TR/SVG/coords.html#TransformAttribute) on the containing element. For example:

```js
d3.select("body").append("svg")
    .attr("class", "axis")
    .attr("width", 1440)
    .attr("height", 30)
  .append("g")
    .attr("transform", "translate(0,30)")
    .call(axis);
```

Once created, the orientation of an axis is fixed. To change the orientation, remove the old axis and create a new axis.

<a name="axisTop" href="#axisTop">#</a> d3.<b>axisTop</b>(<i>scale</i>)

Constructs a new top-oriented axis generator for the given [scale](https://github.com/d3/d3-scale), with empty [tick arguments](#axis_ticks), a [tick size](#axis_tickSize) of 6 and [padding](#axis_tickPadding) of 3. In this orientation, ticks are drawn above the horizontal domain path.

<a name="axisRight" href="#axisRight">#</a> d3.<b>axisRight</b>(<i>scale</i>)

Constructs a new right-oriented axis generator for the given [scale](https://github.com/d3/d3-scale), with empty [tick arguments](#axis_ticks), a [tick size](#axis_tickSize) of 6 and [padding](#axis_tickPadding) of 3. In this orientation, ticks are drawn to the right of the vertical domain path.

<a name="axisBottom" href="#axisBottom">#</a> d3.<b>axisBottom</b>(<i>scale</i>)

Constructs a new bottom-oriented axis generator for the given [scale](https://github.com/d3/d3-scale), with empty [tick arguments](#axis_ticks), a [tick size](#axis_tickSize) of 6 and [padding](#axis_tickPadding) of 3. In this orientation, ticks are drawn below the horizontal domain path.

<a name="axisLeft" href="#axisLeft">#</a> d3.<b>axisLeft</b>(<i>scale</i>)

Constructs a new left-oriented axis generator for the given [scale](https://github.com/d3/d3-scale), with empty [tick arguments](#axis_ticks), a [tick size](#axis_tickSize) of 6 and [padding](#axis_tickPadding) of 3. In this orientation, ticks are drawn to the left of the vertical domain path.

<a name="_axis" href="#_axis">#</a> <i>axis</i>(<i>context</i>)

Render the axis to the given *context*, which may be either a [selection](https://github.com/d3/d3-selection) of SVG containers (either SVG or G elements) or a corresponding [transition](https://github.com/d3/d3-transition).

<a name="axis_scale" href="#axis_scale">#</a> <i>axis</i>.<b>scale</b>([<i>scale</i>])

If *scale* is specified, sets the scale and returns the axis. If *scale* is not specified, returns the current scale.

<a name="axis_ticks" href="#axis_ticks">#</a> <i>axis</i>.<b>ticks</b>(<i>arguments…</i>)

A convenience function for setting the [tick arguments](#axis_tickArguments). For example, this:

```js
axis.ticks(10);
```

Is equivalent to:

```js
axis.tickArguments([10]);
```

<a name="axis_tickArguments" href="#axis_tickArguments">#</a> <i>axis</i>.<b>tickArguments</b>([<i>arguments</i>])

If *arguments* are specified, stores the specified arguments for subsequent use in generating ticks and returns the axis. The arguments will later be passed to [*scale*.ticks](https://github.com/d3/d3-scale#continuous_ticks) to generate tick values (unless tick values are specified explicitly via [*axis*.tickValues](#axis_tickValues)). These arguments are also passed to the scale’s [tickFormat method](https://github.com/d3/d3-scale#continuous_tickFormat) to generate a tick format (unless a tick format is specified explicitly via [*axis*.tickFormat](#axis_tickFormat)). If no arguments are specified, returns the current tick arguments, which defaults to the empty array.

Suitable arguments depends on the associated scale: for a [quantitative scale](https://github.com/d3/d3-scale#continuous-scales), you might specify a suggested tick count such as `[20]` or a tick count and a tick format specifier such as `[10, "$,.2f"]`; for a [time scale](https://github.com/d3/d3-scale#time-scales), a [time interval](https://github.com/d3/d3-time#intervals) such as `[d3.timeMinute, 15]` might be appropriate.

<a name="axis_tickValues" href="#axis_tickValues">#</a> <i>axis</i>.<b>tickValues</b>([<i>values</i>])

If a *values* array is specified, the specified values are used for ticks rather than using the scale’s automatic tick generator. If *values* is null, clears any previously-set explicit tick values and reverts back to the scale’s tick generator. If *values* is not specified, returns the current tick values, which defaults to null. For example, to generate ticks at specific values:

```js
var xAxis = d3.axisBottom(x)
    .tickValues([1, 2, 3, 5, 8, 13, 21]);
```

The explicit tick values take precedent over the tick arguments set by [*axis*.tickArguments](#axis_tickArguments). However, any tick arguments will still be passed to the scale’s [tickFormat](#axis_tickFormat) function if a tick format is not also set.

<a name="axis_tickFormat" href="#axis_tickFormat">#</a> <i>axis</i>.<b>tickFormat</b>([<i>format</i>])

If *format* is specified, sets the tick format function and returns the axis. If *format* is not specified, returns the current format function, which defaults to null. A null format indicates that the scale’s default formatter should be used, which is generated by calling [*scale*.tickFormat](https://github.com/d3/d3-scale#continuous_tickFormat). In this case, the arguments specified by [*axis*.tickArguments](#axis_tickArguments) are likewise passed to *scale*.tickFormat.

See [d3-format](https://github.com/d3/d3-format) and [d3-time-format](https://github.com/d3/d3-time-format) for help creating formatters. For example, to display integers with comma-grouping for thousands:

```js
axis.tickFormat(d3.format(",.0f"));
```

More commonly, a format specifier is passed to [*axis*.ticks](#axis_ticks):

```js
axis.ticks(10, ",f");
```

This has the advantage of setting the format precision automatically based on the tick interval.

<a name="axis_tickSize" href="#axis_tickSize">#</a> <i>axis</i>.<b>tickSize</b>([<i>size</i>])

If *size* is specified, sets the [inner](#axis_tickSizeInner) and [outer](#axis_tickSizeOuter) tick size to the specified value and returns the axis. If *size* is not specified, returns the current inner tick size, which defaults to 6.

<a name="axis_tickSizeInner" href="#axis_tickSizeInner">#</a> <i>axis</i>.<b>tickSizeInner</b>([<i>size</i>])

If *size* is specified, sets the inner tick size to the specified value and returns the axis. If *size* is not specified, returns the current inner tick size, which defaults to 6. The inner tick size controls the length of the tick lines, offset from the native position of the axis.

<a name="axis_tickSizeOuter" href="#axis_tickSizeOuter">#</a> <i>axis</i>.<b>tickSizeOuter</b>([<i>size</i>])

If *size* is specified, sets the outer tick size to the specified value and returns the axis. If *size* is not specified, returns the current outer tick size, which defaults to 6. The outer tick size controls the length of the square ends of the domain path, offset from the native position of the axis. Thus, the “outer ticks” are not actually ticks but part of the domain path, and their position is determined by the associated scale’s domain extent. Thus, outer ticks may overlap with the first or last inner tick. An outer tick size of 0 suppresses the square ends of the domain path, instead producing a straight line.

<a name="axis_tickPadding" href="#axis_tickPadding">#</a> <i>axis</i>.<b>tickPadding</b>([<i>padding</i>])

If *padding* is specified, sets the padding to the specified value in pixels and returns the axis. If *padding* is not specified, returns the current padding which defaults to 3 pixels.
