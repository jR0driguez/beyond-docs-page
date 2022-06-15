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

  const __pkg = new __Bundle("@beyond/docs/docs/basic/widgets/intro/txt").package('en');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 1410068289,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "and": " and ",
          "h1": "Widgets",
          "p1": {
            "t1": "The BeyondJS development architecture in  web applications or web projects is designed to work with a ",
            "e1": {
              "href": "https://micro-frontends.org",
              "label": "microfrontends"
            },
            "t2": " structure, enabling the integration of different technological stacks in the same project and allowing the developer to have the possibility of evaluate which technology is more convenient for a specific functionality, this is achieved by creating widgets."
          },
          "p2": {
            "t1": "A Widget is a type of ",
            "l1": "bundle",
            "t2": " available in BeyondJS and is implemented through a ",
            "e1": {
              "href": "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
              "label": "Web Component"
            },
            "t3": " width a ",
            "e2": {
              "href": "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM",
              "label": "shadow DOM"
            },
            "t4": " to encapsulate its content. Being a web component, it can define properties, and methods, and it can also be accessed through the JavaScript Web API. Another important advantage of widgets, is that they load dependencies on demand, and only  when they are required, optimizing project loading times."
          },
          "n1": {
            "t1": "BeyondJS implements widget rendering techniques, this offers the possibility to integrate hybrid renders in a project, you can read more about it in the",
            "l1": ["/docs/rendering", " rendering chapter."]
          },
          "p4": {
            "t1": "BeyondJS provides support for working with frameworks/libraries such as ",
            "links": {
              "react": "https://reactjs.org/",
              "vue": "https://vuejs.org/",
              "svelte": "https://svelte.dev/"
            },
            "t2": " and has the possibility of integrating new libraries or tools available.",
            "using": {
              "react": {
                "title": "Using <span className=\"inline\">React</span> ",
                "p1": "React is automatically supported via typescript in BeyondJS, which uses Babel to convert the code. Hence, with the ts processor added and the React dependency installed, your module is now ready to work with ReactJS.",
                "p2": "la configuración de react se realiza por medio de los archivos .tsconfig, cada módulo viene con un archivo configurado por defecto con compatibilidad para trabajar con react. puedes leer más sobre ello en la ",
                "e1": {
                  "href": "https://www.typescriptlang.org/docs/handbook/jsx.html",
                  "label": "Typescript documentation"
                }
              },
              "vueSvelte": {
                "title": "Usando <span className=\"inline\">Svelte</span> o <span className=\"inline\">Vue</span>",
                "p1": {
                  "t1": "Each framework has its own",
                  "l1": "processor",
                  "t2": " If you want to integrate Vue, you must add the Vue processor in the bundle configuration. If instead you want to work with Svelte, you must add the svelte processor in the bundle configuration.\n"
                }
              }
            }
          }
        },
        "creation": {
          "notice": {
            "t1": "Widgets are a type of bundle, if you want to read about all the existing bundle types, you can go to the",
            "link": " bundles chapter."
          },
          "p1": "Los widgets exponencian las ventajas ya existentes en los componentes web gracias al encapsulamiento. Permiten integrar con una mínima configuración diferentes tecnologías y ofrecen una api simple para gestionar sus propiedades, metodos e interacción con el resto de componentes de un proyecto web. También, pueden ser disponibilizados como paquetes NPM y utilizados desde cualquier proyecto que utilice javascript <strong> sin necesidad </strong> de requerir de BeyondJS.",
          "p2": "Existen tres tipos de widgets:",
          "items": ["<strong>page:</strong> Diseñados para crear las diferentes páginas del aplicativo, recibe parametros de configruación asociados a la URL y al uso de layouts.", "<strong>layout:</strong> Representan a contenedores de páginas, permiten separar código o lógicas transversales a páginas. Un layout puede también contener otro layout.", "<strong>default:</strong> Exponen un componente web bajo el nombre definido y no requieren de ningún tratamiento adicional de parte de BeyondJS."],
          "p3": {
            "t1": "Todos los widgets implementan un objeto Controller quien es el encargado de manejar el ciclo de vida del componente web y permitir la definción de funcionalidades de renderizado, estado y navegación.",
            "l1": "1de renderizado",
            "t2": " estado y navegación."
          },
          "manual": {
            "p1": {
              "t1": "The manual configuration is done by adding the definition of the widget type bundle in the",
              "l1": "module.json",
              "t2": " of the module"
            },
            "p2": "The code above defines a bundle of type widget with the name of the web component as web login and with typescript as renderer."
          },
          "dashboard": {
            "p1": {
              "t1": " Todos los bundles pueden ser creados desde el formulario de creación de módulos en el",
              "l1": "Dashboard",
              "t2": "En este caso, <span class=\",beyond\">BeyondJS</span> se encarga de generar la estructura de carpetas y los archivos necesarios, incluyendo la definición del <span className=\"inline\">Controller</span> y los archivos <span className=\"inline\">module.json</span> y <span className=\"inline\">.tsconfig</span>"
            },
            "p2": "Cuando los bundles son creados por medio del Dashboard, los archivos son generados y módificados por el servicio de desarrollo."
          }
        },
        "controller": {
          "p1": "Every widget must expose a defined Controller class. The Controller object is responsible for the declaration and handling of the web-component that represents the widget. The controller has a structure like the following:",
          "p2": "n the code above, the Controller class extends the ReactWidgetController object which is the base controller made available to work with React. BeyondJS has a controller available for the various view frameworks. The objects are:",
          "and": " and ",
          "p3": "All controllers handle the same interface, but are focused on integrating and working with the view framework that is being used.",
          "properties": {
            "widget": {
              "t1": "Defined as a getter and should return the main view component.",
              "l1": "IWidgetStore"
            }
          },
          "methods": {
            "createStore": {
              "t1": "Allows adding logic for handling the widget State, it must return an object with the IWidgetStore interface",
              "l1": "IWidgetStore"
            }
          }
        },
        "install": {
          "prerequisites": ["Node ^14.17.4.", "Estar familiarizado con manejadores de dependencias como npm o yarn."],
          "title1": "Instalamos BeyondJS",
          "p1": "BeyondJS se instala de forma global y puede ser ejecutado en cualquier directorio. Para utilizarlo, sólo necesitas ir a la carpeta en la cual desees trabajar, abrir la consola de comandos y ejecutar \"beyond\"",
          "p2": "Si todo sale bien, aparecerá un mensaje diciéndote que BeyondJS se está ejecutando y el puerto de acceso para ir al Dashboard."
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