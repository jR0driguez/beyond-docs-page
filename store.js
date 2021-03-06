define(["exports", "@beyond-js/kernel/bundle", "react", "@beyond-js/kernel/texts"], function (_exports, dependency_0, dependency_1, dependency_2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.useTexts = _exports.useModel = _exports.useDocsContext = _exports.useBinder = _exports.hmr = _exports.DocsContext = _exports.Control = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/store",
    "bundle": "store"
  }).package();

  ;
  externals.register(new Map([["react", dependency_1]]));
  const ims = new Map();
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 1583137179,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Control = void 0;
      /*bundle*/

      class Control {
        constructor() {}

      }

      exports.Control = Control;
    }
  });
  /****************************
  INTERNAL MODULE: ./use-binder
  ****************************/

  ims.set('./use-binder', {
    hash: 1517189814,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useBinder = useBinder;

      var React = require("react");
      /*bundle*/

      /***
       * Executes a useEffect hook binging the event defined in all
       * objects passed
       *
       * @param {array} objects Objects to bind
       * @param {function} onBinder function to be executed when the event is fired
       * @param {string} event the event to be listened, by default is event change
       */


      function useBinder(objects, onBinder, event = 'change') {
        React.useEffect(() => {
          objects.forEach(object => {
            if (object && object.bind) object.bind(event, onBinder);
            if (object && object.on) object.on(event, onBinder);
          });
          return () => objects.forEach(object => {
            if (object && object.unbind) object.unbind(event, onBinder);
            if (object && object.off) object.off(event, onBinder);
          });
        }, [objects]);
      }
    }
  });
  /***************************
  INTERNAL MODULE: ./use-model
  ***************************/

  ims.set('./use-model', {
    hash: 3232899855,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useModel = useModel;

      var React = require("react");
      /*bundle*/


      function useModel({
        model,
        props,
        onChange
      }) {
        const [controller, setModel] = React.useState();

        const onLoad = () => {
          const instance = new model(props);

          const onChangeMethod = () => {
            if (onChange) onChange(controller);
          };

          if (onChange) {
            instance.bind('change', onChangeMethod);
          }

          setModel(instance);
          return () => instance.unbind('change', onChangeMethod);
        };

        React.useEffect(onLoad, []);
        return [controller];
      }
    }
  });
  /***************************
  INTERNAL MODULE: ./use-texts
  ***************************/

  ims.set('./use-texts', {
    hash: 768772590,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useDocsContext = exports.DocsContext = void 0;
      exports.useTexts = useTexts;

      var React = require("react");

      var _texts = require("@beyond-js/kernel/texts");

      const value = {};
      /*bundle*/

      const DocsContext = React.createContext(value);
      exports.DocsContext = DocsContext;
      /*bundle*/

      const useDocsContext = () => React.useContext(DocsContext);

      exports.useDocsContext = useDocsContext;
      /*bundle*/

      function useTexts(moduleId) {
        const [ready, setReady] = React.useState(false);
        const [texts, setTexts] = React.useState({});
        React.useEffect(() => {
          const modelTexts = new _texts.CurrentTexts(moduleId, true);

          const triggerEvent = () => {
            setReady(modelTexts.ready);
            setTexts(modelTexts.value);
          };

          modelTexts.bind('change', triggerEvent);
          triggerEvent();
          return () => {
            modelTexts.unbind('change', triggerEvent);
          };
        }, []);
        const isReady = ready && !!texts;
        return [isReady, texts];
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./control",
    "from": "Control",
    "name": "Control"
  }, {
    "im": "./use-binder",
    "from": "useBinder",
    "name": "useBinder"
  }, {
    "im": "./use-model",
    "from": "useModel",
    "name": "useModel"
  }, {
    "im": "./use-texts",
    "from": "DocsContext",
    "name": "DocsContext"
  }, {
    "im": "./use-texts",
    "from": "useDocsContext",
    "name": "useDocsContext"
  }, {
    "im": "./use-texts",
    "from": "useTexts",
    "name": "useTexts"
  }];
  let Control, useBinder, useModel, DocsContext, useDocsContext, useTexts; // Module exports

  _exports.useTexts = useTexts;
  _exports.useDocsContext = useDocsContext;
  _exports.DocsContext = DocsContext;
  _exports.useModel = useModel;
  _exports.useBinder = useBinder;
  _exports.Control = Control;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Control') && (_exports.Control = Control = require ? require('./control').Control : value);
    (require || prop === 'useBinder') && (_exports.useBinder = useBinder = require ? require('./use-binder').useBinder : value);
    (require || prop === 'useModel') && (_exports.useModel = useModel = require ? require('./use-model').useModel : value);
    (require || prop === 'DocsContext') && (_exports.DocsContext = DocsContext = require ? require('./use-texts').DocsContext : value);
    (require || prop === 'useDocsContext') && (_exports.useDocsContext = useDocsContext = require ? require('./use-texts').useDocsContext : value);
    (require || prop === 'useTexts') && (_exports.useTexts = useTexts = require ? require('./use-texts').useTexts : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});