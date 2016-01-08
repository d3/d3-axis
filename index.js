import {
  orientTop,
  orientRight,
  orientBottom,
  orientLeft
} from "./src/axis";

export {
  default as axis
} from "./src/axis";

// https://github.com/rollup/rollup/issues/438
export var axisOrientTop = orientTop;
export var axisOrientRight = orientRight;
export var axisOrientBottom = orientBottom;
export var axisOrientLeft = orientLeft;
