
# browserify

[http://browserify.org](http://browserify.org)

[https://github.com/substack/node-browserify](https://github.com/substack/node-browserify)


## About

- dependency management
- uses CommonJS style
  * declare dependencies with require()
  * export modules with module.exports or exports
- utilizes npm


## Installation

- get node (homebrew, nodejs.org, etc)
- install npm package globally

  ```
  $ npm install -g browserify
  ```

## Use

- import dependencies using CommonJS styles

  * for 3rd party modules, install with npm

    ```
    $ npm install underscore
    ```

  * for local modules, use relative path

- compile using browserify command

  ```
  $ browserify main.js > bundle.js
  ```

- optionally use a watcher to compile on save


## Transforms

- plugins that allow transforming files before browserifying them
- examples:
  * coffeeify - compile coffeescript
  * liveify   - compile livescript
  * hbsify    - pre-compile handlebars templates
  * deAMDify  - translate AMD modules
  * ... and many more


## Pros

- less "ceremony" to syntax
- bundles up everything into one file
  * closer to production environment
- utilizes npm
  * huge number of packages
  * keep 3rd party libs out of source control
- great for node developers


## Cons

- bundles up everything into one file
  * need to build to use/test
  * difficult to debug (mitigate with source maps)
- requires npm for easy use of 3rd party libs
  * shimming local libs is difficult
  * need browser-specific lib (e.g. jquery-browserify)
  * out-of-sync lib version
    * may not be the latest
    * package version usually differs from lib version
- poor documentation / lack of community


## vs. AMD

- syntax
- npm vs local 3rd party libs
- synchronous vs asynchronous
- multiple files vs one file
- compilation vs no/optional compilation


## Other Alternatives

- almond.js
- curl.js
- yepnope.js
- head.js
- manually
- build tools
  * sprockets
  * grunt
  * etc
