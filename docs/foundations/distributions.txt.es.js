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
    "module": "@beyond/docs/docs/foundations/distributions",
    "multibundle": true,
    "bundle": "txt"
  }).package('es');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 3006170351,
    creator: function (require, exports) {
      exports.txt = {
        "distributions": {
          "h1#distributions": ["Fundamentos", "Distribuciones"],
          "p1": "Las distribuciones representan el entorno de ejecución de un proyecto. Es necesario configurar una distribución por cada entorno en el que se desee trabajar. BeyondJS crea un Entorno de Ejecución de Beyond (BEE) por cada distribución creada. Más adelante se explicará que es exactamente un BEE y las ventajas que ofrece."
        },
        "node": {
          "h2#node": "Node",
          "p1": {
            "s1": "BeyondJS permite realizar proyectos escalables y eficientes con ",
            "l1": ["https://nodejs.org/", "NodeJS"],
            "s2": ", construidos directamente con typescript y buscando mejorar la experiencia de desarrollo, por medio de la integración de HMR."
          },
          "p2": "Para trabajar con node, es necesario crear una distribución de tipo node. A partir de allí, BeyondJS se encargará de levantar el entorno de ejecución (BEE) y dejar disponible todos los modulos del proyecto que esten configurados para las plataformas que manejan node."
        },
        "distribution": {
          "h3#distribution": "Distribución",
          "p1": "La configuración de modulos node en BeyondJS se hace por medio de las distribuciones. El desarrollador configura una distribución",
          "p2": "Como se explica en otras partes de esta documentación, un módulo en BeyondJS es un contenedor de bundles, donde puede existir uno o varios bundles. A su vez, cada uno de estos bundles, contiene un conjunto de modulos internos. Cuando el proyecto BeyondJS hace uso de los BEE(Beyond Execution Environment) sobre lo cual se explicará más adelante, para optimizar los tiempos de desarrollo y ofrecer mejores resultados en la experiencia."
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