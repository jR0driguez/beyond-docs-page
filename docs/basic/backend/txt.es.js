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

  const __pkg = new __Bundle("@beyond/docs/docs/basic/backend/txt").package('es');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 2438134876,
    creator: function (require, exports) {
      exports.txt = {
        "code": {
          "h1#backendCode": ["Conceptos básicos", "Código Backend"],
          "p1": "BeyondJS disponibiliza un entorno seguro y eficiente pare crear código backend, bien sea que se requiera para trabajar con servicios independientes, encargados de tareas específicas o que busque implementar una conexión de un proyecto cliente con una api backend.",
          "p2": "Para efectos de BeyondJS, podemos clasificar estas estructuras de código en dos tipos:",
          "items": ["<strong>Servicios Backend</strong>: Código node que representa un servicio en ejecución en el backend y sólo puede ser utilizado por módulos que tambien se ejecuten en el backend", "<strong>Api backend</strong>: permiten la conexión entre el código backend y el código cliente."]
        },
        "server": {
          "h2#apiServerBundleBridge": "Api Servidor",
          "h3#apiServerBundleBridge": "Bundle <span class=\"inline\">bridge</span>",
          "p1": {
            "s1": "Las APIs servidor en BeyondJS representan funciones que ejecutan código en el servidor y pueden ser consumidas desde el código cliente. Manejan la lógica para conectarse a un backend y retornar data. Esto se lógra de forma simple, con la creación de un ",
            "l1": ["/bundles#bridge", "Bundle Bridge"]
          },
          "q1": {
            "s1": "Para que se pueda ejecutar código Backend en BeyondJS es necesario tener configuradas las distribuciones necesarias. Si el proyecto se creo a partir del tipo de proyecto web-backend, la misma ya se encuentra configurada. Puedes encontrar más información en ",
            "l1": ["/docs/distributions", "La seccion de distribuciones"]
          },
          "c1": "tpl1",
          "p2": {
            "s1": "Al igual que cualquier módulo o bundle, este puede ser gestionado desde el ",
            "l1": ["/dashboard", "Dashboard"],
            "s2": " o de forma manual."
          },
          "p3": "Cómo su nombre lo indica, el bundle de tipo <strong>bridge</strong>, sirve de puente entre la lógica cliente y la lógica servidor. Generalmente, en el servidor se impmenentan lógicas asociadas al manejo de datos o manipulación de archivos, el bridge Permite implementar y dejar disponibles funcionalidades que necesiten ser consultadas desde el cliente y mantener encapsuladas en el servidor aquellas que no.",
          "p4": "El codigo de un bundle bridge luce asi:",
          "c2": "tpl2",
          "p5": "Un objeto Javascript común y corriente ¿Verdad?",
          "p6": "BeyondJS genera un objeto cliente que realiza la conexión web-socket al servidor, ejecuta el código implementado por el desarrollador y deja disponible la respuesta en el código cliente, abstrayendo al programador de la necesidad de procuparse por la conexión entre las capas cliente y servidor y permitiendo que el código funcione como parte de un mismo ecosistema.",
          "p7": {
            "s1": "Ahora sólo es necesario inicializar el servidor. Para ello es necesario crear un módulo con un bundle start que se encargue de iniciar el ",
            "l1": ["/docs/bee", "BEE"],
            "s2": ". El código del bundle start es el siguiente:"
          },
          "c3": "tpl3",
          "q2": {
            "s1": "En el ",
            "l1": ["/tutorial/web", "Tutorial Web"],
            "s2": "disponible, se implementa un bridge que permite ver en acción el funcionamiento de las <strong>apis backend</strong> de BeyondJS."
          }
        },
        "comments": {
          "h3#bundleBackend": ["Comentarios mágicos", "Bundle <span className=\"inline\">backend</span>"],
          "p1": "Los bundles backend representan código javascript que es ejecutado en el servidor y sólo pueden ser utilizados por módulos que tambien funcionen en el servidor. Dicho en otras palabras, representan cualquier servicio típico de NodeJS, con la salvedad de que, en entorno de desarrollo, son ejecutados por medio de un BEE o proceso BeyondJS lo cual aumenta la productividad al poder trabajar con <strong>HMR</strong> de forma automatizada y sin configuración."
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