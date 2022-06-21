define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.txt = _exports.hmr = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/docs/foundations/dev-server/txt").package('en');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 210035302,
    creator: function (require, exports) {
      exports.txt = {
        "server": {
          "h1#devServer": ["Foundations", "Development Server"],
          "p1": "The BeyondJS development server starts when the ‘beyond’ command runs, and it can read some settings from the ‘beyond.json’ file, but it is not required to create it. BeyondJS's purpose is that the developer works using the Dashboard, which manages most of the usual configurations and usually has to do with being able to launch a project.",
          "p2": {
            "s1": "When the development server comes up, the Dashboard is accessed from",
            "l1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": " and it generates and edits the ‘beyond.json’ file whether a project is created, edited, or delete."
          }
        },
        "properties": {
          "h2#properties": "Properties",
          "items": [{
            "s1": "<strong>Applications</strong> ",
            "l1": ["/aoc", "AOC"],
            "s2": ": Receive an array with the list of projects or applications configured so that BeyondJS can read and launch them. This file is managed by BeyondJS if the dashboard is being used."
          }, "<strong>Bundles</strong> object: Allows you to configure the inclusion of bundles created by the developer.", {
            "s1": "<strong>Libraries</strong> ",
            "l1": ["/aoc", "AOC"],
            "s2": ": BeyondJS libraries configuration arrangement to use."
          }]
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