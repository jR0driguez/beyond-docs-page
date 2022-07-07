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
    "module": "@beyond/docs/docs/starting/dashboard",
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
    hash: 3972027414,
    creator: function (require, exports) {
      exports.txt = {
        "dashboard": {
          "h1#dashboard": "Dashboard",
          "p1": "BeyondJS provee un Dashboard integrado, que busca mejorar la experiencia de desarrollo de varias maneras, todas enfocadas en brindar un soporte al programador en tareas diarias que suelen consumir tiempo. Estas tareas abarcan todo el circuito del desarrollo, desde la creación de un proyecto nuevo hasta el despliegue del mismo.",
          "p2": {
            "s1": "Se encuentra disponible siempre que el servidor de desarrollo se levanta en ",
            "e1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": "y permite realizar la creación de un nuevo proyecto u obtener información relevante del proyecto existente, como se verá más adelante."
          },
          "i1": ["/images/dashboard/empty.png", "BeyondJS Dashboard workspace"]
        },
        "features": {
          "h2#features": "Funcionalidades",
          "items": ["Creación de proyectos en blanco o desde plantillas.", "Creación de módulos.", "Detalle informativo de los proyectos y módulos", "Detección de errores en tiempo real generales en proyectos, módulos, las dependencias y en los módulos consumidores", "Detección de errores de tipado con typescript.", "Detección de errores de runtime.", "Manejo de errores en real time en procesos Nodepor medio de HMR.", "Configuración de entornos de desarrollo.", "Edición de código", "Navegación de proyectos.", "Manejo de dependencias.", "Gestión de archivos estáticos y plantilla del proyecto.", "Gestión de despligue de proyectos."]
        },
        "structure": {
          "h2#structure": "Estructura",
          "i1": ["/images/dashboard/dashboard-structure.png", "BeyondJS Dashboard structure"],
          "p1": "El Dashboard funciona como un marco de trabajo (Workspace) y cada componente que lo integra tiene definido un nombre que permite identificarlo, estos son:",
          "items": ["<strong>PreAside</strong>: Primer panel izquierdo, iconográfico de acceso general de acciones las cuales varian si se tiene o no un proyecto abierto", "<strong>Aside</strong>: Primer panel izquierdo, iconográfico de acceso general de acciones las cuales varian si se tiene o no un proyecto abierto", "<strong>Boards</strong>: Cada panel abierto en la pantalla principal es denominado board, la lista de aplicaciones es un board, el detalle de la aplicación o la pantalla de configuración tambien lo son.", "<strong>Panels</strong>: Cada división de pantalla generada en el workspace"]
        },
        "ts": {
          "h2#integrationWithTypeScript": "Integracion con TypeScript",
          "p1": "<strong>Typescript</strong> es un lenguaje tipado y el chequeo de tipos es una tarea pesada. El Dashboard hace uso del compilador de typescript para detectar en tiempo real los errores que pueden existir en el código y suministrar información al programador acerca de ellos en trés niveles distintos:",
          "i1": ["/images/dashboard/errors.png", "BeyondJS Dashboard structure"],
          "items": ["<strong>Módulo en desarrollo</strong>: El módulo en el cual se está trabajando", "<strong>Dependencias</strong>: Los módulos importados por el módulo en desarrollo.", "<strong>Consumidores</strong>: Los módulos que consumen el módulo sobre el cual estamos trabajando."],
          "p2": "El programador puede acceder a un módulo/bundle y ver los errores existentes en el o en un consumidor o dependencia. Identificar de forma simple el archivo y acceder directamente a la línea donde debe realizar la corrección.",
          "q1": {
            "h3#typescriptTimes": "Tiempos de typescript",
            "s1": "Debido a que los tiempos de análisis del compilador de typescript son extensos cuando hace el chequeo de tipos, BeyondJS implementa una estrategía hibrida que gestiona en simultáneo el chequeo de tipos por medio del compilador y la actualización de archivos con HMR por medio del transpilador, esto ofrece la posibilidad de ver los cambios al momento y recibir la información de errores en paralelo. Es posible que la primera vez que se realice la validacion de tipos de un proyecto, este proceso tome un tiempo extendido el cual luego se minimiza con la gestión de cache que integra BeyondJS"
          }
        },
        "editor": {
          "h2#editorAndBrowserIncluded": "Editor y Navegador incluidos",
          "p1": "El Dashboard cuenta con un editor de código integrado que puede resultar sumamente útil para acceder a los archivos de forma rápida y corregir errores detectados, trabajar con estilos o con los bridges. Asimismo, tambien cuenta con un Board que permite navegar los proyectos.",
          "q1": {
            "s1": "El editor del Dashboard no es un IDE y no pretende reemplazar las funciones de uno."
          },
          "i1": ["/images/dashboard/editor.png", "Beyond Dashboard with editor and iframe navigator"]
        },
        "deploy": {
          "p1": {
            "s1": "El Dashboard genera el código necesario y optimizado para desplegar los proyectos. Puedes leer en detalle el funcionamiento en la sección de",
            "l1": ["/docs/deployment", "Despliegue de proyectos"],
            "s2": "."
          }
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