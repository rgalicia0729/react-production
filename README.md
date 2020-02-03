# React y React Router para Production

Si usas mac es importante que instales CLI de xcode.

    $ sudo rm -rf $(xcode-select -print-path)

    $ xcode-select --install

Para la creación de este proyecto usaremos una herramienta llamada npx, para ello primero debes instalarlo con el comando:

    $ npm i -g npx

Una vez instalado, dentro de la carpeta de nuestro proyecto vamos a correr el siguiente comando:

    $ npx license mit > LICENSE && npx gitignore node && git init && npm init -y

Luego de iniciar el proyecto vamos a instalar react.

    $ npm install --save react react-dom

## Agregando compatibilidad con todos los navegadores usando Babel

Babel es una herramienta muy popular para escribir JavaScript moderno y transformarlo en código que pueda entender cualquier navegador.

Instalación de Babel y otras herramientas para que funcione con React:

    $ npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime babel-plugin-transform-class-properties react-hot-loader babel-plugin-transform-object-assign babel-loader

    $ npm install --save @babel/runtime @babel/register

Creamos el archivo de configuración de babel, agregando en la raiz del proyecto .babelrc con la siguiente información.

```json
{
  "plugins": [
    "@babel/plugin-transform-runtime"
    ],
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
    ],
    "env": {
      "development": {
        "plugins": [
          "transform-class-properties",
          "react-hot-loader/babel",
          "babel-plugintransform-object-assign"
        ]
      }
    }
}
```

## Webpack: Empaquetando nuestros módulos

Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

Instalación de Webpack y algunos plugins:

    $ npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin webpack-dev-middleware webpack-hot-middleware file-loader

Script para ejecutar las tareas de Webpack (package.json):

```json
{
  "scripts": {
    "dev": "nodemon src/backend/index.js --exact babel-node",
    "build": "webpack --mode production"
  },
}
```

## Estilos con SASS

Los preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

Instalación de Sass:

    $ npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader autoprefixer postcss-loader

# React Router

Utilizar React Router para poder navegar en un proyecto de React.

¿Qué es React Router y cómo instalarlo?

Vamos a instalar React Router, la librería que nos va a permitir manejar rutas dentro de nuestra aplicación:

    npm --save install react-router-dom

## Crear nuestro archivo de Rutas

Dentro de nuestro proyecto vamos a crear una carpeta llamada routes donde vamos a ir añadiendo las rutas que necesitemos en la aplicación.

Las rutas que añadamos debemos definirlas con el componente Route y estas deben estar encapsuladas dentro del componente BrowserRouter del paquete de react-router-dom. Para definir una ruta con el componente Route debemos pasarle las props de:

- path para indicar la url.
- exact si queremos que funcione única y exactamente con la url que le digamos.
- component para indicarle el componente que va a renderizar.

# Server Side Render con Express

- Express es el framework con el cual vamos a crear nuestro servidor.  
- dotenv nos permite llamar a variables de entorno que almacenemos en el archivo .env 

    $ npm install --save express dotenv

Herramienta que reinicia automáticamente la aplicación de Node.js cuando se detectan cambios.

    $ npm install --save-dev nodemon
  
## Aplicando history y creando rutas para el servidor

Vamos a instalar la dependencia history para poder crear un historial del navegador desde el servidor:

    $ npm install --save react-router

    $ npm install --save history

Para crear el historial debemos importar el método createBrowserHistory de history.

## Definiendo la función main para renderizado desde el servidor

De momento ya nuestra aplicación es servida por Node.js a través de Express, llegó el momento de empezar a renderizar nuestro sitio del lado del servidor.

Los dos elementos clave para esto son:

- El método renderToString de react-dom/server que tal como dice su nombre, va a convertir un componente de React a String puro, lo va a renderizar.
- El StaticRouter de react-router con el cual podemos crear un enrutador que no cambie de location.

    $ npm install --save react-router-config

    $ npm install --save ignore-styles

## Assets require hook

Nuestro sitio actualmente presenta un problema con la carga de imágenes si le desactivas el JavaScript, para resolver esto vamos a instalar asset-require-hook lo que nos va a permitir indicarle al servidor donde se encuentran los assets de nuestra aplicación.

    $ npm install --save asset-require-hook

## Hydrate desde Express

Actualmente nuestra aplicación se renderiza dos veces, una al realizar la petición y otra al ejecutar el método render de ReactDOM, para optimizar esto vamos a cambiar el método render por hydrate.

