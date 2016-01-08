# d3-axis

…

## Installing

If you use NPM, `npm install d3-axis`. Otherwise, download the [latest release](https://github.com/d3/d3-axis/releases/latest). The released bundle supports AMD, CommonJS, and vanilla environments. Create a custom build using [Rollup](https://github.com/rollup/rollup) or your preferred bundler. You can also load directly from [d3js.org](https://d3js.org):

```html
<script src="https://d3js.org/d3-array.v0.7.min.js"></script>
<script src="https://d3js.org/d3-collection.v0.1.min.js"></script>
<script src="https://d3js.org/d3-color.v0.3.min.js"></script>
<script src="https://d3js.org/d3-format.v0.5.min.js"></script>
<script src="https://d3js.org/d3-interpolate.v0.4.min.js"></script>
<script src="https://d3js.org/d3-time.v0.2.min.js"></script>
<script src="https://d3js.org/d3-time-format.v0.3.min.js"></script>
<script src="https://d3js.org/d3-scale.v0.5.min.js"></script>
<script src="https://d3js.org/d3-selection.v0.5.min.js"></script>
<script src="https://d3js.org/d3-axis.v0.0.min.js"></script>
```

(If you’re not using [time scales](#time), you can omit d3-time and d3-time-format.) In a vanilla environment, a `d3_axis` global is exported. [Try d3-axis in your browser.](https://tonicdev.com/npm/d3-axis)

## API Reference

<a name="axis" href="#axis">#</a> d3.<b>axis</b>()

Constructs a new axis generator with a default [linear scale](https://github.com/d3/d3-scale#linear), [bottom](#axisOrientBottom) orientation, empty [tick arguments](#axis_ticks), a [tick size](#axis_tickSize) of 6 and [tick padding](#axis_tickPadding) of 3.

<a name="_axis" href="#_axis">#</a> <i>axis</i>(<i>selection</i>)

…

<a name="axis_scale" href="#axis_scale">#</a> <i>axis</i>.<b>scale</b>([<i>scale</i>])

…

<a name="axis_orient" href="#axis_orient">#</a> <i>axis</i>.<b>orient</b>([<i>orient</i>])

…

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

…

<a name="axis_tickValues" href="#axis_tickValues">#</a> <i>axis</i>.<b>tickValues</b>([<i>values</i>])

…

<a name="axis_tickFormat" href="#axis_tickFormat">#</a> <i>axis</i>.<b>tickFormat</b>([<i>format</i>])

…

<a name="axis_tickSize" href="#axis_tickSize">#</a> <i>axis</i>.<b>tickSize</b>([<i>size</i>])

…

<a name="axis_tickSizeInner" href="#axis_tickSizeInner">#</a> <i>axis</i>.<b>tickSizeInner</b>([<i>size</i>])

…

<a name="axis_tickSizeOuter" href="#axis_tickSizeOuter">#</a> <i>axis</i>.<b>tickSizeOuter</b>([<i>size</i>])

…

<a name="axis_tickPadding" href="#axis_tickPadding">#</a> <i>axis</i>.<b>tickPadding</b>([<i>padding</i>])

…

### Axis Orientations

For use with [*axis*.orient](#axis_orient).

<a name="axisOrientTop" href="#axisOrientTop">#</a> d3.<b>axisOrientTop</b>

…

<a name="axisOrientRight" href="#axisOrientRight">#</a> d3.<b>axisOrientRight</b>

…

<a name="axisOrientBottom" href="#axisOrientBottom">#</a> d3.<b>axisOrientBottom</b>

…

<a name="axisOrientLeft" href="#axisOrientLeft">#</a> d3.<b>axisOrientLeft</b>

…
