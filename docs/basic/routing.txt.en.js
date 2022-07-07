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
    "module": "@beyond/docs/docs/basic/routing",
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
    hash: 4184862509,
    creator: function (require, exports) {
      exports.txt = {
        "routing": {
          "h1": ["Basics", "Routing"],
          "p1": {
            "s1": "BeyondJS has simple and powerful route handling at the same time. For most cases, the URLs are defined in the configuration of ",
            "l1": ["/widgets/pages", "page type widgets"],
            "s2": ", through the URL property, but there may be cases where some more advanced configuration is required."
          }
        },
        "object": {
          "h2#routing-object": "Routing Object",
          "p1": "The routing object manages the history of the browser and handles compatibility for web and mobile projects. It offers an API that allows you to work with the history and manipulate it.",
          "p2": "It is made available by the kernel and is imported as follows:",
          "c1": "tpl1",
          "p3": "The BeyondJS routing object exists to cover the following scenarios:",
          "items": ["Provide the developer with a simple API to perform complex URL treatments, such as validations, redirections, and variable management.", "Identify the flow and history of user navigation within the applicative. The history object of the browser has a very limited treatment of it, and only allows access to the number of existing navigations. BeyondJS on the other hand manages a detailed history.", "Since hybrid applications made with JavaScript resolve file handlingutilizing a different protocol than applications accessed from a browser, BeyondJS treats it to abstract the developer from it and ensure the same behavior regardless of the platform they are working."]
        },
        "navigation": {
          "h2#navigation": "Navigation",
          "p1": "To maintain compatibility with the known APIs, the Routing object has methods homologous to the ones of the browser history API. They cover equal needs, but at the same time, they are in charge of unifying the behaviors between the platforms and updating the elements of the history of BeyondJS.",
          "p2": "The available methods are:",
          "p3": "Record a new item in the history",
          "c2": "tpl2",
          "p4": "Modify the current URL without adding new items to the history.",
          "c3": "tpl3",
          "p5": "It has the same interface as the pushState method of the history object of the Web API, and additionally, it is in charge of updating the history of BeyondJS."
        },
        "overwrite": {
          "h2#route-override": "Route Override",
          "p2": "Generally, although there may be more, there are two typical contexts in which it is necessary to treat URLs:",
          "items": ["When it is required to manage friendly URLs.", "When it is necessary to validate access permissions and, if the person trying to access the URL does not have them, it is intended to redirect to a specific flow."],
          "p3": {
            "s1": "For this type of case, an asyncronaredirect function can be defined as a property of the routing object. This function receives an object of type",
            "l1": ["/api/uri", "<URI>"],
            "s2": " that has a property pathname that represents the current path."
          },
          "p4": "The redirect function can return a different route, in which case BeyondJS will redirect to the returned URL, or it can return nothing, in which case the user has access to the route, which is the default behavior.",
          "p5": "In the example above, any route received is redirected to /."
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