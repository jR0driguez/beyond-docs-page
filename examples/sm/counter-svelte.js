define(["exports", "@beyond-js/kernel/bundle", "@beyond-js/widgets/render", "@beyond-js/kernel/styles", "svelte/internal", "@beyond-js/svelte-widgets/controllers", "@beyond/docs/examples-sm-actions"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5) {
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
    "module": "@beyond/docs/examples/sm/counter-svelte",
    "bundle": "widget"
  }).package();

  ;
  externals.register(new Map([["svelte/internal", dependency_3]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/examples-sm-actions"]));

  require('@beyond-js/widgets/render').widgets.register([{
    "name": "counter-svelte",
    "id": "@beyond/docs/examples/sm/counter-svelte"
  }]);

  require('@beyond-js/kernel/styles').styles.register('@beyond/docs/examples/sm/counter-svelte');

  const ims = new Map();
  /*******************************
  INTERNAL MODULE: ./widget.svelte
  *******************************/

  ims.set('./widget.svelte', {
    hash: 2163876209,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;

      var _internal = require("svelte/internal");

      var _examplesSmActions = require("@beyond/docs/examples-sm-actions");
      /* generated by Svelte v3.48.0 */


      function create_fragment(ctx) {
        let div1;
        let div0;
        let h3;
        let t1;
        let span;
        let t2;
        let t3;
        let mounted;
        let dispose;
        return {
          c() {
            div1 = (0, _internal.element)("div");
            div0 = (0, _internal.element)("div");
            h3 = (0, _internal.element)("h3");
            h3.textContent = "Svelte Panel";
            t1 = (0, _internal.space)();
            span = (0, _internal.element)("span");
            t2 = (0, _internal.text)("clicks here: ");
            t3 = (0, _internal.text)(
            /*count*/
            ctx[0]);
            (0, _internal.attr)(div0, "class", "item svelte-1qghxe7");
            (0, _internal.attr)(div1, "class", "list");
          },

          m(target, anchor) {
            (0, _internal.insert)(target, div1, anchor);
            (0, _internal.append)(div1, div0);
            (0, _internal.append)(div0, h3);
            (0, _internal.append)(div0, t1);
            (0, _internal.append)(div0, span);
            (0, _internal.append)(span, t2);
            (0, _internal.append)(span, t3);

            if (!mounted) {
              dispose = (0, _internal.listen)(div0, "click",
              /*add*/
              ctx[1]);
              mounted = true;
            }
          },

          p(ctx, [dirty]) {
            if (dirty &
            /*count*/
            1) (0, _internal.set_data)(t3,
            /*count*/
            ctx[0]);
          },

          i: _internal.noop,
          o: _internal.noop,

          d(detaching) {
            if (detaching) (0, _internal.detach)(div1);
            mounted = false;
            dispose();
          }

        };
      }

      function instance($$self, $$props, $$invalidate) {
        let count = 0;

        const add = () => {
          $$invalidate(0, ++count);
          (0, _examplesSmActions.updateCount)();
        };

        return [count, add];
      }

      class Component extends _internal.SvelteComponent {
        constructor(options) {
          super();
          (0, _internal.init)(this, options, instance, create_fragment, _internal.safe_not_equal, {});
        }

      }

      var _default = Component;
      exports.default = _default;
    }
  });
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 16040728,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _controllers = require("@beyond-js/svelte-widgets/controllers");

      var _widget = require("./widget.svelte");
      /*bundle*/


      class Controller extends _controllers.SvelteWidgetController {
        get Widget() {
          return _widget.default;
        }

      }

      exports.Controller = Controller;
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