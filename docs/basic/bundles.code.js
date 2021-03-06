define(["exports", "@beyond-js/kernel/bundle", "react", "@beyond/docs/components/html"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Bundles = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/docs/basic/bundles",
    "multibundle": true,
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["react", dependency_1]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/components/html"]));

  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./bundles
  *************************/

  ims.set('./bundles', {
    hash: 2558675145,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Bundles = Bundles;

      var React = require("react");

      var _html = require("@beyond/docs/components/html");

      var _beyond_context = require("beyond_context");

      const tpl = `
{
    "name": "first-module",
    "platforms": [
        "web"
    ]
    "code" : {
        "ts": {
          "path": "ts",
          "files": [
            "*"
          ]
        },
        "sass": {
          "path": "scss",
          "files": [
            "*"
          ]
        }
    }
}`;
      const tpls = {
        modulejson: {
          title: "module.json",
          language: "json",
          tpl
        }
      };
      /*bundle*/

      function Bundles() {
        return React.createElement(React.Fragment, null, React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "bundles"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "transversal"
        }), React.createElement(_html.Document, {
          tpls: tpls,
          moduleId: _beyond_context.module.resource,
          textId: "types",
          nextLinks: ["/docs/modules/create"]
        }));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./bundles",
    "from": "Bundles",
    "name": "Bundles"
  }];
  let Bundles; // Module exports

  _exports.Bundles = Bundles;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Bundles') && (_exports.Bundles = Bundles = require ? require('./bundles').Bundles : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});