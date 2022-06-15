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

  const __pkg = new __Bundle("@beyond/docs/docs/basic/widgets/rendering/txt").package('en');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 3333414852,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "h1": "Widget rendering",
          "p1": "One of the most relevant factors of BeyondJS is the hybrid rendering engine that it implements. First of all, is important to keep in mind that web pages are Widgets and rendering done at the widget level. It enables the developer the versatility of being able to work with different rendering strategies, even on the same web page.",
          "p2": {
            "t1": "Pages and Layouts in BeyondJS are handled as ",
            "l1": "Widgets",
            "t2": ", which are implemented employing ",
            "elink2": {
              "href": "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
              "label": "web components"
            },
            "t3": " with ",
            "elink3": {
              "href": "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM",
              "label": "shadow DOM"
            },
            "t4": ", therefore rendering strategies in BeyondJS are hybrid and always require the execution of JavaScript code on the client."
          },
          "p3": "The developer can then define, for each widget, the most convenient type of rendering considered. The available rendering forms are listed below:\n",
          "items": [["Server Side Rendering", "/docs/rendering#ssr-rendering"], ["Client Side Rendering", "/docs/rendering#csr-rendering"], ["Static Rendering", "/docs/rendering#sr-rendering"]]
        },
        "ssr": {
          "title": "Server Side Rendering <small>(SSR)</small>",
          "p1": {
            "t1": "Nowadays ",
            "elink1": {
              "label": "web crawlers interpret JavaScript code",
              "href": "https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics"
            },
            "t2": " and can understand the content it generates. We always recommended evaluating which strategy is more convenient in each case."
          },
          "p2": "Server-side rendering, or SSR (for its acronym), is a technique that allows the content of a URL to be parsed on the server, generating the final HTML code and returning it to the client, thus avoiding post-processing in the client browser and speeding up content loading.",
          "p3": {
            "t1": "BeyondJS enables the simple implementation of SSR. For this, it is necessary to understand the life cycle of the",
            "link1": "widgets",
            "t2": "rendering engine and follow the logic associated with it."
          },
          "p4": "\nDown below is a detail of the circuit for rendering widgets and pages:",
          "items": ["The URL request is made to the server, and returns the <span className=\"inline\">index.html</span> file.", "When the client receives the index.html file, a second request is triggered, querying for the information necessary to render the entire page, including  the HTML and CSS code of the existing widgets on the page and the layouts.", "When the client receives the requested information, JavaScript is executed to register the web components in the HTML document and load all the content on the page.", "At the moment, when the initial content is loaded, the content <i>hydration</i> is triggered. Hydration represents the CSR layer, which implies making available to the client all the JavaScript code used on the server to process the request. By this the site can begin to function as a SPA and enable the interaction functionalities that may exist."]
        },
        "csr": {
          "title": "Client Rendering (CSR)",
          "p1": "Client rendering is the natural functioning of SPAs. Its lifecycle can be considered as follows:",
          "items": ["A request is made to a server or CDN, which returns an index.html with style files and JavaScript.", "The browser interprets the index.html and asks the server for the necessary resources to finish rendering the content.", "When the resources are received in the browser, the rendering process of the final HTML content is executed through JavaScript, and the page is available for use.", "Eventually, the client consults APIs that return data and are rendered again on the website, updating its content."],
          "storeRendering": {
            "title": "Store Server Rendering",
            "p1": "As expressed in the CSR lifecycle, it is a common need to make queries to an API to update the information of the site through http or web sockets. This usually requires the construction of APIs that return the information. BeyondJS handles the possibility that this information is defined in the widget state, and that it’s updated directly from the server, without the need for an additional API.\n",
            "p2": {
              "t1": "You can read more about this topic in the",
              "l1": "Handling states"
            }
          }
        },
        "sr": {
          "title": "Static rendering",
          "p1": "Static rendering, as its name indicates, is especially useful when the content does not vary and the existence of a server that processes the requests can be dispensed with a CDN that returns all the information is enough.",
          "p2": "BeyondJS allows you to generate the final static code in the deployment process. In a  development environment, the files are still served by the development server of the framework."
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