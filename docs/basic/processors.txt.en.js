define(["exports", "@beyond-js/kernel/bundle"], function (_exports, dependency_0) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/processors",
    "multibundle": true,
    "bundle": "txt"
  }).package('en');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 3875888264,
    creator: function (require, exports) {
      exports.txt = {
        "processors": {
          "h1": ["Basic Concepts", "Processors"],
          "p1": "Many of the tools or languages used in the web environment require prior processing to be interpreted by browsers or execution environments, this work done by the processors.",
          "p2": "BeyondJS offers a series of integrated processors, which allow the use of main technologies of the web industry and provides support so that new processors to be integrated if required.",
          "p3": "BeyondJS works differently from bundlers like Webpack or Parcel. You do not need to evaluate the dependency tree of a project nor apply techniques for code separation or tree shaking. Thanks to its modular nature and through the processors, code packaging is done at the bundle level.",
          "p4": {
            "s1": "Processors are components of BeyondJS that allow interpreting, parsing, transpiling, or compiling code (as the case may be) of the languages or technologies used in a ",
            "l1": ["/bundles", "Bundle"],
            "s2": "."
          }
        },
        "types": {
          "h3#processors": "Existing processors",
          "items1": ["ts: Allows working with typescript and `tsx` files for react.", "sass: Provides support for working with SASS files with the <span class=\"inline\">.scss</span> extension", "yue: Provides support for working with vue single-file-components files.", "svelte: Allows working with svelte single-file-component files"]
        },
        "properties": {
          "h3#properties": "Properties",
          "p1": "All processors have the following features:",
          "items2": ["<strong>Path</strong> string optional: Allows defining the directory where the processor files are located. If a value is added, it's interpreted as a directory position relative to the location of the defined module.json.", "<strong>Files</strong> array optional: Allows defining the list of files or folders included in the processor. If the path property is set, the files will be searched within the specified directory, otherwise, they will be searched related to the location of the module.json. An array with an input * can be passed as property value, thus indicating that all files in the specified directory are included."]
        },
        "examples": {
          "h3#examples": "Examples",
          "p1": "The following example corresponds to the definition of a bundle of code types. Below, we explain in detail:",
          "items1": ["The bundle uses two processors: sass and ts.", "The sass processor includes all files in the /code/scss directory, which is relative to the location of the module.json file.", "The ts renderer only includes the component.ts file, which is located in the /code/ts directory relative to the location of the module.json file."],
          "c1": "modulejson"
        }
      };
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./txt",
    "from": "txt",
    "name": "txt"
  }];
  let txt; // Module exports

  _exports.txt = txt;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'txt') && (_exports.txt = txt = require ? require('./txt').txt : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});