define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "@beyond-js/react-widgets/controllers", "react"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.Controller = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/layout/home",
    "bundle": "widget"
  }).package();

  ;
  externals.register(new Map([["react", dependency_4]]));

  require('@beyond-js/widgets/render').widgets.register([{
    "name": "home-layout",
    "id": "@beyond/docs/layout/home",
    "is": "layout"
  }]);

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/layout/home');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 2653441698,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _controllers = require("@beyond-js/react-widgets/controllers");

      var _layout = require("./layout");
      /*bundle*/


      class Controller extends _controllers.ReactWidgetController {
        get Widget() {
          return _layout.default;
        }

      }

      exports.Controller = Controller;
    }
  });
  /************************
  INTERNAL MODULE: ./layout
  ************************/

  ims.set('./layout', {
    hash: 4283015315,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = _default;

      var React = require("react");

      function _default() {
        return React.createElement("div", {
          className: "main-widget"
        }, React.createElement("div", {
          className: "home-page"
        }, React.createElement("docs-header-menu", null), React.createElement("menu-layout", {
          home: "true"
        }), React.createElement("main", null, React.createElement("beyond-layout-children", null))));
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }];
  let Controller; // Module exports

  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});