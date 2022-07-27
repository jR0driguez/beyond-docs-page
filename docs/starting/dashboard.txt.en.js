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
  }).package('en');

  ;
  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 1848737231,
    creator: function (require, exports) {
      exports.txt = {
        "dashboard": {
          "h1#dashboard": "Dashboard",
          "p1": "BeyondJS provides an integrated Dashboard, which seeks to improve the development experience in several ways, all focused on giving support to the developer in daily tasks that are often time-consuming. These tasks span the entire development loop, from creating a new project to deploying it.",
          "p2": {
            "s1": "It is available whenever the development server is started at ",
            "e1": ["http://localhost:4000", "http://localhost:4000"],
            "s2": "and allows creating a new project or obtaining relevant information from the existing project, as will be seen later."
          },
          "i1": ["/images/dashboard/empty.png", "BeyondJS Dashboard workspace"]
        },
        "features": {
          "h2#features": "Features",
          "items": ["Creation of projects anew or from templates.", "Module creation.", "Informative detail of the projects and modules.", "General real-time error detection in projects, modules, dependencies, and consuming modules.", "Typescript error detection.", "Detection of runtime errors.", "Handle errors in real-time in Node processes through HMR.", "Setting up development environments.", "code editing", "Project navigation", "Dependency handling.", "Management of static files and project templates", "Project deployment management"]
        },
        "structure": {
          "h2#structure": "Structure",
          "i1": ["/images/dashboard/dashboard-structure.png", "BeyondJS Dashboard structure"],
          "p1": "The Dashboard works as a framework (Workspace), and each component that integrates it has a defined name that allows its identification. These are:",
          "items": ["<strong>PreAside</strong>: First left panel, iconography of general access to actions which vary depending on whether or not you have a project open", "<strong>Aside</strong>: Secondary menu that displays additional features associated with the option selected in the preview.", "<strong>Boards</strong>: Each open panel on the main screen is called a board. The application list is a board. The application detail or the configuration screen are also boards.", "<strong>Panels</strong>: Each screen division generated in the workspace"]
        },
        "ts": {
          "h2#integrationWithTypeScript": "Integration with TypeScript",
          "p1": "<strong>Typescript</strong> is a typed language, and type checking is a heavy task. The Dashboard utilizes the typescript compiler to detect errors that may exist in the code in real-time and provide information about them to the developer at three different levels:",
          "i1": ["/images/dashboard/errors.png", "BeyondJS Dashboard structure"],
          "items": ["<strong>Module in development</strong>: The module which is being worked on.", "<strong>Dependencies</strong>: The modules imported by the module under development.", "<strong>Consumers</strong>: The modules that consume the module on which we are working."],
          "p2": "The developer can access a module/bundle and see the existing errors in it or a consumer or dependency. Easyly identify the file and directly access the line where you must correct.",
          "q1": {
            "h3#typescriptTimes": "Typescript times",
            "p1": "Because the typescript compiler's parsing times are long when doing type checking, BeyondJS implements a hybrid approach that simultaneously handles type checking by the compiler and updating files with HMR by the transpiler. It offers the possibility to see the changes at the moment and receive the information of errors in parallel. It is possible that the first time the type validation of a project that is taking place, this process takes an extended time, which is then minimized with the cache management that BeyondJS integrates."
          }
        },
        "editor": {
          "h2#editorAndBrowserIncluded": "Editor and Browser included",
          "p1": "The dashboard has a built-in code editor that can be extremely useful for quickly accessing files and correcting detected errors, working with styles or bridges. Likewise, it also has a Board that allows you to navigate the projects.",
          "q1": {
            "s1": "El editor del Dashboard no es un IDE y no pretende reemplazar las funciones de uno."
          },
          "i1": ["/images/dashboard/editor.png", "Beyond Dashboard with editor and iframe navigator"]
        },
        "deploy": {
          "p1": {
            "s1": "The Dashboard generates the necessary and optimized code to deploy the projects. Read in detail how it works in the ",
            "l1": ["/docs/deployment", "Despliegue de proyectos"],
            "s2": " chapter."
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