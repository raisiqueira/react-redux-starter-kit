# React Redux Starter Kit

A starter kit to build React + Redux apps. Feel free to colaborate and improve it.

This project is based on  [generator-redux-stack](https://github.com/zakangelle/generator-redux-stack).

***

## Tech Stack

* [react (v15)](https://facebook.github.io/react/) - View layer
* [react-router (v4)](https://reacttraining.com/react-router/web/guides/quick-start) - Router
* [redux](https://github.com/reactjs/redux) - State management
* [redux-thunk](https://github.com/gaearon/redux-thunk) - Async actions
* [sass](http://sass-lang.com/) - CSS preprocessor
* [react-css-modules](https://github.com/gajus/react-css-modules) - Scoped CSS modules
* [babel](https://babeljs.io/) - ES6/JSX compiler
* [webpack (v2)](https://webpack.github.io/) - Module bundler
* [jest](https://facebook.github.io/jest/) - Test suite
* [flow](https://flow.org/) - type checker
* [react helmet](https://github.com/nfl/react-helmet) - manage all of your changes to the document head.
* [immutable](https://facebook.github.io/immutable-js) - immutable js
* [axios](https://github.com/mzabriskie/axios) - http client


## Setup:

```
npm install -g yo
npm install -g generator-redux-stack
```

## Usage

```sh
$ npm start
```

## Module Generators

Generate a new container:

```sh
$ yo redux-stack:container
```

Generate a new component:

```sh
$ yo redux-stack:component
```

Generate a new set of actions with corresponding reducer:

```sh
$ yo redux-stack:actions
```

## Dev Tooling

* Hot module replacement
* Redux time travel (using [redux-devtools](https://github.com/gaearon/redux-devtools))
* Redux devtools monitors ([log](https://github.com/gaearon/redux-devtools-log-monitor), [diff](https://github.com/whetstone/redux-devtools-diff-monitor), [slider](https://github.com/calesce/redux-slider-monitor), [import/export](https://github.com/lapanoid/redux-import-export-monitor))
* Redux action log (using [redux-logger](https://github.com/evgenyrodionov/redux-logger))

### Keyboard Shortcuts

+ <kbd>ctrl</kbd> + <kbd>h</kbd> - Show/hide `redux-devtools` dock
+ <kbd>ctrl</kbd> + <kbd>c</kbd> - Change `redux-devtools` monitor
+ <kbd>ctrl</kbd> + <kbd>m</kbd> - Move `redux-devtools` dock
+ <kbd>ctrl</kbd> + <kbd>e</kbd> - Show redux import/export tool
