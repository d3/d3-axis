import node from "rollup-plugin-node-resolve";
import {terser} from "rollup-plugin-terser";
import * as meta from "./package.json";

const copyright = `// ${meta.homepage} Version ${meta.version} Copyright ${(new Date).getFullYear()} ${meta.author.name}.`;

export default [
  {
    input: "index.js",
    output: {
      file: "build/d3-axis.js",
      format: "umd",
      name: "d3",
      extend: true
    },
    plugins: [
      node(),
      terser({output: {preamble: copyright}})
    ]
  },
  {
    input: "index.js",
    output: {
      file: "build/d3-axis.min.js",
      format: "umd",
      name: "d3",
      extend: true
    },
    plugins: [
      node(),
      terser({output: {preamble: copyright}})
    ]
  }
];
