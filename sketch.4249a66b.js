// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"nyCU":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ball = /*#__PURE__*/function () {
  function Ball(x, y) {
    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.speed = 1.2;
  }

  _createClass(Ball, [{
    key: "draw",
    value: function draw() {
      var r = 50;
      stroke(40);
      fill(228, 26, 74);
      ellipse(this.x, this.y, r, r);
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      // Moving up at a constant speed
      this.y -= this.speed; // Reset to the bottom
      // if top was reached

      if (this.y < 0) {
        this.y = getHeight();
      }
    }
  }]);

  return Ball;
}();

function getHeight() {
  return height - 25;
}

function drawLadder() {
  fill(0, 153, 0);
  rect(width / 2 - 25, 0, 80, window.innerHeight - 90);
}

function drawBackground() {
  noStroke();
  background(102, 178, 255);
}

var ball; // needs to be defined in window for bundler

window.setup = function () {
  console.log('setup p5js sketch');
  var sketchCanvas = createCanvas(window.innerWidth, window.innerHeight - 90);
  sketchCanvas.parent("main-canvas"); // init ball

  var x = width / 2 + 14;
  var y = getHeight() - 9;
  ball = new Ball(x, y);
}; // needs to be defined in window for bundler


window.draw = function () {
  drawBackground();
  drawLadder();

  if (window.gameState) {
    ball.draw();

    if (window.gameStateIsInMove()) {
      ball.moveUp();
    }
  }
};
},{}]},{},["nyCU"], null)
//# sourceMappingURL=https://mkuzdowicz.com/neck-interactive-trainer-demo/sketch.4249a66b.js.map