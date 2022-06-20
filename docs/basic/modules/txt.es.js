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

  const __pkg = new __Bundle("@beyond/docs/docs/basic/modules/txt").package('es');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 4250864004,
    creator: function (require, exports) {
      exports.txt = {
        "introduction": {
          "t1": "Introducción",
          "p1": "En BeyondJS los módulos representan la unidad básica de desarrollo y tienen características que es necesario tener presente. Para poder entender bien las diferencias y ventajas del ecosistema de módulos de BeyondJS, es necesario antes repasar cómo funcionan los módulos de JavaScript y cómo se integran en el proceso de desarrollo en la actualidad.",
          "p2": {
            "t1": "Un ",
            "e1": {
              "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
              "label": "modulo JavaScript"
            },
            "t2": "hoy es representado por un único archivo, con tareas independientes y un scope propio. Este módulo puede exportar elementos y ser importado por otros módulos que consumen las variables, objetos o funciones que este provee."
          },
          "p3": "Los empaquetadores por su parte, suelen utilizar una sintaxis compatible con las imports incluidos en EcmaScript 6, pero son ellos quienes se encargan de analizar el árbol de dependencias, quitando aquellos elementos que no son utilizados en el código y generando un “bundle” que es a su vez, un contenedor de todos los módulos utilizados por el equipo de desarrollo.",
          "p4": "En BeyondJS, el concepto de módulo es un poco más abarcativo y se divide en dos: Módulos y Módulos Internos."
        },
        "internalModules": {
          "t1": "Modulos internos",
          "p1": "Representan el concepto de módulos JavaScript conocido, con la diferencia de que el programador puede definir si estos quedan disponibles para ser consumidos desde un módulo externo o no. Esto se logra por medio del comentario mágico /*bundle*/ que se coloca en la exportación.",
          "p2": "Los módulos internos, pueden ser importados por cualquier otro módulo interno por medio de la ruta relativa del archivo."
        },
        "modules": {
          "t1": "Modules",
          "p1": "Como se comentó antes, representan la unidad mínima de desarrollo de BeyondJS y está compuesto por todos los módulos internos que requiera",
          "p2": "Esto permite que el concepto de módulo en BeyondJS se acerque más a la definición de un módulo en la informática general, donde este representa una funcionalidad dentro de un programa o sistema. Aunque los módulos JavaScript son compatibles con este concepto, en la práctica un módulo (bajo el concepto informático) de un proyecto, aplicación o librería contiene todo un conjunto de módulos JavaScript (módulos internos en BeyondJS), en conjunto con el resto de herramientas y tecnologías que se requieran para componerlo, como estilos, imágenes o texto.",
          "p3": "En otras palabras, en BeyondJS es el contenedor de todas las herramientas y tecnologías necesarias para garantizar el funcionamiento completo de una funcionalidad representa una funcionalidad desarrollada y donde el programador tiene la capacidad de definir que desea exportar para que pueda ser consumido de forma externa y que no."
        },
        "workingWithModules": {
          "t1": "Trabajando con modulos",
          "p1": "Los módulos deben estar contenidos en un proyecto y son consumidos por este, pero también pueden ser consumidos por otros proyectos que los importen como bibliotecas.",
          "p2": {
            "t": "BeyondJS gestiona la importación de módulos a través de la especificación npm que permite definir la estructura@scope/nombre-proyecto/nombre-módulo. El scope es un valor opcional y en conjunto con el nombre del proyecto son propiedades definidas en la configuración del proyecto y se encuentran en el ",
            "link": ["/projects/json", "project.json"]
          },
          "p3": "La definición de nombre de módulos es una característica vital en BeyondJS ya que ayuda al mantenimiento futuro del proyecto, permitiendo que los módulos y carpetas puedan reestructurarse sin que el comportamiento del mismo sea puesto en riesgo a causa de las importaciones.",
          "p4": "Cuando BeyondJS levanta el entorno de desarrollo, realiza un mapeo de los módulos existentes e interpreta las rutas de cada módulo para poder referenciarlas correctamente cuando estos son importados. Posteriormente, en la fase de despliegue, se encarga de armar la estructura necesaria y convertir las importaciones."
        },
        "identifierOfAModule": {
          "t1": "Identificador de un modulo",
          "p1": "El identificador de un módulo es el que se utiliza para importarlo",
          "p2": "En BeyondJS los identificadores se definen por medio del identificador del paquete (proyecto) y el nombre del módulo.",
          "p3": "Para ejemplificarlo, supongamos se crea un proyecto \"project\" bajo el scope @company, luego agregamos un módulo de nombre login, la ruta para importar este módulo sería:",
          "p4": "Ahora bien, los módulos, son contenedores de bundles y los bundles, representan el archivo final incluido. Por tanto, para poder hacer una importación de unbundle, es necesario especificar el bundle a consumir.",
          "p5": "Para ejemplificarlo, supongamos que tenemos un bundlecode que disponibiliza un objeto Auth adentro del módulo login que hemos creado. Nuestra importación quedaría de la siguiente manera:",
          "items": ["Configuracion de modulos", "Bundles"]
        },
        "moduleConfiguration": {
          "t1": "Configuracion de modulos",
          "p1": "El archivo de configuración de módulos es el module.json",
          "p2": "Las propiedades de configuración son:",
          "items": ["<strong>name</strong> <string>: Define el nombre del módulo, necesario para que los elementos puedan ser importados.", "<strong>platforms</strong> <array>: Define las plataformas soportadas por el módulo. Los valores soportados son los identificadores de las plataformas existentes.", "<strong>[bundle]</strong> <bundle>: Refiere al nombre identificador del tipo de bundle que se desea agregar en el módulo. Un módulo puede poseer uno o varios bundles. Cada bundle recibe un objeto de configuración con los procesadores que utiliza y alguna variación inherita del tipo de bundle agregado.", "Bundles", "Widgets"]
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