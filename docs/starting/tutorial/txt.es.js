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

  const __pkg = new __Bundle("@beyond/docs/docs/starting/tutorial/txt").package('es');

  externals.register(new Map([]));
  const ims = new Map();
  /*********************
  INTERNAL MODULE: ./txt
  *********************/

  ims.set('./txt', {
    hash: 2874643777,
    creator: function (require, exports) {
      exports.txt = {
        "intro": {
          "h1": ["Tutorial", "Proyecto Web"],
          "h2": "Antes de Empezar",
          "p1": "Este tutorial busca el flujo principal de desarrollo con Beyond y demostrar de manera clara los beneficios que este ofrece. El propósito de este tutorial es que los usuarios/programadores puedan  aprender mientras practican, por tanto, los conceptos que definen la estructura de BeyondJS son abordados de forma general, focalizando en hacer un ejercicio rápido, conciso y claro. Para mayor detalle los conceptos, esta estará disponible en la documentación cuando esta sea requerida.",
          "p2": "El tutorial se divide de la siguiente forma: ",
          "items": ["Dashboard.", "Creación de primer módulo.", "Integración con el backend.", "Navegación."],
          "p3": "Sugerimos que este sea completado, para demostrar cómo en poco tiempo logras integrar código de cliente y servidor, utilizando la misma estructura JavaScript.",
          "p4": "Antes de empezar, recomendamos la revisión de los siguientes conceptos para que los tengas presente a medida que avanzas",
          "items2": ["<strong>Bundle</strong>: Representa un conjunto de archivos fuentes que generan un único archivo final, el cual es incluido en el navegador.", "<strong>Module</strong>: Representa uno o múltiples bundles.", "<strong>Processor</strong>: Representa el procesador, compilador o transpilador de código de la tecnología que se está utilizando."]
        },
        "starting": {
          "h2": "Empezando",
          "p1": "Lo primero que debe hacerse es crear el proyecto, para ello usaremos el paquete <span  class=\"inline\">@beyond-js/create-project</span> se encarga de instalar BeyondJS de manera local y generar la estructura inicial de nuestro proyecto.",
          "q1": {
            "s1": "BeyondJS está realizado para funcionar como dependencia global y correr varios proyectos en simultáneo, puedes aprender más sobre esto ",
            "l1": ["/quick-start", "aqui"]
          },
          "c1": "npx",
          "p3": "En el comando anterior, se solicitó crear un proyecto de tipo web con backend y se le agregó como scope <strong>testing</strong> y como nombre <strong>login</strong>.",
          "q2": {
            "s1": "El scope y el nombre, son datos que permiten identificar el proyecto y que lo dejan listo para ser publicado como paquete npm o para importarlo desde otro proyecto. Estas configuraciones pueden hacerse de forma manual, el dashboard sólo simplifica el proceso. Puedes ver la explicación de ello en ",
            "l1": ["/project/config", "La seccion de Configuracion de proyecto"]
          },
          "p5": "Al finalizar el comando, podremos ver que se crearon los siguientes archivos, podremos ver que se creó la carpeta beyond que definimos como container y adentro de ella tendremos la siguiente estructura:",
          "items": ["<strong>beyond.json</strong>: Archivo para manejar el servidor de desarrollo, gestionado por BeyondJS.", "<strong>package.json</strong>: Archivo de dependencias del proyecto", "<strong>projects.json</strong>: Archivo de configuración de proyectos, permite a BeyondJS identificar los proyectos a levantar.", {
            "s1": "<strong>login</strong>: Carpeta del proyecto.",
            "items": ["<strong>project.json</strong>: Contiene la configuración básica del proyecto (puede variar según el tipo y las necesidades del mismo).", {
              "s1": "<strong>/modules</strong>:  Carpeta en donde se crean los módulos del proyecto por defecto. Este valor es configurable, puedes leer más de ello en la sección de ",
              "l1": ["/projects/json", "Configuracion de Proyectos"]
            }, {
              "s1": "<strong>template</strong>: Esta carpeta contiene todos los elementos necesarios para definir el template general del proyecto.",
              "items": ["<strong>template.json</strong>: File that allows adjustments to be done to the project template setting."]
            }]
          }],
          "q6": {
            "s1": "Puedes aprender más acerca de los tipos de proyecto disponibles en la sección de ",
            "l1": ["/quick-start", "Inicio Rapido"]
          },
          "p7": "Luego de haber ejecutado el comando, ya estamos listos para empezar nuestro proyecto, para ello ejecutamos lo siguiente."
        },
        "firstModule": {
          "h1": ["Tutorial", "Primer módulo"],
          "p1": {
            "s1": "El proyecto trae un módulo home creado por defecto. Puedes verlo accediendo a ",
            "e1": ["http://localhost:6500/", "localhost:6500"],
            "s2": " desde el navegador."
          },
          "q1": {
            "s1": " El puerto se define en el archivo project.json, puedes leer más sobre ello en la sección de ",
            "l1": ["/projects/json", "Configuracion de Proyectos"]
          },
          "p3": "La estructura del módulo es la siguiente:",
          "items": ["widget: Carpeta en donde se encuentra el código del componente page", {
            "s1": "ts: ",
            "items": ["`controller.tsx`: Objeto controlador del componente, requerido para poder montar el WebComponent en el navegador.", "`views/page.tsx`: Componente react que renderiza la página."]
          }, "scss: Carpeta para agregar estilos al módulo.", "module.json: Archivo de configuración del módulo (Lugar para definir tipo de bundles y procesadores a utilizar)."],
          "p4": "¡Manos a la obra!",
          "p5": "Teniendo clara la estructura, lo que procede a continuación es crear el formulario de inicio de sesión y agregar algo de estilos, para luego continuar con la conexión al backend node"
        },
        "formCreation": {
          "h2#creating-module": "Creación del Formulario",
          "p1": "Si has trabajado con React, lo que viene es la parte que seguramente conoces mejor, con algunas sutilezas seguramente. A continuación, editaremos nuestro archivo `page.tsx` para crear un formulario de inicio de sesión y la funcionalidad básica para actualizar el estado.",
          "c1": "page"
        },
        "styles": {
          "h2": "Estilos",
          "p1": "BeyondJS maneja los estilos por defecto con el preprocesador SASS, ahora vamos a nuestro archivo styles.scss y agreguemos un poco de estilo al formulario.",
          "q2": {
            "s1": "SASS es un procesador en BeyondJS, si quieres leer a profundidad sobre el mecanismo de procesadores podrás encontrar los detalles en ",
            "l1": ["/docs/processors", "La seccion de procesadores"]
          },
          "c1": "styles",
          "p3": "Expliquemos un poco el código anterior:",
          "items": ["Agregamos estilo básico al formulario, los inputs, el botón de envío y para manejar un mensaje de error.", {
            "s1": "Custom properties: las custom properties utilizadas, son una estructura básica para manejo de variables incluidas por beyond en el ",
            "l1": ["/template", "Template del proyecto"],
            "s2": "."
          }]
        },
        "backendLogic": {
          "h1": ["Tutorial", "Logica Backend"],
          "p1": "Por su naturaleza, Los formularios de inicio de sesión requieren validar los datos contra un backend que se conecte a algún manejador de datos. A continuación, vamos a emular la conexión a la base de datos, creando nuestra integración con un servicio node, que tendrá un usuario y clave predefinidos y así, podremos revisar si la sesión es válida o no. Para lograrlo, haremos uso de websockets.",
          "p2": "Es necesario crear un bundle BRIDGE para crear de forma simple un servicio node y lograr la integración con el código cliente. Los bundles bridges, como su nombre lo indica, crean un puente de conexión entre el código cliente y servidor permitiendo manejar el código de manera uniforme."
        },
        "backendInitialization": {
          "h2": "Inicializacion del Backend",
          "q1": "BeyondJS provee la libreria @beyond-js/backend para la creación de código backend, esta libreria es opcional para evitar su inclusión innecesaria en aquellos proyectos que no la requieran.",
          "p1": "El proyecto trae un módulo `start-backend` que contiene un bundle de tipo `start` que se encarga de la inicialización del Backend, por medio del siguiente código:",
          "c2": "module2",
          "p2": {
            "s1": "La inicialización del backend es necesaria para que se ejecute el ",
            "l1": ["/docs/bee", "BEE"],
            "s2": " que gestiona el código javascript del lado servidor de nuestro proyecto."
          },
          "q4": "NOTA: Los `bridges` son un feature central y muy poderoso en <span class=\"inline\">BeyondJS</span> y en este tutorial solo se muestran de forma superficial. Si quieres conocer más y entender cómo funcionan, dirígete a la sección de bridges.",
          "h3": "Plataformas",
          "q5": {
            "s1": "Si quieres conocer más acerca del manejo de bundles y módulos, puedes ir a la ",
            "l1": ["/modules/introduction", "seccion de Modulos"]
          },
          "p6": "Para agregar un bundle bridge al módulo, debemos dirigirnos al archivo de configuración (module.json), ubicado adentro de la carpeta home. la ruta, debería ser: ",
          "p7": "Allí, debemos agregar la siguiente estructura:",
          "c3": "platforms1",
          "p8": "Nuestro `module.json` final, debería quedar con la siguiente estructura:",
          "c4": "platforms2",
          "p9": "Explicamos lo que acabamos de hacer:",
          "items": ["Como BeyondJS es un framework que garantiza el funcionamiento universal, cada módulo creado puede especificar que plataformas estan soportadas por el mismo. Con la entrada platforms le especificamos que queremos que nuestro modulo soporte las plataformasweb y backend.", "Agregamos la configuración de un bundle de tipo bridge para manejar las acciones en un servicio node y la interconexión con el código cliente.", "En la entrada Bridge, agregamos la propiedad \"path\" que define el directorio relativo en donde se encontrará el código del bundle."],
          "p10": "A cotinuación, creamos una carpeta con el nombre \"bridge\" para que Beyond consiga el path definido en module.json y, adentro de la carpeta bridge, creamos un archivo index.ts en el cual se agregará la lógica servidor."
        },
        "bridgeCode": {
          "h1": ["Tutorial", "Código Bridge"],
          "p1": "Como mencionamos antes, en esta parte generalmente cada proyecto tiene su propia lógica para la validación de sesión. La intención hoy no es enfocarse en cómo debe manejarse esto, lo que haremos será crear un código básico que nos permita conectar nuestro código cliente con el backend node.",
          "c1": "bridge",
          "p2": "El código es bastante simple, pero hay varios puntos interesantes a destacar",
          "items": [{
            "s1": "El comentario mágico /*bundle*/es utilizado por Beyond para identificar que el código a continuación debe ser considerado como código a exportar en el bundle final. Si quieres leer más acerca del funcionamiento de bundles y módulos, te recomendamos ir a La ",
            "l1": ["/modules/introduction", "seccion de modulos"],
            "s2": " de la documentacion."
          }, "El comentario mágico /*actions*/es utilizado por Beyond para identificar que segmentos del bundle bridge deben quedar disponibles como acciones que puedan ser consumidas por el cliente.", "La respuesta del método login es un objeto plano que llega con la estructura definida al cliente."]
        },
        "connectClientAndServer": {
          "h2": "Conectar cliente y servidor",
          "p1": {
            "s1": "El bridge que creamos es un servicio node. Generalmente, para ejecutar un servicio node, es necesario ir a una consola. Sin embargo, en BeyondJS estos servicios funcionan como un ",
            "l1": ["/bee", "BEE (Beyond Environment Service)"],
            "s2": " y para ejecutarlo podemos debemos ir al ",
            "l2": ["/dashboard", "Dashboard"],
            "s3": "y darle al botón de ejecución, que podemos encontrar en la pantalla de detalle del proyecto."
          },
          "p2": "Y otro en el detalle del proyecto:",
          "i1": ["/images/dashboard/v1/bee.png", "Beyond Environment Execution - Dashboard - BeyondJs"],
          "p3": {
            "s1": "<strong>El Dashboard</strong> es una herramienta muy potente provista por BeyondJS. Puedes aprender más acerca de esto en",
            "l1": ["/dashboard", "La seccion de detalle"]
          },
          "p4": "Para poder implementar la funcionalidad de login con nuestro servidor, debemos importar nuestro objeto auth en el código cliente y asociar el evento onSubmit a nuestro formulario.",
          "p5": "En BeyondJS los proyectos siguen las mismas directrices para especificación y resolución de nombres y paquetes que npm, de la misma forma que lo hace typescript. Deben tener nombre de modulo y pueden manejar un scope también. En nuestro caso, definimos ambos al momento de crear nuestro proyecto y módulo respectivamente.",
          "p6": "A continuación, en nuestro componente Page importamos el objeto Auth",
          "c1": "view1",
          "p7": "Agregamos nuestra función onSubmity la asociamos al formulario, nuestro código debe quedar de la siguiente forma:",
          "c2": "view2",
          "p8": "Es tiempo de probar nuestro formulario. Si agregamos los datos correctos, podremos ver que en la consola del navegador aparece el mensaje que indica que los datos fueron validados y se puede iniciar sesión, si por el contrario, agregamos datos incorrectos, podremos ver como aparece el mensaje de error \"Invalid data\" el cual actualizamos en la variable de estado del componente.",
          "p9": "Resumen:",
          "items": ["Creamos un módulo con un widget de tipo page.", "Creamos una conexión con un backend node por medio del bundle bridge.", "Repasamos la estructura de resolución de modulos para importar el bridge Auth y poder agregar la validación de inicio de sesión."],
          "p10": "Ahora solo nos falta redireccionar al usuario a una pantalla de bienvenida."
        },
        "routing": {
          "h1": ["Tutorial", "Routing"],
          "p1": "Lo primero que debemos hacer, es crear un nuevo módulo con un bundle de tipo Page, esta vez lo haremos desde el Dashboard. Para eso, debemos acceder a nuestro dashboard y seleccionar el proyecto que estamos trabajando, si no lo hemos hecho. Esto habilitará en el Preaside las acciones que podemos realizar sobre el proyecto, Las listamos a continuación:",
          "items": ["Agregar modulos", "Configuración general del proyecto", "Gestionar archivos estáticos", "Gestionar Templates"],
          "p2": "Hacemos clic en el ícono para agregar módulos y se abrirá un modal como el siguiente:",
          "i1": ["/images/dashboard/v1/create-module-1.png", "Create module on beyond project 1"],
          "p3": "Seleccionamos módulo en blanco. Y en la siguiente pantalla, nos pide el bundle, seleccionamos \"page\":",
          "i2": ["/images/dashboard/v1/create-module-2.png", "Create module on beyond project 2"],
          "p4": "En la pantalla final, nos pedirá algunos datos, a continuación, se explica que colocar:",
          "i3": ["/images/dashboard/v1/create-module-3.png", "Create module on beyond project 3"],
          "items2": ["Module name: welcome", "Web component name: welcome-page.", "Url: \"/welcome\""],
          "p5": "Las páginas y layouts en Beyond se resuelven haciendo uso de Web components. Si quieres saber en detalle cómo funcionan y porqué, dirígete a la sección de Web Components.",
          "p6": "Abrimos el objeto Page creado en el módulo y agregaremos un mensaje simple que diga: ¡Bienvenido!",
          "p7": "A continuación, Haremos los ajustes necesarios, para redireccionar a nuestro módulo de bienvenida, luego de iniciar sesión. Lo que debemos hacer a continuación, es importar el objeto \"routing\" de Beyond, para usar el método pushState que provee y navegar a la página de Bienvenida.",
          "h4#imports": "Importación",
          "c1": "importing",
          "h4#pushState": "Navegación",
          "c2": "pushState",
          "p8": "¡Listo! Si volvemos a probar nuestro formulario, podremos iniciar sesión y ver cómo nos dirigimos a la página de bienvenida."
        },
        "algo": "algo"
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