## Configuración final: ESLint

El Git Ignore es un archivo que nos permite definir qué archivos NO queremos publicar en nuestros repositorios. Solo debemos crear el archivo .gitignore y escribir los nombres de los archivos y/o carpetas que no queremos publicar.
Los linters como ESLint son herramientas que nos ayudan a seguir buenas prácticas o guías de estilo de nuestro código.
Se encargan de revisar el código que escribimos para indicarnos dónde tenemos errores o posibles errores. En algunos casos también pueden solucionar los errores automáticamente. De esta manera podemos solucionar los errores incluso antes de que sucedan.
Instalación de ESLint:

    $ npm install --save-dev eslint-loader eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

Podemos configurar las reglas de ESLint en el archivo .eslintrc.

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": ["airbnb"],
  "globals": {
    "document": false,
    "escape": false,
    "navigator": false,
    "unescape": false,
    "window": false,
    "describe": true,
    "before": true,
    "it": true,
    "expect": true,
    "sinon": true
  },
  "parser": "babel-eslint",
  "plugins": ["react", "jsx-a11y", "import"],
  "rules": {
    "react/jsx-filename-extension": 0,
    "array-bracket-spacing": 2,
    "arrow-body-style": 0,
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "comma-spacing": [2, { "before": false, "after": true }],
    "comma-style": [2, "last"],
    "complexity": 0,
    "consistent-return": 1,
    "consistent-this": 0,
    "curly": [2, "multi-line"],
    "default-case": 0,
    "dot-location": [2, "property"],
    "dot-notation": 0,
    "eol-last": 2,
    "eqeqeq": [2, "allow-null"],
    "func-names": 0,
    "func-style": 0,
    "generator-star-spacing": [2, "both"],
    "guard-for-in": 0,
    "handle-callback-err": [2, "^(err|error|anySpecificError)$"],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "linebreak-style": 0,
    "max-depth": 0,
    "max-len": [2, 1550, 4],
    "max-nested-callbacks": 0,
    "max-params": 0,
    "max-statements": 0,
    "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
    "newline-after-var": [0, "never"],
    "new-parens": 2,
    "no-alert": 0,
    "no-array-constructor": 2,
    "no-bitwise": 0,
    "no-caller": 2,
    "no-catch-shadow": 0,
    "no-cond-assign": 2,
    "no-console": 0,
    "no-constant-condition": 0,
    "no-continue": 0,
    "no-control-regex": 2,
    "no-debugger": 0,
    "no-delete-var": 2,
    "no-div-regex": 0,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return": 2,
    "no-empty": 0,
    "no-empty-character-class": 2,
    "no-labels": 2,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 0,
    "no-extra-strict": 0,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-lone-blocks": 0,
    "no-lonely-if": 0,
    "no-loop-func": 0,
    "no-mixed-requires": 0,
    "no-mixed-spaces-and-tabs": [2, false],
    "no-multi-spaces": 2,
    "no-multi-str": 0,
    "no-multiple-empty-lines": [2, { "max": 1 }],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 0,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-path-concat": 0,
    "no-plusplus": 0,
    "no-process-env": 0,
    "no-process-exit": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-reserved-keys": 0,
    "no-restricted-modules": 0,
    "no-script-url": 0,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 0,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-ternary": 0,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 0,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unused-expressions": 0,
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],
    "no-var": 2,
    "no-void": 0,
    "no-warning-comments": 0,
    "no-with": 2,
    "object-curly-newline": 0,
    "object-curly-spacing": [2, "always"],
    "one-var": 0,
    "operator-assignment": 0,
    "operator-linebreak": [2, "after"],
    "padded-blocks": 0,
    "prefer-const": 2,
    "quote-props": 0,
    "quotes": [2, "single", "avoid-escape"],
    "radix": 2,
    "jsx-quotes": [2, "prefer-single"],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/media-has-caption": 0,
    "react/display-name": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-no-bind": [2, { "allowArrowFunctions": true }],
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 2,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 0,
    "react/jsx-wrap-multilines": 2,
    "semi-spacing": 0,
    "sort-vars": 0,
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [
      2,
      { "anonymous": "always", "named": "never" }
    ],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "keyword-spacing": 2,
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "spaced-comment": [0, "always"],
    "strict": 0,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "vars-on-top": 2,
    "wrap-iife": [2, "any"],
    "wrap-regex": 0,
    "yoda": [2, "never"]
  }
}
```

Configuración de Webpack (webpack.config.js):