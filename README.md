# br-jquery

`br-jquery` is a node.js module for including jQuery in browserify.
It is currently jQuery 1.7.2.

## Usage

This is published on *npm* as *br-jquery*. You can install it with `npm
install br-jquery`.

The simplest way is to require the module in the call to create the
bundle:

``` javascript
var js = require('browserify')({require: {jquery: 'br-jquery'}}).bundle();
```

This module follows the browserify convention of using `require()`, and
uses [jQuery.noConflict()](http://api.jquery.com/jQuery.noConflict/).
To use the jQuery module from the browser, use something like
`var $ = require('jquery');`

## Example

To run the example:

```
cd example
npm install
npm start
```

## Verifying

To verify that this contains the original jQuery source with a simple
wrapper around it, read and run `node build.js`, and check that the
files haven't changed.

## minifed version

to include the minified version, use a middleware:

``` javascript
var browserify = require('browserify'),
    jq = require('br-jquery');

var bundle = browserify();
bundle.use(jq.min); // or jq to bundle the non-minified version

var js = bundle.bundle();
```

note that browserify can minify files for you, so you may not want to use
the minified version supplied here, even if the end result will be minified.

## old version

to include 1.6.4, do this:

``` javascript
var browserify = require('browserify'),
    jq = require('br-jquery');

var bundle = browserify();
bundle.use(jq({version: '1.6.4'})); // or {version: '1.6.4', min: true}

var js = bundle.bundle();
```

## Author

* Ben Atkin <ben@benatkin.com>

<a rel="license" href="http://creativecommons.org/publicdomain/zero/1.0/">
  <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
</a>

To the extent possible under law, I, Ben Atkin, have waived all copyright and related or neighboring rights to this work.
