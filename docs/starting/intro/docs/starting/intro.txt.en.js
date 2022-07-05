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
    "module": "@beyond/docs/docs/starting/intro",
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
    hash: 3801561455,
    creator: function (require, exports) {
      exports.txt = {
        "universal": {
          "h1": ["Universal Typescript", "What is BeyondJS?"],
          "cc1": "about",
          "p1": "BeyondJS is a typescript-based meta framework, designed to create projects that work in different JavaScript execution environments, keeping the focus on ensuring a universal development experience for the developer. It does so by remaining agnostic to existing libraries and technologies, seeking to leave a standardized path that allows their integration.",
          "p2": "The factors that ensure a homogeneous development experience, regardless of the environment in which you are working, are:",
          "items1": ["HMR in client code and Node code: automatically, without additional configurations. In addition, it provides an API to the developer that allows you to define when and what you want to update.", "Modular development: BeyondJS has a philosophy of generating small bundles that are loaded on-demand, at the exact required moment. It doesn't work with a dependency tree and therefore doesn't require bundle modules like webpack or parcel.", "Distribution management: BeyondJS allows you to define distributions for the development platforms you want to use and manages the availability of the final code based on it."]
        },
        "overview": {
          "h2": "Project management",
          "p1": "Projects in BeyondJS have a compatibility approach with NPM, which allows them to be considered as packages that could eventually be published directly in NPM and later on used in any other project, both BeyondJS and external.",
          "p2": "A project is defined by specifying its scope, name, and at least one distribution. The distributions allow identifying the execution environment in which the project is expected to work and some additional data that may be relevant for the compilation and deployment process. Likewise, multiple distributions are able to be  configured simultaneously, giving the developer the flexibility to validate the behavior of their project in different configured ecosystems.",
          "p3": {
            "s1": "The projects contain ",
            "l1": ["/docs/modules", "modules"],
            "s2": ". These represent the minimum unit of development in BeyondJS and have the ability to define on which platform they work. Data interpreted by the ",
            "l2": ["/docs/distributions", "distributions"],
            "s3": "  distributions configured in the development environment and when deploying a project."
          },
          "p4": {
            "s1": "If you want to know more about projects and how create it, you can go to the ",
            "l1": ["/docs/projects", "Project chapter"]
          }
        },
        "features": {
          "h2": "Features",
          "p1": "Below, we list some of the most relevant features of BeyondJS.",
          "items1": ["<strong>Universal deployment</strong>: Same code, any environment.", "<strong> Modular and on-demand charging</strong>: The code only loads once when required.", "<strong>Dashboard</strong> or a powerful control panel for developers.\n", "Module <strong>Plug & play</strong>.", "<strong>Unique development ecosystem</strong> between <strong>Backend and Frontend</strong>.", "<strong>Real Time</strong>  ready to deploy with web sockets.", "<strong>Automatic integration </strong>with view frameworks like React, Vue, Svelte.", "<strong>Smarter Typescript</strong>: transpiling and type checking, in parallel, for better productivity and performance.", "<strong>HMR</strong>  modular and in the backend code automatically.", "<strong>No dependency tree</strong>  BeyondJS works under a different paradigm than the one used by bundle modules like webpack.", "<strong>Jamstack + SSR.</strong>", "Standardized integration with NPM, ready to publish.", "<strong>Execution environment</strong> for services managed by <span class=\"beyond\">BeyondJS.</span>", "Web Components integrados.", "<strong>Multilanguage</strong> managed through bundles.", "Management of templates and overwriting."]
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