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

  const __pkg = new __Bundle("@beyond/docs/docs/basic/projecs/txt").package('en');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 843098890,
    creator: function (require, exports) {
      exports.txt = {
        "introduction": {
          "t1": "Introduction",
          "p1": "In BeyondJS, modules represent the basic unit of development and have features that need to be kept in mind. To fully understand the differences and advantages of the BeyondJS module ecosystem, it is first necessary to review how JavaScript modules work and how they are integrated into the development process today.",
          "p2": {
            "t1": "A ",
            "e1": {
              "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules",
              "label": "JavaScript module"
            },
            "t2": "is represented by a single file, with independent tasks and its own scope. This module can export elements and be imported by other modules that consume the variables, objects, or functions it provides."
          },
          "p3": "The bundle modules, for their part, usually use a syntax compatible with the imports included in EcmaScript 6. They are the ones who are in charge of analyzing the dependency tree, removing those elements that are not in the code, and generating a \"bundle\" that is in turn, a container of all the modules used by the development team.",
          "p4": "In BeyondJS, the module concept is more encompassing and split into: Modules and Internal Modules."
        },
        "internalModules": {
          "t1": "Internal Modules",
          "p1": "They represent the known concept of javascript modules, with the difference that the programmer can define whether they are available to be consumed from an external module or not. That is achieved using the /*bundle*/ magic comment placed on the export.",
          "p2": "Internal modules can be imported by any other internal module, thriough the relative file path."
        },
        "modules": {
          "t1": "Modules",
          "p1": "As mentioned before, they represent the minimum development unit of BeyondJS and it is composed of all the internal modules that it requires.",
          "p2": "It allows the concept of a module in BeyondJS to be closer to the definition of a module in general IT, where it represents functionality within a program or system. Although JavaScript modules are compatible with this concept, in practice a module (under the computing concept) of a project, application, or library contains a whole set of JavaScript modules (internal modules in BeyondJS), together with the rest of the tools and technologies required to compose it, such as styles, images or text.",
          "p3": "In other words, BeyondJS is the container of all the tools and technologies necessary to ensure the complete functioning of functionality represents a developed functionality and where the developer can define what he wants to export so that can be consumed externally and what not."
        },
        "workingWithModules": {
          "t1": "Working with modules",
          "p1": "Modules must be contained in a project and are consumed by it, but they can also be used by other projects that import them as libraries.",
          "p2": {
            "t": "BeyondJS handles the import of modules via the <strong>npm</strong> spec, allows you to define the structure@scope/project-name/module-name. The scope is an optional value, and along with the project name are properties defined in the project configuration and are found in the ",
            "link": ["/projects/json", "project.json"]
          },
          "p3": "The module name definition is a vital feature in BeyondJS. It helps with future maintenance of the project, allowing modules and folders for restructiring without the behavior of the module being compromissed by imports.",
          "p4": "When BeyondJS brings up the development environment, it performs a mapping of the existing modules, and interprets the paths of each module to be able to reference them correctly when imported. Later on, in the deployment phase, it is in charge of assembling the necessary structure and converting the imports."
        },
        "identifierOfAModule": {
          "t1": "Indentifier of a module",
          "p1": "The identifier of a module is the one used to import it",
          "p2": "In BeyondJS, identifiers are defined by the bundle (project) identifier, and the module name.",
          "p3": "To exemplify it, suppose a \"project\" project is created under the @company scope, then we add a module named login the path to import this module would be:",
          "p4": "Now, modules are containers for bundles and bundles represent the final included file. Therefore, to import an unbundle, it is necessary to specify the bundle to consume.",
          "p5": "To exemplify it, suppose we have a bundle code that makes an Auth object available inside the login module that we have created. Our import would be as follows:",
          "items": ["Module configuration", "Bundles"]
        },
        "moduleConfiguration": {
          "t1": "Module Configuration",
          "p1": "The module configuration file is the module.json",
          "p2": "The configuration properties are:",
          "items": ["<strong>name</strong> <string>: Defines the name of the module, necessary so that the elements can be imported.", "<strong>platforms</strong> <array>: Defines the platforms supported by the module. The supported values are the identifiers of the existing platforms.", "<strong>[bundle]</strong> <bundle>: Refers to the identifier name of the type of bundle that you want to add to the module. A module can have one or more bundles. Each bundle receives a configuration object with the processors it uses and some inherent variation of the bundle type added.", "Bundles", "Widgets"]
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