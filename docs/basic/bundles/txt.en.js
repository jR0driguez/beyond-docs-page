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

  const __pkg = new __Bundle("@beyond/docs/docs/basic/bundles/txt").package('en');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 1063470290,
    creator: function (require, exports) {
      exports.txt = {
        "bundles": {
          "h1#bundles": "Bundles",
          "p0": "A bundle represents the compiled file(s) ready to be included in the browser. These files are made up of code generated by the processors included in the configuration and are defined as properties of a module's configuration object, which is found in the `module.json` file of each module created.",
          "c1": "modulejson",
          "p01": "El código anterior, define un bundle de tipo code. Un modulo puede contener más de un bundle, para ello solo es necesario agregar otra propiedad con el nombre del bundle adicional. Es importante tener en cuenta que un módulo no puede contener dos bundles de un mismo tipo.",
          "p1": "Imagine that you need to make a registration form interface. The registration form could be divided into two layers:",
          "items": ["HTML and screen styles based user interface.", "The logic associated with validations and functionalities."],
          "p2": "In order to carry out the development, it is necessary to create some files in Typescript, which include the logic and elements of the interface and other style files. In BeyondJS this implies working with at least two basic processors: ts and sass, the first generates javascript code, the second generates css code",
          "p3": "A <strong>bundle</strong> represents the compiled file(s) ready to be included in the browser. These files are made up of code generated by processors included in the configuration.",
          "p4": "As previously explained, the possibility that a bundle generates one or several final files basically depends on the processors included for its bundling, if necessary to create only JavaScript code, a single file is generated, if, on the contrary, CSS code is also needed two files are generated.",
          "p5": "Bundles are made up of processors and BeyondJS offers the possibility for developers to create their own bundles."
        },
        "transversal": {
          "h2#transversalBundles": "Transversal Bundles",
          "p1": "Transversal bundles are defined in the same way as other bundles, but they have a peculiarity that offers productive advantages: the code of a transversal bundle is compiled into a single file.",
          "p2": "BeyondJS locates, integrates and unifies them into a single bundle or final file. The start type bundles are a clear example of this, they allow the programmer to define the logic desired to be executed at the start of the application."
        },
        "types": {
          "h2#types": "Types",
          "items": [{
            "s1": "<strong>Widget</strong>: They contain the code of a web-component. Pages and layouts are handled as widgets. You can read more about this type of bundle in the ",
            "l1": ["/docs/widgets", "Widgets chapter."]
          }, "<strong>Code</strong>: Bundle that allows you to create various functionalities to be consumed from another bundle or module. Supports the integration of multiple processors.", "<strong>TS (TypeScript)</strong>: Only supports the processor for handling typescript files.", "<strong>Bridge</strong>: Backend code bundle, which generates client code and makes available the websocket connection to connect the client and the backend.", "<strong>Backend</strong>: only supports code that is going to be executed in execution environments such as <strong>Node</strong> or <strong>Rhino</strong>.", "<strong>Vue</strong>: Specific bundle for managing modules with the Vue Framework.", "<strong>Svelte</strong>: Specific for handling Svelte code and its single file component structure.", "<strong>Start</strong>: Transversal bundle, useful if it is required to execute logic at the start of the application.", "<strong>Txt-start</strong>: Transversal bundle, which allows managing multilanguage texts required at the start of the application."]
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