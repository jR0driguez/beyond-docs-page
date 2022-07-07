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
    "module": "@beyond/docs/docs/basic/processors",
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
    hash: 178775642,
    creator: function (require, exports) {
      exports.txt = {
        "processors": {
          "h1#processors": [" Conceptos básicos", "Procesadores"],
          "p1": "Muchas de las herramientas o lenguajes utilizados en el entorno web requieren un procesamiento previo para ser interpretados por los navegadores o entornos de ejecución, este es el trabajo que realizan los procesadores.",
          "p2": "BeyondJS ofrece una serie de procesadores integrados, que permiten utilizar las principales tecnologías de la industria web y brinda soporte para que puedan integrarse nuevos procesadores en caso de que se requiera.",
          "p3": "BeyondJS trabaja distinto a empaquetadores como Webpack o Parcel. No necesita evaluar el arbol de dependencias de un proyecto, ni aplicar técnicas para separación de código o tree shaking. Gracias a su naturaleza módular y por medio de los procesadores, el empaquetado de código se hace a nivel de bundles.",
          "p4": {
            "s1": "Los procesadores son componentes de BeyondJS que permiten interpretar, parsear, transpilar o compilar código (según sea el caso) de los lenguajes o tecnologías utilizadas en un ",
            "l1": ["/bundles", "Bundle"]
          },
          "s2": "."
        },
        "types": {
          "h3#types": "Procesadores existentes",
          "items1": ["ts: Permite trabajar con typescript y archivos `tsx` para react.", "sass: Brinda soporte para trabajar con archivos SASS de extensión <span class=\"inline\">.scss</span>", "vue: Brinda soporte para trabajar con archivos single-file-components de vue.", "svelte: Permite trabajar con archivos single-file-component de svelte."]
        },
        "properties": {
          "h3#properties": "Propiedades",
          "p1": "Todos los procesadores cuentan con las siguientes propiedades:",
          "items2": ["<strong>Path</strong> string opcional: Permite definir el directorio en donde se encuentran los archivos del procesador. Si se agrega un valor, el mismo es interpretado como un directorio de posición relativa a la ubicación del module.json definido.", "<strong>Files</strong> array opcional: Permite definir la lista de archivos o carpetas incluidos en el procesador. Si la propiedad path se encuentra definida, los archivos serán buscados adentro del directorio especificado, caso contrario, serán buscados de forma relativa a la ubicación del module.json. Se puede pasar como valor de la propiedad un arreglo con una entrada *, de esta forma se estaría indicando que se incluyen todos los archivos en el directorio especificado."]
        },
        "examples": {
          "h3#examples": "Ejemplos",
          "p1": "El siguiente ejemplo, corresponde a la definición de un bundle de tipo code, a continuación explicamos el detalle:",
          "items3": ["El bundle hace uso de dos procesadores: sass y ts.", "El procesador sass incluye todos los archivos en el directorio /code/scss el cual es relativo a la ubicación del archivo module.json.", "El procesador ts sólo incluye el archivo component.ts el cúal se encuentra en el directorio /code/ts relativo a la ubicación del archivo module.json."]
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