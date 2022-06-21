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

  const __pkg = new __Bundle("@beyond/docs/docs/starting/intro/txt").package('es');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 14462042,
    creator: function (require, exports) {
      exports.txt = {
        "universal": {
          "h1": "¿Qué es <span className=\"beyond\">BeyondJS</span>?",
          "i1": ["/images/tutorials/beyond-environments.png", "Beyond environments"],
          "p1": "BeyondJS es un meta-framework basado en typescript, diseñado para crear proyectos que funcionen en diferentes entornos de ejecución JavaScript, manteniendo el foco en garantizar al programador una experiencia universal de desarrollo. Lo hace manteniéndose agnóstico a las librerías y tecnologías existentes, buscando dejar un camino estandarizado que permita su integración.",
          "p2": "Los factores que garantizan una experiencia de desarrollo homogénea, sin importar el entorno para el que se trabaje son:",
          "items": ["<strong>HMR en código cliente y código Node</strong>: de forma automática, sin configuraciones adicionales. Además, brinda una API al desarrollador que permite definir cuando y que desea actualizar.", "<strong>Desarrollo modular</strong>: BeyondJS tiene una filosofía de generación de bundles pequeños que son cargados a demanda en el momento en que son requeridos. No trabaja con un árbol de dependencias y por tanto no requiere de empaquetadores cómo webpack o parcel.", "<strong>Gestión de distribuciones</strong>: BeyondJS permite definir distribuciones para las plataformas de desarrollo que desean utilizarse y gestiona la, disponibilización del código final en base a ello."]
        },
        "overview": {
          "h2": "Manejo de proyectos",
          "p1": "Los proyectos en BeyondJS, tienen un enfoque de compatibilidad con NPM, lo cual les permite ser pensados como paquetes que podrían eventualmente, ser publicados directamente en NPM y posteriormente utilizados en cualquier otro proyecto, tanto de BeyondJS como externo.",
          "p2": "Un proyecto es definido por medio de la especificación de su scope, nombre y de al menos una distribución. Las distribuciones permiten identificar el entorno de ejecución sobre el cual se espera funcione el proyecto y algunos datos adicionales que pueden resultar relevantes para el proceso de compilación y deployment. Asimismo, se puede configurar múltiples distribuciones en simultáneo, brindándole al desarrollador la flexibilidad de validar el comportamiento de su proyecto en los diferentes ecosistemas configurados.",
          "p3": {
            "s1": "Los proyectos contienen ",
            "l1": "módulos",
            "s2": " estos representan la unidad mínima de desarrollo en BeyondJS y tienen la capacidad de definir sobre que plataforma funcionan. Dato que es interpretado por las",
            "l2": "distribuciones",
            "s3": " configuradas en el entorno de desarrollo y al momento de realizar deploy de un proyecto."
          },
          "p4": {
            "s1": "Si quieres conocer más en detalle acerca de esto y sobre cómo crear proyectos en BeyondJSte recomendamos ir a la ",
            "l1": " sección de Proyectos"
          }
        },
        "features": {
          "h2": "Features",
          "p1": "A continuación, listamos algunas de las características más relevantes de BeyondJS.",
          "items1": ["<strong>Universal deployment</strong>: Un mismo código, cualquier entorno.", "<strong>Carga modular y a demanda</strong>: Esto quiere decir que el código sólo carga una vez, cuando es requerido.", "<strong>Dashboard</strong>  o panel de control muy poderoso para desarrolladores.", "<strong>Plug & play</strong> de módulos.", "<strong>Ecosistema</strong> único de desarrollo entre Backend y Frontend. ", "<strong>Real Time</strong>  listo para implementar con web sockets.", "<strong>Integración automática</strong> con frameworks de vistas como React, Vue, Svelte.", "<strong>Typescript más inteligente</strong>: transpilado y chequeo de tipos en paralelo, para mejor productividad y rendimiento.", "<strong>HMR</strong>  modular y en el código backend de forma automática.", "<strong>Sin árbol de dependencias</strong> BeyondJS trabaja bajo un paradigma distinto al que usan empaquetadores como webpack.", "<strong>Jamstack + SSR.</strong>", "Entorno de ejecución de servicios gestionados por BeyondJS.", "Web Components integrados.", "<strong>Multilenguaje</strong> manejado por medio de bundles.", "Manejo de plantillas y sobreescritura."]
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