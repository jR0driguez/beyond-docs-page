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
    "module": "@beyond/docs/docs/starting/quick-start",
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
    hash: 2888880868,
    creator: function (require, exports) {
      exports.txt = {
        "h1#quick-start": "Quick Start",
        "h4": "Pre-requirements",
        "items1": ["Node ^14.17.4.", "Be familiar with dependency managers like npm or yarn."],
        "h2#create-project": "`@beyond-js/create-project`",
        "p1": "To begin with, possibly the easiest way to start a project in BeyondJS is through the `@beyond-js/create-project`.",
        "c1": "npx1",
        "h4#command": "Command options",
        "p2": "Listed below are the flags that can be selected when installing @beyond-js/create-project:",
        "items2": [{
          "s1": "-name: This allows you to define the scope and naming of the project. Projects follow the NPM standard. Read read more about it",
          "e1": ["https://docs.npmjs.com/cli/v8/using-npm/scope", "here"],
          "s2": "."
        }, {
          "s1": "-type: This allows you to define the type of project to create (this is optional), if not, a web-type project will be set by default. Accepted values ​​are:\n",
          "items": ["web", "node", "backend", "library", "web-backend"],
          "p1": {
            "s1": "You can read more about project types ",
            "l1": ["/docs/projects/create#type-projects", "here"],
            "s2": "."
          }
        }, "-container: This allows you to specify if you want to add a project container folder. Remember that BeyondJS supports the ability to handle multiple projects simultaneously.\n"],
        "p3": "To exemplify, you can imagine that you need to create a login project of type node, that could be create it with the following command:\n",
        "c2": "npx2",
        "p4": "When the command execution finishes, the project structure is created and is ready to be executed.",
        "p5": "To start the development server, the following command needs execution:",
        "c3": "npm1",
        "p6": {
          "s1": "Done! Now you can start programming and testing the project. The dashboard is accessed through: ",
          "l1": ["http://localhost:4000", "http://localhost:4000"],
          "s2": ", and the project created is available at ",
          "l2": ["http://localhost:6500", "http://localhost:6500"]
        },
        "q1": {
          "s1": " The dashboard is a system that BeyondJS provides the developer with a better user experience. You can read more about him ",
          "l1": ["/docs/dashboard", "here"],
          "s2": "."
        },
        "h2": "Global installation",
        "p7": "To install BeyondJS globally, run the following command:\n",
        "c4": "npm2",
        "p8": "From the installation, it is only necessary to go to the folder where you want to create the project(s) and initialize BeyondJS from the command line as follows:\n",
        "c5": "beyond",
        "p9": {
          "s1": "If everything goes smothly, a message will appear saying that BeyondJS is running and that you can access the dashboard at ",
          "l1": ["http://localhost:4000", "http://localhost:4000"],
          "s2": ", from where a project is created through the dashboard graphical interface."
        },
        "p10": {
          "s1": "Also at the dashboard, you can create a project from the graphical interface. See how you can  do it",
          "l1": ["/docs/projects/create", "here"],
          "s2": "."
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