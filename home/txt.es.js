define(["exports"], function (_exports2) {
  "use strict";

  Object.defineProperty(_exports2, "__esModule", {
    value: true
  });
  _exports2.txt = _exports2.hmr = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/home/txt").package('es');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 560204014,
    creator: function (require, exports) {
      exports.txt = {
        "header": {
          "notice": "Versión beta",
          "pretitle": "Welcome to BeyondJS",
          "h1": "The Full Stack universal <br/>\nTypescript Framework",
          "description": "Integra diferentes stacks de desarrollo y trabaja con ellos bajo el mismo paradigma, priorizando\n                            la experiencia de desarrollo y la carga modular, sin necesidad de empaquetadores."
        },
        "solution": {
          "universalTs": {
            "title": "Typescript Universal",
            "description": {
              "one": "Diseñado para crear desde un mismo proyecto, múltiples distribuciones como sitios web, aplicaciones ",
              "cordova": "Cordova",
              "npm": "paquetes NPM",
              "two": " y proyectos ",
              "node": "Node"
            }
          },
          "jamStack": {
            "title": "Jamstack y SSR",
            "one": "Listo para publicar sitios estáticos, <strong>SSR</strong>, <strong>CSR</strong> o arquitecturas",
            "jamStack": "Jamstack",
            "two": " y con posibilidad de usarlas en conjunto por medio de ",
            "microfrontends": "micro frontends",
            "description": "  Listo para publicar sitios estáticos, <strong>SSR</strong>, <strong>CSR</strong> o arquitecturas <Elink href=\"https://jamstack.org/\">Jamstack</Elink> y con posibilidad de\n                usarlas en conjunto por medio de <Elink href=\"https://micro-frontends.org/\">micro frontends</Elink>"
          },
          "frameworks": {
            "title": "Frameworks de vistas",
            "start": "Compatible con&nbsp;",
            "and": " and ",
            "end": "Preparado para incluir otros frameworks o librerías  de gestión de vistas."
          }
        },
        "universal": {
          "title": "Desarollo universal",
          "texts": "Enfocado en hacer que las mismas herramientas y técnicas funcionen para múltiples distribuciones y tecnologías de manera simple y en la creación de micro servicios y micro frontends."
        },
        "config": {
          "preTitle": "Integración simple",
          "title": "Mínima Configuración y carga modular",
          "texts": "Sin empaquetadores y en una estructura modular que asegura la carga a demanda sin agregar complejidades a medida que el proyecto crece."
        },
        "plugAndPlay": {
          "title": "Plug & Play",
          "texts": "Los módulos  pueden reestructurarse y moverse de un proyecto a otro sin necesidad de configuraciones adicionales."
        },
        "hmr": {
          "pretitle": "Gestión de servicios",
          "title": "HMR en Navegador y Node",
          "texts": "Actualización en tiempo de ejecución del código cliente y Node. BeyondJS gestiona los servicios Node para evitar el reinicio de los mismos cuando se realizan cambios y garantizar la mejor experiencia de desarrollo posibl"
        },
        "realtime": {
          "pretitle": "Conexión en tiempo real",
          "title": "Conexión Real-time cliente y servidor/ servidor y servidor",
          "link": "https://developer.mozilla.org/es/docs/Web/API/WebSockets_API",
          "startText": "Comunicación de ",
          "endText": "soportada de forma automática para conectar el código cliente de un proyecto móvil o web con un servidor o servicio node."
        },
        "readMore": "Leer más",
        "learnMore": "Aprender más",
        "experience": {
          "title": "Experiencia de desarrollo",
          "texts": "Una experiencia total e integradora en el desarrollo de proyectos en simultáneo, edición de código, deployment, creación de módulos y gestión total de plataformas y servicio."
        }
      };
    }
  }); // Exports managed by beyond bundle objects

  __pkg.exports.managed = function (require, _exports) {
    _exports.txt = require('./txt').txt;
  };

  let txt; // Module exports

  _exports2.txt = txt;

  __pkg.exports.process = function (require) {
    _exports2.txt = txt = require('./txt').txt;
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports2.hmr = hmr;

  __pkg.initialise(ims);
});