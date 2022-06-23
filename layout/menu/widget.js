define(["exports", "@beyond-js/widgets/render/ts", "@beyond-js/react-widgets/controllers/ts", "@beyond-js/kernel/core/ts", "@beyond/docs/layout/styles/code", "react", "@beyond/docs/store/code", "@beyond/ui/icons/code", "@beyond/ui/image/code", "@beyond/docs/components/html/code", "@beyond-js/kernel/routing/ts", "@beyond/docs/ui/icons/code", "@beyond/ui/reactive-model/ts", "@beyond-js/kernel/texts/ts", "@beyond-js/kernel/bundle/ts", "@beyond-js/kernel/styles/ts"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.WidgetMenu = _exports.Controller = void 0;

  const {
    Bundle: __Bundle,
    externals
  } = require('@beyond-js/kernel/bundle/ts');

  const __pkg = new __Bundle("@beyond/docs/layout/menu/widget").package();

  externals.register(new Map([["react", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/docs/layout/styles/code", "@beyond/docs/store/code", "@beyond/ui/icons/code", "@beyond/ui/image/code", "@beyond/docs/components/html/code", "@beyond/docs/ui/icons/code", "@beyond/ui/reactive-model/ts"]));

  require('@beyond-js/widgets/render/ts').widgets.register([{
    "name": "menu-layout",
    "id": "@beyond/docs/layout/menu/widget",
    "is": "layout"
  }]);

  require('@beyond-js/kernel/styles/ts').styles.register('@beyond/docs/layout/menu/widget');

  const ims = new Map();
  /****************************
  INTERNAL MODULE: ./controller
  ****************************/

  ims.set('./controller', {
    hash: 3350210028,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controller = void 0;

      var _ts = require("@beyond-js/react-widgets/controllers/ts");

      var _menu = require("./menu");

      var _store = require("./store");
      /*bundle*/


      class Controller extends _ts.ReactWidgetController {
        get Widget() {
          return _menu.WidgetMenu;
        }

        async fetch() {}

        createStore() {
          return new _store.MenuStore();
        }

      }

      exports.Controller = Controller;
    }
  });
  /**************************
  INTERNAL MODULE: ./data/api
  **************************/

  ims.set('./data/api', {
    hash: 3470403212,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.api = void 0;

      var _structureItem = require("./structure-item");

      const children = [['api/uri', 'URI'], ["api/BeyondWidget", "Objeto widget"], ["api/IWidgetStore", "IWidgetStore"]];
      const api = {
        id: 'reference',
        label: 'API',
        children: (0, _structureItem.structureItems)(children)
      };
      exports.api = api;
    }
  });
  /*****************************
  INTERNAL MODULE: ./data/basics
  *****************************/

  ims.set('./data/basics', {
    hash: 4130205166,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.basics = void 0;

      var _structureItem = require("./structure-item");

      const projects = ["projects/intro", "projects/create", "projects/structure", "projects/json", "projects/import", "projects/dependencies"];
      const modules = ['modules/introduction', 'modules/create', 'modules/json'];
      const styles = ["styles/template", "styles/modules", "styles/themes", "styles/imports"];
      const widgets = ["widgets", "widgets/definition", "widgets/controller", "widgets/page", "widgets/layout", "widgets/rendering"];
      const general = (0, _structureItem.structureItems)([['projects', (0, _structureItem.structureItems)(projects)], ['modules', (0, _structureItem.structureItems)(modules)], 'bundles', 'processors', 'template', ['widgets', (0, _structureItem.structureItems)(widgets)], 'routing', 'state/management', 'backend', ['styles', (0, _structureItem.structureItems)(styles)]]);
      const basics = {
        id: 'concepts',
        children: general
      };
      exports.basics = basics;
    }
  });
  /*****************************
  INTERNAL MODULE: ./data/config
  *****************************/

  ims.set('./data/config', {
    hash: 18647715,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.config = void 0;
      const config = {
        id: 'configuration',
        children: ['template']
      };
      exports.config = config;
    }
  });
  /***********************************
  INTERNAL MODULE: ./data/fundamentals
  ***********************************/

  ims.set('./data/fundamentals', {
    hash: 138307814,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.fundamentals = void 0;

      var _structureItem = require("./structure-item");

      const fundamentals = {
        id: 'fundamentals',
        children: (0, _structureItem.structureItems)(['dev-server', 'foundations/distributions', 'foundations/hmr', 'foundations/bee' // 'multilanguage',
        // 'glossary',
        ])
      };
      exports.fundamentals = fundamentals;
    }
  });
  /****************************
  INTERNAL MODULE: ./data/index
  ****************************/

  ims.set('./data/index', {
    hash: 2176554652,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Menu = void 0;

      var _starting = require("./starting");

      var _basics = require("./basics");

      var _fundamentals = require("./fundamentals");

      const Menu = [_starting.starting, _basics.basics, _fundamentals.fundamentals // config,
      // api
      ];
      exports.Menu = Menu;
    }
  });
  /*******************************
  INTERNAL MODULE: ./data/starting
  *******************************/

  ims.set('./data/starting', {
    hash: 3436517680,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.starting = void 0;

      var _structureItem = require("./structure-item");

      const obj = ([id, label]) => ({
        id,
        label
      });

      const tutorial = (0, _structureItem.structureItems)(['tutorial/start', 'tutorial/first-module', 'tutorial/backend', 'tutorial/bridge', 'tutorial/routing']);
      const items = ['intro', 'quick-start', ['tutorial', tutorial], 'dashboard'];
      const children = (0, _structureItem.structureItems)(items);
      const starting = {
        id: 'getting-start',
        children
      };
      exports.starting = starting;
    }
  });
  /*************************************
  INTERNAL MODULE: ./data/structure-item
  *************************************/

  ims.set('./data/structure-item', {
    hash: 2375272371,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.structureItems = void 0;

      const structureItems = data => {
        return data.map(item => {
          if (Array.isArray(item)) {
            const [id, children] = item;
            return {
              id,
              children
            };
          }

          return {
            id: item
          };
        });
      };

      exports.structureItems = structureItems;
    }
  });
  /******************************
  INTERNAL MODULE: ./menu/context
  ******************************/

  ims.set('./menu/context', {
    hash: 1594199103,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useMenuContext = exports.MenuContext = void 0;

      var React = require("react");

      const defaultValue = {};
      const MenuContext = React.createContext(defaultValue);
      exports.MenuContext = MenuContext;

      const useMenuContext = () => React.useContext(MenuContext);

      exports.useMenuContext = useMenuContext;
    }
  });
  /****************************
  INTERNAL MODULE: ./menu/index
  ****************************/

  ims.set('./menu/index', {
    hash: 2020288400,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WidgetMenu = WidgetMenu;

      var React = require("react");

      var _data = require("../data");

      var _list = require("./list");

      var _context = require("./context");

      var _code = require("@beyond/docs/store/code");

      var _code2 = require("@beyond/ui/icons/code");

      var _code3 = require("@beyond/ui/image/code");

      var _beyond_context = require("beyond_context");

      var _code4 = require("@beyond/docs/components/html/code");

      var _ts = require("@beyond-js/kernel/routing/ts");
      /*bundle*/


      function WidgetMenu({
        attributes
      }) {
        const [ready, texts] = (0, _code.useTexts)(_beyond_context.module.resource);
        const parent = React.useRef(null);
        const openedLocal = typeof window !== undefined ? window?.localStorage.getItem("__menu_opened") : true;
        const [opened, setOpened] = React.useState([true, "true"].includes(openedLocal));
        (0, _code.useBinder)([attributes], () => {
          const option = attributes.get("opened") === "true";
          if (option !== opened) setOpened(option);
        });

        const closeMenu = () => {
          const isOpened = parent.current.classList.contains("docs__menu--opened");
          parent.current.classList.toggle("docs__menu--opened");
          window.localStorage.setItem("__menu_opened", `${!isOpened}`);
        };

        const close = event => {
          event.preventDefault();
          closeMenu();
        };

        const cls = `docs__menu${opened ? ` docs__menu--opened` : ""}`;
        if (!ready) return React.createElement(_code4.Loading, null);
        return React.createElement(_context.MenuContext.Provider, {
          value: {
            ready,
            texts,
            current: _ts.routing.uri,
            close: closeMenu
          }
        }, React.createElement("aside", {
          ref: parent,
          className: cls
        }, React.createElement("div", {
          className: "menu-mobile-container"
        }, React.createElement("header", {
          className: "aside__header"
        }, React.createElement("div", null, React.createElement(_code3.BeyondImage, {
          src: "/images/beyond-logo.png",
          className: "img-logo mobile-only",
          alt: "Beyond the universal meta framework"
        }), React.createElement("h4", null, texts.title)), React.createElement(_code2.BeyondIconButton, {
          onClick: close,
          className: "docs__menu__list__btn-close",
          icon: "close"
        })), React.createElement(_list.List, {
          items: _data.Menu
        }))));
      }
    }
  });
  /**********************************
  INTERNAL MODULE: ./menu/items/index
  **********************************/

  ims.set('./menu/items/index', {
    hash: 2361789647,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.List = List;
      exports.MenuItem = MenuItem;
      exports.ParentItem = ParentItem;

      var React = require("react");

      var _context = require("../context");

      var _ts = require("@beyond-js/kernel/routing/ts");

      var _code = require("@beyond/docs/ui/icons/code");

      function List({
        items,
        className
      }) {
        const output = items.map((item, i) => React.createElement(MenuItem, {
          item: item,
          key: `${item.id}.${i}`
        }));
        const cls = `docs__menu__sublist${className ? ` ${className}` : ''}`;
        return React.createElement("ul", {
          className: cls
        }, output);
      }

      function ParentItem({
        item
      }) {
        const {
          texts,
          current
        } = (0, _context.useMenuContext)();

        const onClick = event => {
          event.preventDefault();
          event.currentTarget.closest('li').classList.toggle('item--opened');
        };

        const selected = item.children.find(item => `/docs/${item.id}` === current.uri);
        const cls = `menu__item--parent${!!selected ? ' item--opened' : ''}`;
        return React.createElement("li", {
          className: cls
        }, React.createElement("section", {
          onClick: onClick
        }, React.createElement("a", {
          href: ""
        }, React.createElement("span", null, texts[item.id])), React.createElement(_code.AppIcon, {
          icon: "chevronRight"
        })), React.createElement(List, {
          items: item.children,
          level: 1
        }));
      }

      function MenuItem({
        item
      }) {
        const {
          close,
          texts,
          current
        } = (0, _context.useMenuContext)();
        if (item.children) return React.createElement(ParentItem, {
          item: item
        });
        const uri = `/docs/${item.id}`;

        const onClick = event => {
          event.preventDefault();
          const container = event.currentTarget.closest('aside');
          const target = event.currentTarget.closest('li');
          const currentActive = container.querySelector('.active-item');
          if (currentActive) currentActive.classList.remove('active-item');
          target.classList.add('active-item');

          _ts.routing.pushState(uri);

          close();
        };

        const cls = `${uri === current.uri ? 'active-item' : ''}`;
        const link = `/docs/${item.id}`;
        return React.createElement("li", {
          className: cls
        }, React.createElement("a", {
          href: link,
          onClick: onClick
        }, texts[link]));
      }
    }
  });
  /***************************
  INTERNAL MODULE: ./menu/list
  ***************************/

  ims.set('./menu/list', {
    hash: 3132290937,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.List = List;

      var React = require("react");

      function List({
        items,
        className,
        level
      }) {
        const {
          MenuItem
        } = require('./items/index');

        const output = items.map((item, i) => React.createElement(MenuItem, {
          item: item,
          key: `${item.id}.${i}`
        }));
        const clsToApply = level ? 'docs__menu__sublist' : 'docs__menu__list';
        const cls = `${clsToApply}${className ? ` ${className}` : ''}`;
        console.log(10, items);
        return React.createElement("ul", {
          className: cls
        }, output);
      }
    }
  });
  /***********************
  INTERNAL MODULE: ./store
  ***********************/

  ims.set('./store', {
    hash: 3686938782,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MenuStore = void 0;

      var _ts = require("@beyond/ui/reactive-model/ts");

      class MenuStore extends _ts.ReactiveModel {
        constructor() {
          super(); // this.#texts = new CurrentTexts(module.resource);
          // this.#texts.on('change', this.#listen);
        }

      }

      exports.MenuStore = MenuStore;
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./controller",
    "from": "Controller",
    "name": "Controller"
  }, {
    "im": "./menu/index",
    "from": "WidgetMenu",
    "name": "WidgetMenu"
  }];
  let Controller, WidgetMenu; // Module exports

  _exports.WidgetMenu = WidgetMenu;
  _exports.Controller = Controller;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'Controller') && (_exports.Controller = Controller = require ? require('./controller').Controller : value);
    (require || prop === 'WidgetMenu') && (_exports.WidgetMenu = WidgetMenu = require ? require('./menu/index').WidgetMenu : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});