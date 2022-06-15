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

  const __pkg = new __Bundle("@beyond/docs/docs/basic/widgets/intro/txt").package('es');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 3411778956,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "p1": {
            "t1": "En BeyondJS, La arquitectura de desarrollo para aplicaciones o proyectos webs, está diseñada para trabajar con una estructura de",
            "e1": {
              "href": "https://micro-frontends.org",
              "label": "microfrontends"
            },
            "t2": ", brindando la posibilidad de integrar diferentes stacks tecnológicos en un mismo proyecto, lo que permite evaluar qué tecnología es más conveniente para desarrollar funcionalidades específicas, esto se logra por medio de la creación de <strong>widgets</strong>"
          },
          "p2": {
            "t1": "Un Widget es un tipo de ",
            "l1": "bundle",
            "t2": " disponible en BeyondJS y es implementado por medio de un",
            "e1": {
              "href": "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
              "label": "Web Component"
            },
            "t3": " con ",
            "e2": {
              "href": "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM",
              "label": "shadow DOM"
            },
            "t4": "para encapsular su contenido. Al ser un componente web, puede definir propiedades y métodos, también puede ser accedido por medio de la Api Web de JavaScript. Otra ventaja importante de los widgets, es que realizan la carga de dependencias a demanda y sólo cuando son requeridas, optimizando así los tiempos de carga de los componentes."
          },
          "n1": {
            "t1": "BeyondJS implementa las técnicas de renderizado sobre widgets, esto ofrece la posibilidad de integrar renderizados híbridos en un proyecto, puedes leer más sobre ello en la",
            "l1": ["/docs/rendering", " sección de renderizado"]
          },
          "p4": {
            "t1": "BeyondJS brinda soporte para trabajar con frameworks/librerías como",
            "links": {
              "react": "https://reactjs.org/",
              "vue": "https://vuejs.org/",
              "svelte": "https://svelte.dev/"
            },
            "t2": " y tiene disponible la posibilidad de integrar nuevas librerías o herramientas.",
            "using": {
              "react": {
                "title": "Using <span className=\"inline\">React</span> ",
                "p1": "React tiene soporte automático por medio de typescript en BeyondJS, que utiliza Babel para convertir el código. Por tanto, habiendo agregado el procesador ts y teniendo instalada la dependencia de React, tu módulo ya está listo para trabajar con ReactJS.",
                "p2": "la configuración de react se realiza por medio de los archivos .tsconfig, cada módulo viene con un archivo configurado por defecto con compatibilidad para trabajar con react. puedes leer más sobre ello en la documentación de typescript",
                "e1": {
                  "href": "https://www.typescriptlang.org/docs/handbook/jsx.html",
                  "label": "documentación de typescript"
                }
              },
              "vueSvelte": {
                "title": "Usando <span className=\"inline\">Svelte</span> o <span className=\"inline\">Vue</span>",
                "p1": {
                  "t1": "Cada framework tiene su propio ",
                  "l1": "procesador",
                  "t2": "on el nombre de la libreria. para utilizarlos, solo es necesario incluir el procesador en la configuración del bundle."
                }
              }
            }
          }
        },
        "creation": {
          "notice": {
            "t1": "Un widget es un tipo de bundle y en BeyondJS tiene una filosofía de carga modular y los bundles son la representación de código final a ser ejecutado en el entorno javascript. Si quieres leer acerca de todos los tipos de bundles existentes, puedes dirigirte a la ",
            "link": " sección de bundles."
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
              "t1": "La configuración manual, se realiza agregando la definición del bundle de tipo widget en el",
              "l1": "module.json",
              "t2": " del módulo."
            },
            "p2": "El código anterior, define un bundle de tipo widget con el nombre del web-component como web-login y con typescript como procesador."
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
          "p1": "Todo widget debe exponer una clase Controller definida. El objeto Controller es el responsable de la declaración y manejo del web-component que representa al widget. El controller tiene una estructura como la siguiente:",
          "p2": "En el código anterior, la clase Controller extiende del objeto ReactWidgetController que es el controlador base disponibilizado para trabajar con React. BeyondJS tiene disponible un controlador para los distintos frameworks de vista. Los objetos son:",
          "and": " and ",
          "p3": "Todos los controladores manejan la misma interfaz, pero están a su vez enfocados en integrar y funcionar con el framework de vista que se esté utilizando.",
          "properties": {
            "widget": {
              "t1": "Se define como un getter y debe retornar el componente de vista principal.",
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