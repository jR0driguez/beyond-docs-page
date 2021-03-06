define(["exports", "@beyond-js/kernel/bundle", "react", "@beyond/ui/link", "@beyond/docs/code", "@cloudinary/url-gen/internal/utils/dataStructureUtils", "@beyond/docs/store", "@beyond/docs/components/next-links", "@beyond/ui/image", "@beyond/ui/modal", "@beyond/docs/ui/icons"], function (_exports, dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.hmr = _exports.TypeProperty = _exports.Title = _exports.Render = _exports.Paragraph = _exports.ObjectProperty = _exports.Notice = _exports.ModalImage = _exports.Loading = _exports.List = _exports.Document = _exports.CHtml = _exports.BeyondName = void 0;
  const {
    Bundle: __Bundle,
    externals
  } = dependency_0;

  const __pkg = new __Bundle({
    "module": "@beyond/docs/components/html",
    "bundle": "code"
  }).package();

  ;
  externals.register(new Map([["react", dependency_1], ["@cloudinary/url-gen/internal/utils/dataStructureUtils", dependency_4]]));

  __pkg.dependencies.update(new Set(["@beyond/ui/link", "@beyond/docs/code", "@beyond/docs/store", "@beyond/docs/components/next-links", "@beyond/ui/image", "@beyond/ui/modal", "@beyond/docs/ui/icons"]));

  const ims = new Map();
  /************************
  INTERNAL MODULE: ./beyond
  ************************/

  ims.set('./beyond', {
    hash: 3491118623,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BeyondName = BeyondName;

      var React = require("react");
      /*bundle*/


      function BeyondName() {
        return React.createElement(React.Fragment, null, React.createElement("span", {
          className: "beyond"
        }, "BeyondJS"));
      }
    }
  });
  /*************************
  INTERNAL MODULE: ./control
  *************************/

  ims.set('./control', {
    hash: 2671132311,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BlockQuote = BlockQuote;
      exports.CHtml = CHtml;
      exports.CodeComponent = CodeComponent;
      exports.CustomComponent = CustomComponent;
      exports.DocLinks = DocLinks;
      exports.DocList = DocList;
      exports.List = List;
      exports.ListItem = ListItem;
      exports.Paragraph = Paragraph;
      exports.Title = Title;

      var React = require("react");

      var _link = require("@beyond/ui/link");

      var _code = require("@beyond/docs/code");

      var _dataStructureUtils = require("@cloudinary/url-gen/internal/utils/dataStructureUtils");
      /*bundle*/


      function CHtml({
        content,
        children
      }) {
        const data = children ?? content;
        return React.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: data
          }
        });
      }
      /*bundle*/


      function Paragraph({
        content,
        children
      }) {
        if (Array.isArray(content)) {
          return React.createElement("p", null, content);
        }

        const data = children ?? content;
        return React.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: data
          }
        });
      }
      /*bundle*/


      function Title(props) {
        const {
          content,
          selector,
          children
        } = props;
        let data = children ?? content;
        const output = [];
        const [tag, idAttribute] = selector.split("#");
        const Control = ['h2', 'h3', 'h4', 'h5', 'h6'].includes(tag) ? tag : 'h1';

        if (Array.isArray(data)) {
          output.push(React.createElement("span", {
            className: `pretitle-${tag}`,
            key: "pretitle"
          }, data[0]));
          data = data[1];
        }

        const attrs = {
          key: idAttribute ?? 'title'
        };
        if (idAttribute) attrs.id = idAttribute;
        output.push(React.createElement(Control, {
          dangerouslySetInnerHTML: {
            __html: data
          },
          ...attrs
        }));
        return React.createElement(React.Fragment, null, output);
      }
      /*bundle*/


      function List(props) {
        const {
          content,
          children,
          element
        } = props;
        const [name, className] = element.split(".");

        if (!Array.isArray(content)) {
          throw new Error('The content passed must be an array');
        }

        const attrs = {};
        if (className) attrs.className = className;
        return React.createElement("ul", { ...attrs
        }, content.map((item, index) => {
          if (item?.type?.name === 'ListItem') {
            return item;
          }

          if (Array.isArray(item)) {
            const [label, href] = item;
            return React.createElement("li", {
              key: `${label}.${index}.arr`
            }, React.createElement(_link.Link, {
              href: href
            }, label));
          }

          if (typeof item === 'object') {
            return React.createElement("li", {
              key: `${index}.obj.${[performance.now()]}`
            }, item);
          }

          return React.createElement("li", {
            key: `${index}.obj.${[performance.now()]}`,
            dangerouslySetInnerHTML: {
              __html: item
            }
          });
        }), children);
      }

      function DocLinks({
        item: [href, label],
        external
      }) {
        const Control = external ? _link.Elink : _link.Link;
        return React.createElement(Control, {
          href: href
        }, label);
      }

      function BlockQuote({
        children
      }) {
        return React.createElement("div", {
          className: "block__note"
        }, children);
      }
      /**
       * Render a list item that contains a nested list.
       * @constructor
       */


      function ListItem({
        content
      }) {
        if ((0, _dataStructureUtils.isString)(content)) {
          content = [React.createElement(CHtml, {
            content: content,
            key: content
          })];
        }

        return React.createElement("li", null, content);
      }

      function CodeComponent({
        content
      }) {
        if (!content) {
          throw new Error('the content object is missing');
        }

        const {
          title,
          language = 'typescript',
          tpl
        } = content;
        const Control = title ? _code.CodeBox : _code.Code;
        return React.createElement(Control, {
          title: title,
          language: language
        }, tpl);
      }

      function CustomComponent({
        components,
        control,
        content,
        tpls
      }) {
        if (!components.hasOwnProperty(control)) {
          console.warn(`custom component ${control} was not found`);
          return null;
        }

        const Control = components[control];
        return React.createElement(Control, {
          tpls: tpls,
          content: content
        });
      }

      function DocList({
        content
      }) {
        console.log(10, content);
        return React.createElement(React.Fragment, null, React.createElement("h3", null, "Element"));
      }
    }
  });
  /**************************
  INTERNAL MODULE: ./document
  **************************/

  ims.set('./document', {
    hash: 3803408456,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Document = Document;

      var React = require("react");

      var _store = require("@beyond/docs/store");

      var _render = require("./render");

      var _nextLinks = require("@beyond/docs/components/next-links");
      /* bundle */


      function Document({
        moduleId,
        tpls,
        components,
        textId,
        nextLinks,
        d
      }) {
        const [ready, texts] = (0, _store.useTexts)(moduleId);
        if (!ready) return null;
        const textsUsed = textId ? texts[textId] : texts;

        if (d) {
          console.log(1.1, moduleId, texts, components);
          console.log(1.2, textId, textsUsed);
        }

        return React.createElement(_store.DocsContext.Provider, {
          value: {
            texts,
            ready,
            tpls,
            components
          }
        }, React.createElement(_render.Render, {
          content: textsUsed,
          tpls: tpls,
          components: components
        }), nextLinks && React.createElement(_nextLinks.NextLinks, {
          items: nextLinks
        }));
      }
    }
  });
  /*************************
  INTERNAL MODULE: ./loading
  *************************/

  ims.set('./loading', {
    hash: 458825452,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Loading = Loading;

      var React = require("react");
      /*bundle*/


      function Loading() {
        return React.createElement(React.Fragment, null, React.createElement("h4", null, "Loading..."));
      }
    }
  });
  /*****************************
  INTERNAL MODULE: ./modal-image
  *****************************/

  ims.set('./modal-image', {
    hash: 2961068627,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ModalImage = ModalImage;

      var React = require("react");

      var _image = require("@beyond/ui/image");

      var _modal = require("@beyond/ui/modal");
      /*bundle*/


      function ModalImage({
        src,
        alt,
        className
      }) {
        const [open, toggle] = React.useState(false);
        const cls = `image__modal ${className ? ` ${className}` : ''}`;
        return React.createElement(React.Fragment, null, React.createElement(_image.BeyondImage, {
          alt: alt,
          src: src,
          onClick: () => toggle(!open)
        }), open && React.createElement(_modal.BeyondModal, {
          className: cls,
          show: true
        }, React.createElement(_image.BeyondImage, {
          alt: alt,
          src: src
        })));
      }
    }
  });
  /************************
  INTERNAL MODULE: ./notice
  ************************/

  ims.set('./notice', {
    hash: 1085374984,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Notice = Notice;

      var React = require("react");

      var _link = require("@beyond/ui/link");
      /*bundle*/


      function Notice({
        text,
        link: [href, link]
      }) {
        return React.createElement("div", {
          className: "block__note"
        }, text, " ", React.createElement(_link.Link, {
          href: href
        }, link));
      }
    }
  });
  /************************
  INTERNAL MODULE: ./render
  ************************/

  ims.set('./render', {
    hash: 2920535507,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Render = Render;

      var _react = require("react");

      var _useRender = require("./use-render");
      /*bundle*/


      function Render(props) {
        const {
          content,
          tpls,
          components
        } = props;
        const output = (0, _useRender.useRender)(content, tpls, components);
        return _react.default.createElement(_react.default.Fragment, null, output);
      }
    }
  });
  /*******************************
  INTERNAL MODULE: ./type-property
  *******************************/

  ims.set('./type-property', {
    hash: 2567569487,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ObjectProperty = ObjectProperty;
      exports.TypeProperty = TypeProperty;

      var React = require("react");

      var _link = require("@beyond/ui/link");
      /*bundle*/


      function TypeProperty({
        children,
        type,
        href = false,
        optional = false
      }) {
        const output = href ? React.createElement(_link.Link, {
          href: href
        }, `${type}`, " ") : `${type} `;
        return React.createElement(React.Fragment, null, children && React.createElement("strong", null, children), " ", React.createElement("span", {
          className: "type__property"
        }, output), optional && React.createElement("span", {
          className: "type__optional"
        }, ` optional`, " "), ":");
      }
      /*bundle*/


      function ObjectProperty({
        children,
        type,
        href = undefined,
        optional = undefined
      }) {
        return React.createElement(React.Fragment, null, React.createElement("strong", null, children), " ", React.createElement(TypeProperty, {
          optional: true,
          type: type,
          href: href
        }));
      }
    }
  });
  /*************************************
  INTERNAL MODULE: ./use-render/controls
  *************************************/

  ims.set('./use-render/controls', {
    hash: 4099921071,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Controls = void 0;

      var _control = require("../control");

      const Controls = {
        p: _control.Paragraph,
        l: _control.DocLinks,
        t: _control.Paragraph,
        e: _control.DocLinks,
        h: _control.Title,
        items: _control.List,
        s: _control.CHtml,
        z: _control.DocList
      };
      exports.Controls = Controls;
    }
  });
  /**********************************
  INTERNAL MODULE: ./use-render/index
  **********************************/

  ims.set('./use-render/index', {
    hash: 2833378543,
    creator: function (require, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.useRender = useRender;

      var _react = require("react");

      var _control = require("../control");

      var _controls = require("./controls");

      var _modalImage = require("../modal-image");

      var _dataStructureUtils = require("@cloudinary/url-gen/internal/utils/dataStructureUtils");

      var _icons = require("@beyond/docs/ui/icons");

      function useRender(content, tpls = {}, components = {}) {
        const controls = _controls.Controls;
        /**
         * q = quote
         * h = titles
         * p = paragraph
         * l = link
         * e = external link
         * t = deprecated
         * cc = CustomComponent
         * i = img
         * c = code
         * bi = BeyondIcon
         * z: ListDoc
         */

        const regexp = /[bi|q|h|p|l|e|t|i|c|cc|z]{1}?\d{1}|items\d{0,1}|\d/;
        /**
         * @TODO: @julio: refactor and order
         * @param item
         * @param data
         * @param output
         * @param id
         */

        const analize = (item, data, output, id) => {
          const elementData = data[item];
          const itemId = `${item}.${id}`;

          if (item.substring(0, 2) === 'bi') {
            output.push(_react.default.createElement(_icons.AppIcon, {
              icon: elementData,
              key: itemId
            }));
            return;
          }

          if (item.includes("items") && item.substring(0, 5) === "items") {
            const Control = controls.items;
            let items = [];
            let children = [];
            elementData.forEach((element, index) => {
              if (typeof element === "object") {
                element = check(element);
                items.push(_react.default.createElement(_control.ListItem, {
                  key: `element.sublist.${index}.${elementData.length}`,
                  content: element
                }));
                return;
              }

              items.push(_react.default.createElement(_control.ListItem, {
                key: `${itemId}.${index}`,
                content: element
              }));
              return;
            });
            output.push(_react.default.createElement(Control, {
              key: `${id}${item}`,
              content: items,
              element: item
            }, children));
            return;
          }
          /**
           * Si es un objeto recursivo
           */


          if (!regexp.test(item)) {
            const data = check(elementData);
            output = output.concat(data);
            return;
          }

          if (["cc"].includes(item.substring(0, 2))) {
            output.push(_react.default.createElement(_control.CustomComponent, {
              key: itemId,
              content: content,
              control: elementData,
              components: components,
              tpls: tpls
            }));
            return;
          } // blockQuote


          if (["q"].includes(item[0])) {
            const quote = (0, _dataStructureUtils.isString)(elementData) ? elementData : check(elementData, []);
            output.push(_react.default.createElement(_control.BlockQuote, {
              key: itemId
            }, quote));
            return;
          }

          if (["i"].includes(item[0])) {
            const [src, alt] = elementData;
            output.push(_react.default.createElement(_modalImage.ModalImage, {
              key: itemId,
              src: src,
              alt: alt
            }));
            return;
          }

          if (["c"].includes(item[0])) {
            if (!tpls[elementData]) {
              throw new Error(`the template "${elementData}" were not found on ${item}`);
            }

            output.push(_react.default.createElement(_control.CodeComponent, {
              key: itemId,
              content: tpls[elementData]
            }));
            return;
          }

          if (["z"].includes(item[0])) {
            if (!tpls[elementData]) {
              throw new Error(`the template "${elementData}" were not found on ${item}`);
            }

            output.push(_react.default.createElement(_control.DocList, {
              key: itemId,
              content: tpls[elementData]
            }));
            return;
          } //links


          if (["e", "l"].includes(item[0])) {
            const attrs = {
              key: `${id}${item}`,
              item: elementData
            };
            if (item[0] === "e") attrs.external = true;
            output.push(_react.default.createElement(_control.DocLinks, { ...attrs
            }));
            return;
          }

          if (item[0] === 'p' && typeof elementData === 'object') {
            const Control = controls[item[0]];
            const elements = check(elementData, output);
            output.push(_react.default.createElement(Control, {
              key: `${id}${item}`,
              selector: item,
              content: elements
            }));
            return;
          }

          if (item[0] === 'h') {
            const Control = controls[item[0]];
            output.push(_react.default.createElement(Control, {
              key: `${id}${item}`,
              selector: item,
              content: elementData
            }));
            return;
          }

          if (typeof elementData === "object") {
            check(elementData);
            return;
          }

          const Control = controls[item[0]];
          output.push(_react.default.createElement(Control, {
            key: `${id}${item}`,
            selector: item,
            content: data[item]
          }));
        };

        let i = 0;

        const check = data => {
          const output = [];
          const id = `item.${performance.now()}.${Object.keys(data).join()}}`;
          if (i > 50) return console.log("TOP.......");
          i++;
          const keys = Object.keys(data);
          keys.forEach((item, i) => {
            analize(item, data, output, `${id}.${i}`);
          });
          return output;
        };

        const output = check(content, []); // const output = check(content, []);

        return output;
      }
    }
  });
  __pkg.exports.descriptor = [{
    "im": "./beyond",
    "from": "BeyondName",
    "name": "BeyondName"
  }, {
    "im": "./control",
    "from": "CHtml",
    "name": "CHtml"
  }, {
    "im": "./control",
    "from": "Paragraph",
    "name": "Paragraph"
  }, {
    "im": "./control",
    "from": "Title",
    "name": "Title"
  }, {
    "im": "./control",
    "from": "List",
    "name": "List"
  }, {
    "im": "./document",
    "from": "Document",
    "name": "Document"
  }, {
    "im": "./loading",
    "from": "Loading",
    "name": "Loading"
  }, {
    "im": "./modal-image",
    "from": "ModalImage",
    "name": "ModalImage"
  }, {
    "im": "./notice",
    "from": "Notice",
    "name": "Notice"
  }, {
    "im": "./render",
    "from": "Render",
    "name": "Render"
  }, {
    "im": "./type-property",
    "from": "TypeProperty",
    "name": "TypeProperty"
  }, {
    "im": "./type-property",
    "from": "ObjectProperty",
    "name": "ObjectProperty"
  }];
  let BeyondName, CHtml, Paragraph, Title, List, Document, Loading, ModalImage, Notice, Render, TypeProperty, ObjectProperty; // Module exports

  _exports.ObjectProperty = ObjectProperty;
  _exports.TypeProperty = TypeProperty;
  _exports.Render = Render;
  _exports.Notice = Notice;
  _exports.ModalImage = ModalImage;
  _exports.Loading = Loading;
  _exports.Document = Document;
  _exports.List = List;
  _exports.Title = Title;
  _exports.Paragraph = Paragraph;
  _exports.CHtml = CHtml;
  _exports.BeyondName = BeyondName;

  __pkg.exports.process = function ({
    require,
    prop,
    value
  }) {
    (require || prop === 'BeyondName') && (_exports.BeyondName = BeyondName = require ? require('./beyond').BeyondName : value);
    (require || prop === 'CHtml') && (_exports.CHtml = CHtml = require ? require('./control').CHtml : value);
    (require || prop === 'Paragraph') && (_exports.Paragraph = Paragraph = require ? require('./control').Paragraph : value);
    (require || prop === 'Title') && (_exports.Title = Title = require ? require('./control').Title : value);
    (require || prop === 'List') && (_exports.List = List = require ? require('./control').List : value);
    (require || prop === 'Document') && (_exports.Document = Document = require ? require('./document').Document : value);
    (require || prop === 'Loading') && (_exports.Loading = Loading = require ? require('./loading').Loading : value);
    (require || prop === 'ModalImage') && (_exports.ModalImage = ModalImage = require ? require('./modal-image').ModalImage : value);
    (require || prop === 'Notice') && (_exports.Notice = Notice = require ? require('./notice').Notice : value);
    (require || prop === 'Render') && (_exports.Render = Render = require ? require('./render').Render : value);
    (require || prop === 'TypeProperty') && (_exports.TypeProperty = TypeProperty = require ? require('./type-property').TypeProperty : value);
    (require || prop === 'ObjectProperty') && (_exports.ObjectProperty = ObjectProperty = require ? require('./type-property').ObjectProperty : value);
  };

  const hmr = new function () {
    this.on = (event, listener) => __pkg.hmr.on(event, listener);

    this.off = (event, listener) => __pkg.hmr.off(event, listener);
  }();
  _exports.hmr = hmr;

  __pkg.initialise(ims);
});