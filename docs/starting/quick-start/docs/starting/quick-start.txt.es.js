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
  }).package('es');

  ;
  externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0]]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 3367789291,
    creator: function (require, exports) {
      exports.txt = {
        "h1#quick-start": "Inicio rápido",
        "h4": "Prerequisitos",
        "items1": ["Node ^14.17.4.", "Estar familiarizado con manejadores de dependencias como npm o yarn."],
        "h2#create-project": "`@beyond-js/create-project`",
        "p1": "Para empezar, posiblemente la manera más sencilla de arrancar un proyecto en BeyondJS sea por medio del `@beyond-js/create-project`.",
        "c1": "npx1",
        "h4#command": "Opciones del comando",
        "p2": "A continuación, se listan las banderas que pueden ser utilizadas al instalar  `@beyond-js/create-project`.",
        "items2": [{
          "s1": "-name: Permite definir el scope y nombre del proyecto. Los proyectos, siguen el estándar de NPM, puedes leer más sobre ello",
          "e1": ["https://docs.npmjs.com/cli/v8/using-npm/scope", "here"],
          "s2": "."
        }, {
          "s1": "-type: Permite definir el tipo de proyecto a crear, es opcional, sino se pasa se crea un proyecto de tipo web por defecto. Los valores aceptados son",
          "items": ["web", "node", "backend", "library", "web-backend"],
          "p1": {
            "s1": "YPuedes leer más información sobre los tipos de proyecto ",
            "l1": ["/docs/projects/create#type-projects", "here"],
            "s2": "."
          }
        }, "-container: Permite especificar si se desea agregar una carpeta contenedora de proyectos. Recuerde que BeyondJS soporta la posibilidad de manejar múltiples proyectos en simultáneo."],
        "p3": "Para ejemplificar, se puede imaginar que se necesita crear un proyecto login de tipo node, lo podríamos crear con el siguiente comando:",
        "c2": "npx2",
        "p4": "Al finalizar la ejecución del comando, se debió crear la estructura del proyecto y ya estaría listo para ser ejecutado.",
        "p5": "Para levantar el servidor de desarrollo, se ejecuta el siguiente comando:",
        "c3": "npm1",
        "p6": {
          "s1": "¡Listo! Ya se puede comenzar a programar y probar el proyecto. Se puede acceder al dashboard desde ",
          "l1": ["http://localhost:4000", "http://localhost:4000"],
          "s2": "y el proyecto creado se encuentra disponible en ",
          "l2": ["http://localhost:6500", "http://localhost:6500"]
        },
        "q1": {
          "s1": "El dashboard es un sistema que BeyondJS provee para brindar al desarrollador una mejor experiencia de usuario. Puedes leer más sobre el ",
          "l1": ["/docs/dashboard", "aquí"],
          "s2": "."
        },
        "h2": "Instalación global",
        "p7": "Para instalar BeyondJS globalmente, se debe correr el siguiente comando:",
        "c4": "npm2",
        "p8": "A partir de la instalación, sólo es necesario ir a la carpeta en donde se desee crear el o los proyectos e inicializar BeyondJS desde la línea de comandos de la siguiente forma:",
        "c5": "beyond",
        "p9": {
          "s1": "Si todo sale bien, aparecerá un mensaje diciendo que BeyondJS se está ejecutando y que puedes acceder al dashboard en ",
          "l1": ["http://localhost:4000", "http://localhost:4000"],
          "s2": ", desde donde se podrá crear un proyecto por medio de la interfaz gráfica del dashboard.\n"
        },
        "p10": {
          "s1": "Ya en el Dashboard, puedes crear un proyecto desde la interfaz gráfica, puedes ver cómo hacerlo ",
          "l1": ["/docs/projects/create", "aqui"],
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