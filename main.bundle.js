/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Block.js":
/*!**********************!*\
  !*** ./lib/Block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = function () {
  function Block(x, y, width, height) {
    _classCallCheck(this, Block);

    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 15;
  }

  _createClass(Block, [{
    key: "draw",
    value: function draw(context, color, border) {
      context.fillStyle = color;
      context.fillRect(this.x, this.y, this.width, this.height);
      context.strokeStyle = border;
      context.lineWidth = 2;
      context.strokeRect(this.x, this.y, this.width, this.height);
      return this;
    }
  }]);

  return Block;
}();

exports.default = Block;

/***/ }),

/***/ "./lib/Bullet.js":
/*!***********************!*\
  !*** ./lib/Bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Player2 = __webpack_require__(/*! ./Player.js */ "./lib/Player.js");

var _Player3 = _interopRequireDefault(_Player2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bullet = function (_Player) {
  _inherits(Bullet, _Player);

  function Bullet(x, y) {
    _classCallCheck(this, Bullet);

    var _this = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, x, y));

    _this.height = 8;
    _this.width = 8;
    _this.dx = 9;
    _this.dy = 3;
    return _this;
  }

  _createClass(Bullet, [{
    key: 'move',
    value: function move() {
      this.y -= this.dy;
    }
  }]);

  return Bullet;
}(_Player3.default);

exports.default = Bullet;

/***/ }),

/***/ "./lib/Centipede.js":
/*!**************************!*\
  !*** ./lib/Centipede.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Segments = __webpack_require__(/*! ./Segments.js */ "./lib/Segments.js");

var _Segments2 = _interopRequireDefault(_Segments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Centipede = function () {
  function Centipede(segArray) {
    _classCallCheck(this, Centipede);

    this.segArray = [];
  }

  _createClass(Centipede, [{
    key: 'makeSelf',
    value: function makeSelf(numSegments) {
      for (var i = 0; i < numSegments; i++) {
        this.segArray[i] = new _Segments2.default(i * 25);
      }
    }
  }]);

  return Centipede;
}();

exports.default = Centipede;

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Bullet = __webpack_require__(/*! ./Bullet.js */ "./lib/Bullet.js");

var _Bullet2 = _interopRequireDefault(_Bullet);

var _Centipede = __webpack_require__(/*! ./Centipede.js */ "./lib/Centipede.js");

var _Centipede2 = _interopRequireDefault(_Centipede);

var _Player = __webpack_require__(/*! ./Player.js */ "./lib/Player.js");

var _Player2 = _interopRequireDefault(_Player);

var _Mushroom = __webpack_require__(/*! ./Mushroom.js */ "./lib/Mushroom.js");

var _Mushroom2 = _interopRequireDefault(_Mushroom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.centipede = new _Centipede2.default();
    this.player = new _Player2.default(350, 600);
    this.mushrooms = new _Mushroom2.default();
    this.score = 0;
    this.lives = 3;
  }

  _createClass(Game, [{
    key: 'playerCollide',
    value: function playerCollide() {
      for (var i = 0; i < this.centipede.segArray.length; i++) {
        var centipedeBody = this.centipede.segArray[i];
        if (centipedeBody.x >= this.player.x && centipedeBody.x <= this.player.x + this.player.width && centipedeBody.y >= this.player.y && centipedeBody.y <= this.player.y + this.player.height) {
          this.restartGame();
          alert('you just lost a life, buddy');
        }
      }
    }
  }, {
    key: 'mushroomCollide',
    value: function mushroomCollide() {
      for (var mushroomCounter = 0; mushroomCounter < this.mushrooms.mushArray.length; mushroomCounter++) {
        for (var i = 0; i < this.centipede.segArray.length; i++) {
          var centipedeBody = this.centipede.segArray[i];
          var clipOfmushrooms = this.mushrooms.mushArray[mushroomCounter];
          if (centipedeBody.x >= clipOfmushrooms.x && centipedeBody.x <= clipOfmushrooms.x + clipOfmushrooms.width && centipedeBody.y >= clipOfmushrooms.y - 10 && centipedeBody.y + centipedeBody.height <= clipOfmushrooms.y + clipOfmushrooms.height + 10) {
            centipedeBody.dx = -centipedeBody.dx;
          }
        }
      }
    }
  }, {
    key: 'bulletCollide',
    value: function bulletCollide() {
      for (var bulletCounter = 0; bulletCounter < this.player.bulletClipArray.length; bulletCounter++) {
        for (var i = 0; i < this.centipede.segArray.length; i++) {
          var centipedeBody = this.centipede.segArray[i];
          var clipOfBullets = this.player.bulletClipArray[bulletCounter];
          if (centipedeBody.x >= clipOfBullets.x && centipedeBody.x <= clipOfBullets.x + clipOfBullets.width && centipedeBody.y >= clipOfBullets.y && centipedeBody.y <= clipOfBullets.y + clipOfBullets.height) {
            this.centipede.segArray.splice(i, 1);
            this.updateScore();
          }
        }
      }
    }
  }, {
    key: 'restartGame',
    value: function restartGame() {
      this.centipede.makeSelf(15);
      this.player = new _Player2.default(350, 600);
      this.updateLives();
    }
  }, {
    key: 'updateScore',
    value: function updateScore() {
      this.score += 100;
      if (this.score === 1500) {
        alert('KEEP IT UP!');
        this.centipede.makeSelf(35);
      }
      if (this.score === 5000) {
        alert('YOU DO YOU BOO!');
        this.centipede.makeSelf(50);
      }
      if (this.score === 10000) {
        alert('!!!!  YOU\'RE A ROCKSTAR WITH A NEW WORLD RECORD  !!!!');
        window.location.reload();
      }
    }
  }, {
    key: 'updateLives',
    value: function updateLives() {
      this.lives--;
      if (this.lives < 1) {
        alert('!!!  GAME OVER  !!!');
        window.location.reload();
      }
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),

/***/ "./lib/Mushroom.js":
/*!*************************!*\
  !*** ./lib/Mushroom.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Block2 = __webpack_require__(/*! ./Block.js */ "./lib/Block.js");

var _Block3 = _interopRequireDefault(_Block2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mushroom = function (_Block) {
  _inherits(Mushroom, _Block);

  function Mushroom(x, y, width, height) {
    _classCallCheck(this, Mushroom);

    var _this = _possibleConstructorReturn(this, (Mushroom.__proto__ || Object.getPrototypeOf(Mushroom)).call(this, x, y, width, height));

    _this.mushArray = [];
    return _this;
  }

  _createClass(Mushroom, [{
    key: 'createMushrooms',
    value: function createMushrooms(numMushrooms) {
      for (var i = 0; i < numMushrooms; i++) {
        this.mushArray[i] = new Mushroom(Math.floor(Math.random() * 690), Math.floor(Math.random() * 570));
      }
    }
  }]);

  return Mushroom;
}(_Block3.default);

exports.default = Mushroom;

/***/ }),

/***/ "./lib/Player.js":
/*!***********************!*\
  !*** ./lib/Player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Block2 = __webpack_require__(/*! ./Block.js */ "./lib/Block.js");

var _Block3 = _interopRequireDefault(_Block2);

var _Bullet = __webpack_require__(/*! ./Bullet.js */ "./lib/Bullet.js");

var _Bullet2 = _interopRequireDefault(_Bullet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function keyPressed() {};

var Player = function (_Block) {
  _inherits(Player, _Block);

  function Player(x, y) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y));

    _this.height = 30;
    _this.width = 30;
    _this.dx = 25;
    _this.dy = 25;
    _this.bulletClipArray = [];
    return _this;
  }

  _createClass(Player, [{
    key: 'move',
    value: function move(direction) {
      if (direction === 'LEFT' && this.x > 0) {
        this.x -= this.dx;
      }
      if (direction === 'UP' && this.y > 0) {
        this.y -= this.dy;
      }
      if (direction === 'RIGHT' && this.x < 665) {
        this.x += this.dx;
      }
      if (direction === 'DOWN' && this.y < 665) {
        this.y += this.dy;
      }
    }
  }, {
    key: 'fireBullets',
    value: function fireBullets() {
      var bullet = new _Bullet2.default(this.x + this.width / 3, this.y);
      this.bulletClipArray.push(bullet);
    }
  }]);

  return Player;
}(_Block3.default);

exports.default = Player;

/***/ }),

/***/ "./lib/Segments.js":
/*!*************************!*\
  !*** ./lib/Segments.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Block2 = __webpack_require__(/*! ./Block.js */ "./lib/Block.js");

var _Block3 = _interopRequireDefault(_Block2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Segments = function (_Block) {
  _inherits(Segments, _Block);

  function Segments(x, width, height) {
    _classCallCheck(this, Segments);

    var _this = _possibleConstructorReturn(this, (Segments.__proto__ || Object.getPrototypeOf(Segments)).call(this, x, width, height));

    _this.y = 20;
    _this.dx = 5;
    _this.dy = 5;
    return _this;
  }

  _createClass(Segments, [{
    key: 'move',
    value: function move(x, y) {
      this.x += this.dx;
      if (this.x > 700 || this.x < 0) {
        this.y = this.y + 20;
        this.dx = -this.dx;
      }
      if (this.y > 700) {
        this.y = 12;
        this.x = 0;
      }
    }
  }]);

  return Segments;
}(_Block3.default);

exports.default = Segments;

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Game = __webpack_require__(/*! ./Game.js */ "./lib/Game.js");

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var game = new _Game2.default(canvas, context, 700, 700);

canvas.addEventListener('click', startGame);

function startGame(e) {
  e.preventDefault;
  game.centipede.makeSelf(15);
  game.mushrooms.createMushrooms(25);
  updateAnimation();
}

function updateAnimation() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawToCanvasSegments();
  drawToCanvasMushrooms();
  drawToCanvasBullets();
  drawToCanvasPlayer();
  displayScore();
  requestAnimationFrame(updateAnimation);
}

function drawToCanvasSegments() {
  game.centipede.segArray.forEach(function (segment) {
    segment.draw(context, 'rgba(100, 300, 10, 10)', 'rgb(112, 12, 252)');
    segment.move();
  });
}

function drawToCanvasMushrooms() {
  game.mushrooms.mushArray.forEach(function (mushroom) {
    mushroom.draw(context, 'rgba(300, 100, 10, 10)', 'rgb(240, 252, 12)');
    game.mushroomCollide();
  });
}

function drawToCanvasBullets() {
  game.player.bulletClipArray.forEach(function (bullet) {
    bullet.draw(context, 'rgba(255, 280, 0, 1)', 'rgb(253,14,205)');
    bullet.move();
    game.bulletCollide();
  });
}

function drawToCanvasPlayer() {
  game.player.draw(context, 'rgba(255, 0, 0, 1)', 'rgba(300, 100, 10, 10)');
  game.playerCollide();
}

window.onkeydown = function playerMove(e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 37:
      game.player.move('LEFT');
      break;
    case 38:
      game.player.move('UP');
      break;
    case 39:
      game.player.move('RIGHT');
      break;
    case 40:
      game.player.move('DOWN');
      break;
    case 32:
      game.player.fireBullets();
      break;
  }
};

function displayScore() {
  var scoreOutput = document.querySelector('.score');
  scoreOutput.innerText = game.score;
  var livesOutput = document.querySelector('.lives');
  livesOutput.innerText = game.lives;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9CdWxsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0NlbnRpcGVkZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvTXVzaHJvb20uanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvU2VnbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkJsb2NrIiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImNvbnRleHQiLCJjb2xvciIsImJvcmRlciIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJzdHJva2VSZWN0IiwiQnVsbGV0IiwiZHgiLCJkeSIsIkNlbnRpcGVkZSIsInNlZ0FycmF5IiwibnVtU2VnbWVudHMiLCJpIiwiR2FtZSIsImNlbnRpcGVkZSIsInBsYXllciIsIm11c2hyb29tcyIsInNjb3JlIiwibGl2ZXMiLCJsZW5ndGgiLCJjZW50aXBlZGVCb2R5IiwicmVzdGFydEdhbWUiLCJhbGVydCIsIm11c2hyb29tQ291bnRlciIsIm11c2hBcnJheSIsImNsaXBPZm11c2hyb29tcyIsImJ1bGxldENvdW50ZXIiLCJidWxsZXRDbGlwQXJyYXkiLCJjbGlwT2ZCdWxsZXRzIiwic3BsaWNlIiwidXBkYXRlU2NvcmUiLCJtYWtlU2VsZiIsInVwZGF0ZUxpdmVzIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJNdXNocm9vbSIsIm51bU11c2hyb29tcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImtleVByZXNzZWQiLCJQbGF5ZXIiLCJkaXJlY3Rpb24iLCJidWxsZXQiLCJwdXNoIiwiU2VnbWVudHMiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnRHYW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3JlYXRlTXVzaHJvb21zIiwidXBkYXRlQW5pbWF0aW9uIiwiY2xlYXJSZWN0IiwiZHJhd1RvQ2FudmFzU2VnbWVudHMiLCJkcmF3VG9DYW52YXNNdXNocm9vbXMiLCJkcmF3VG9DYW52YXNCdWxsZXRzIiwiZHJhd1RvQ2FudmFzUGxheWVyIiwiZGlzcGxheVNjb3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZm9yRWFjaCIsInNlZ21lbnQiLCJkcmF3IiwibW92ZSIsIm11c2hyb29tIiwibXVzaHJvb21Db2xsaWRlIiwiYnVsbGV0Q29sbGlkZSIsInBsYXllckNvbGxpZGUiLCJvbmtleWRvd24iLCJwbGF5ZXJNb3ZlIiwia2V5Q29kZSIsImZpcmVCdWxsZXRzIiwic2NvcmVPdXRwdXQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJUZXh0IiwibGl2ZXNPdXRwdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2xFTUEsSztBQUNKLGlCQUFZQyxDQUFaLEVBQWVDLENBQWYsRUFBa0JDLEtBQWxCLEVBQXlCQyxNQUF6QixFQUFpQztBQUFBOztBQUMvQixTQUFLSCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0Q7Ozs7eUJBRUlDLE8sRUFBU0MsSyxFQUFPQyxNLEVBQVE7QUFDM0JGLGNBQVFHLFNBQVIsR0FBb0JGLEtBQXBCO0FBQ0FELGNBQVFJLFFBQVIsQ0FBaUIsS0FBS1IsQ0FBdEIsRUFBeUIsS0FBS0MsQ0FBOUIsRUFBaUMsS0FBS0MsS0FBdEMsRUFBNkMsS0FBS0MsTUFBbEQ7QUFDQUMsY0FBUUssV0FBUixHQUFzQkgsTUFBdEI7QUFDQUYsY0FBUU0sU0FBUixHQUFvQixDQUFwQjtBQUNBTixjQUFRTyxVQUFSLENBQW1CLEtBQUtYLENBQXhCLEVBQTJCLEtBQUtDLENBQWhDLEVBQW1DLEtBQUtDLEtBQXhDLEVBQStDLEtBQUtDLE1BQXBEO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7Ozs7OztrQkFHWUosSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmY7Ozs7Ozs7Ozs7OztJQUVNYSxNOzs7QUFDSixrQkFBWVosQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0FBQUE7O0FBQUEsZ0hBQ1ZELENBRFUsRUFDUEMsQ0FETzs7QUFFaEIsVUFBS0UsTUFBTCxHQUFjLENBQWQ7QUFDQSxVQUFLRCxLQUFMLEdBQWEsQ0FBYjtBQUNBLFVBQUtXLEVBQUwsR0FBVSxDQUFWO0FBQ0EsVUFBS0MsRUFBTCxHQUFVLENBQVY7QUFMZ0I7QUFNakI7Ozs7MkJBRU07QUFDSixXQUFLYixDQUFMLElBQVUsS0FBS2EsRUFBZjtBQUNGOzs7Ozs7a0JBR1lGLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJmOzs7Ozs7OztJQUVNRyxTO0FBQ0oscUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsUUFBTCxHQUFnQixFQUFoQjtBQUNEOzs7OzZCQUVRQyxXLEVBQWE7QUFDcEIsV0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELFdBQXBCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUNwQyxhQUFLRixRQUFMLENBQWNFLENBQWQsSUFBbUIsdUJBQWFBLElBQUksRUFBakIsQ0FBbkI7QUFDRDtBQUNGOzs7Ozs7a0JBSVlILFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRU1JLEk7QUFDSixrQkFBYztBQUFBOztBQUNaLFNBQUtDLFNBQUwsR0FBaUIseUJBQWpCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLHFCQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBZDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsd0JBQWpCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNEOzs7O29DQUVlO0FBQ2QsV0FBSSxJQUFJTixJQUFJLENBQVosRUFBZUEsSUFBSSxLQUFLRSxTQUFMLENBQWVKLFFBQWYsQ0FBd0JTLE1BQTNDLEVBQW1EUCxHQUFuRCxFQUF3RDtBQUN0RCxZQUFJUSxnQkFBZ0IsS0FBS04sU0FBTCxDQUFlSixRQUFmLENBQXdCRSxDQUF4QixDQUFwQjtBQUNBLFlBQUlRLGNBQWMxQixDQUFkLElBQW1CLEtBQUtxQixNQUFMLENBQVlyQixDQUEvQixJQUNEMEIsY0FBYzFCLENBQWQsSUFBbUIsS0FBS3FCLE1BQUwsQ0FBWXJCLENBQVosR0FBZ0IsS0FBS3FCLE1BQUwsQ0FBWW5CLEtBRDlDLElBRUR3QixjQUFjekIsQ0FBZCxJQUFtQixLQUFLb0IsTUFBTCxDQUFZcEIsQ0FGOUIsSUFHRHlCLGNBQWN6QixDQUFkLElBQW1CLEtBQUtvQixNQUFMLENBQVlwQixDQUFaLEdBQWdCLEtBQUtvQixNQUFMLENBQVlsQixNQUhsRCxFQUcyRDtBQUN6RCxlQUFLd0IsV0FBTDtBQUNBQyxnQkFBTSw2QkFBTjtBQUNEO0FBQ0Y7QUFDRjs7O3NDQUVpQjtBQUNoQixXQUFJLElBQUlDLGtCQUFrQixDQUExQixFQUE2QkEsa0JBQWtCLEtBQUtQLFNBQUwsQ0FBZVEsU0FBZixDQUF5QkwsTUFBeEUsRUFBZ0ZJLGlCQUFoRixFQUFtRztBQUNqRyxhQUFJLElBQUlYLElBQUksQ0FBWixFQUFlQSxJQUFJLEtBQUtFLFNBQUwsQ0FBZUosUUFBZixDQUF3QlMsTUFBM0MsRUFBbURQLEdBQW5ELEVBQXdEO0FBQ3hELGNBQUlRLGdCQUFnQixLQUFLTixTQUFMLENBQWVKLFFBQWYsQ0FBd0JFLENBQXhCLENBQXBCO0FBQ0EsY0FBSWEsa0JBQWtCLEtBQUtULFNBQUwsQ0FBZVEsU0FBZixDQUF5QkQsZUFBekIsQ0FBdEI7QUFDRSxjQUFJSCxjQUFjMUIsQ0FBZCxJQUFtQitCLGdCQUFnQi9CLENBQW5DLElBQ0QwQixjQUFjMUIsQ0FBZCxJQUFtQitCLGdCQUFnQi9CLENBQWhCLEdBQW9CK0IsZ0JBQWdCN0IsS0FEdEQsSUFFRHdCLGNBQWN6QixDQUFkLElBQW1COEIsZ0JBQWdCOUIsQ0FBaEIsR0FBb0IsRUFGdEMsSUFHRHlCLGNBQWN6QixDQUFkLEdBQWtCeUIsY0FBY3ZCLE1BQWhDLElBQTBDNEIsZ0JBQWdCOUIsQ0FBaEIsR0FBb0I4QixnQkFBZ0I1QixNQUFwQyxHQUE2QyxFQUgxRixFQUcrRjtBQUM3RnVCLDBCQUFjYixFQUFkLEdBQW1CLENBQUNhLGNBQWNiLEVBQWxDO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7OztvQ0FFZTtBQUNkLFdBQUksSUFBSW1CLGdCQUFnQixDQUF4QixFQUEyQkEsZ0JBQWdCLEtBQUtYLE1BQUwsQ0FBWVksZUFBWixDQUE0QlIsTUFBdkUsRUFBK0VPLGVBQS9FLEVBQWdHO0FBQzlGLGFBQUksSUFBSWQsSUFBSSxDQUFaLEVBQWVBLElBQUksS0FBS0UsU0FBTCxDQUFlSixRQUFmLENBQXdCUyxNQUEzQyxFQUFtRFAsR0FBbkQsRUFBd0Q7QUFDeEQsY0FBSVEsZ0JBQWdCLEtBQUtOLFNBQUwsQ0FBZUosUUFBZixDQUF3QkUsQ0FBeEIsQ0FBcEI7QUFDQSxjQUFJZ0IsZ0JBQWdCLEtBQUtiLE1BQUwsQ0FBWVksZUFBWixDQUE0QkQsYUFBNUIsQ0FBcEI7QUFDRSxjQUFJTixjQUFjMUIsQ0FBZCxJQUFtQmtDLGNBQWNsQyxDQUFqQyxJQUNEMEIsY0FBYzFCLENBQWQsSUFBbUJrQyxjQUFjbEMsQ0FBZCxHQUFrQmtDLGNBQWNoQyxLQURsRCxJQUVEd0IsY0FBY3pCLENBQWQsSUFBbUJpQyxjQUFjakMsQ0FGaEMsSUFHRHlCLGNBQWN6QixDQUFkLElBQW1CaUMsY0FBY2pDLENBQWQsR0FBa0JpQyxjQUFjL0IsTUFIdEQsRUFHK0Q7QUFDN0QsaUJBQUtpQixTQUFMLENBQWVKLFFBQWYsQ0FBd0JtQixNQUF4QixDQUErQmpCLENBQS9CLEVBQWtDLENBQWxDO0FBQ0EsaUJBQUtrQixXQUFMO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Y7OztrQ0FFYTtBQUNaLFdBQUtoQixTQUFMLENBQWVpQixRQUFmLENBQXdCLEVBQXhCO0FBQ0EsV0FBS2hCLE1BQUwsR0FBYyxxQkFBVyxHQUFYLEVBQWdCLEdBQWhCLENBQWQ7QUFDQSxXQUFLaUIsV0FBTDtBQUNEOzs7a0NBRWE7QUFDWixXQUFLZixLQUFMLElBQWMsR0FBZDtBQUNBLFVBQUksS0FBS0EsS0FBTCxLQUFlLElBQW5CLEVBQXlCO0FBQ3ZCSyxjQUFNLGFBQU47QUFDQSxhQUFLUixTQUFMLENBQWVpQixRQUFmLENBQXdCLEVBQXhCO0FBQ0Q7QUFDRCxVQUFJLEtBQUtkLEtBQUwsS0FBZSxJQUFuQixFQUF5QjtBQUN2QkssY0FBTSxpQkFBTjtBQUNBLGFBQUtSLFNBQUwsQ0FBZWlCLFFBQWYsQ0FBd0IsRUFBeEI7QUFDRDtBQUNELFVBQUksS0FBS2QsS0FBTCxLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCSyxjQUFNLHdEQUFOO0FBQ0FXLGVBQU9DLFFBQVAsQ0FBZ0JDLE1BQWhCO0FBQ0Q7QUFDRjs7O2tDQUVhO0FBQ1osV0FBS2pCLEtBQUw7QUFDQSxVQUFJLEtBQUtBLEtBQUwsR0FBYSxDQUFqQixFQUFvQjtBQUNsQkksY0FBTSxxQkFBTjtBQUNBVyxlQUFPQyxRQUFQLENBQWdCQyxNQUFoQjtBQUNEO0FBQ0Y7Ozs7OztrQkFLWXRCLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZmOzs7Ozs7Ozs7Ozs7SUFFTXVCLFE7OztBQUNOLG9CQUFZMUMsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxLQUFsQixFQUF5QkMsTUFBekIsRUFBaUM7QUFBQTs7QUFBQSxvSEFDdkJILENBRHVCLEVBQ3BCQyxDQURvQixFQUNqQkMsS0FEaUIsRUFDVkMsTUFEVTs7QUFFN0IsVUFBSzJCLFNBQUwsR0FBaUIsRUFBakI7QUFGNkI7QUFHOUI7Ozs7b0NBRWVhLFksRUFBYztBQUM1QixXQUFLLElBQUl6QixJQUFJLENBQWIsRUFBZ0JBLElBQUl5QixZQUFwQixFQUFrQ3pCLEdBQWxDLEVBQXVDO0FBQ3JDLGFBQUtZLFNBQUwsQ0FBZVosQ0FBZixJQUFvQixJQUFJd0IsUUFBSixDQUFhRSxLQUFLQyxLQUFMLENBQVlELEtBQUtFLE1BQUwsS0FBZ0IsR0FBNUIsQ0FBYixFQUFnREYsS0FBS0MsS0FBTCxDQUFZRCxLQUFLRSxNQUFMLEtBQWdCLEdBQTVCLENBQWhELENBQXBCO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZSixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZmOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNLLFVBQVQsR0FBc0IsQ0FBRTs7SUFFbEJDLE07OztBQUNMLGtCQUFZaEQsQ0FBWixFQUFlQyxDQUFmLEVBQWtCO0FBQUE7O0FBQUEsZ0hBQ1hELENBRFcsRUFDUkMsQ0FEUTs7QUFFZixVQUFLRSxNQUFMLEdBQWMsRUFBZDtBQUNBLFVBQUtELEtBQUwsR0FBYSxFQUFiO0FBQ0YsVUFBS1csRUFBTCxHQUFVLEVBQVY7QUFDQSxVQUFLQyxFQUFMLEdBQVUsRUFBVjtBQUNFLFVBQUttQixlQUFMLEdBQXVCLEVBQXZCO0FBTmU7QUFPakI7Ozs7eUJBRUtnQixTLEVBQVc7QUFDZCxVQUFHQSxjQUFjLE1BQWQsSUFBd0IsS0FBS2pELENBQUwsR0FBUyxDQUFwQyxFQUF1QztBQUNyQyxhQUFLQSxDQUFMLElBQVUsS0FBS2EsRUFBZjtBQUNEO0FBQ0QsVUFBSW9DLGNBQWMsSUFBZCxJQUFzQixLQUFLaEQsQ0FBTCxHQUFTLENBQW5DLEVBQXNDO0FBQ3BDLGFBQUtBLENBQUwsSUFBVSxLQUFLYSxFQUFmO0FBQ0Q7QUFDRCxVQUFJbUMsY0FBYyxPQUFkLElBQXlCLEtBQUtqRCxDQUFMLEdBQVMsR0FBdEMsRUFBMkM7QUFDekMsYUFBS0EsQ0FBTCxJQUFVLEtBQUthLEVBQWY7QUFDRDtBQUNELFVBQUlvQyxjQUFjLE1BQWQsSUFBd0IsS0FBS2hELENBQUwsR0FBUyxHQUFyQyxFQUEwQztBQUN4QyxhQUFLQSxDQUFMLElBQVUsS0FBS2EsRUFBZjtBQUNEO0FBQ0Y7OztrQ0FFYTtBQUNaLFVBQU1vQyxTQUFTLHFCQUFXLEtBQUtsRCxDQUFMLEdBQVMsS0FBS0UsS0FBTCxHQUFhLENBQWpDLEVBQW9DLEtBQUtELENBQXpDLENBQWY7QUFDQSxXQUFLZ0MsZUFBTCxDQUFxQmtCLElBQXJCLENBQTBCRCxNQUExQjtBQUNEOzs7Ozs7a0JBR1lGLE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENmOzs7Ozs7Ozs7Ozs7SUFFTUksUTs7O0FBQ0osb0JBQVlwRCxDQUFaLEVBQWVFLEtBQWYsRUFBc0JDLE1BQXRCLEVBQThCO0FBQUE7O0FBQUEsb0hBQ3RCSCxDQURzQixFQUNuQkUsS0FEbUIsRUFDWkMsTUFEWTs7QUFFNUIsVUFBS0YsQ0FBTCxHQUFTLEVBQVQ7QUFDQSxVQUFLWSxFQUFMLEdBQVUsQ0FBVjtBQUNBLFVBQUtDLEVBQUwsR0FBVSxDQUFWO0FBSjRCO0FBSzdCOzs7O3lCQUVJZCxDLEVBQUdDLEMsRUFBRztBQUNULFdBQUtELENBQUwsSUFBVSxLQUFLYSxFQUFmO0FBQ0EsVUFBSSxLQUFLYixDQUFMLEdBQVMsR0FBVCxJQUFnQixLQUFLQSxDQUFMLEdBQVMsQ0FBN0IsRUFBZ0M7QUFDOUIsYUFBS0MsQ0FBTCxHQUFTLEtBQUtBLENBQUwsR0FBUyxFQUFsQjtBQUNBLGFBQUtZLEVBQUwsR0FBVSxDQUFDLEtBQUtBLEVBQWhCO0FBQ0Q7QUFDRCxVQUFJLEtBQUtaLENBQUwsR0FBUyxHQUFiLEVBQWtCO0FBQ2hCLGFBQUtBLENBQUwsR0FBUyxFQUFUO0FBQ0EsYUFBS0QsQ0FBTCxHQUFTLENBQVQ7QUFDRDtBQUNGOzs7Ozs7a0JBR1lvRCxROzs7Ozs7Ozs7Ozs7OztBQ3ZCZjs7Ozs7O0FBRUEsSUFBTUMsU0FBU0MsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUFmO0FBQ0EsSUFBTW5ELFVBQVVpRCxPQUFPRyxVQUFQLENBQWtCLElBQWxCLENBQWhCO0FBQ0EsSUFBTUMsT0FBTyxtQkFBU0osTUFBVCxFQUFpQmpELE9BQWpCLEVBQTBCLEdBQTFCLEVBQStCLEdBQS9CLENBQWI7O0FBRUFpRCxPQUFPSyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0MsU0FBakM7O0FBRUEsU0FBU0EsU0FBVCxDQUFtQkMsQ0FBbkIsRUFBc0I7QUFDcEJBLElBQUVDLGNBQUY7QUFDQUosT0FBS3JDLFNBQUwsQ0FBZWlCLFFBQWYsQ0FBd0IsRUFBeEI7QUFDQW9CLE9BQUtuQyxTQUFMLENBQWV3QyxlQUFmLENBQStCLEVBQS9CO0FBQ0FDO0FBQ0Q7O0FBRUQsU0FBU0EsZUFBVCxHQUEyQjtBQUN6QjNELFVBQVE0RCxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCWCxPQUFPbkQsS0FBL0IsRUFBc0NtRCxPQUFPbEQsTUFBN0M7QUFDQThEO0FBQ0FDO0FBQ0FDO0FBQ0FDO0FBQ0FDO0FBQ0FDLHdCQUFzQlAsZUFBdEI7QUFDRDs7QUFFRCxTQUFTRSxvQkFBVCxHQUFnQztBQUM5QlIsT0FBS3JDLFNBQUwsQ0FBZUosUUFBZixDQUF3QnVELE9BQXhCLENBQWdDLG1CQUFXO0FBQ3pDQyxZQUFRQyxJQUFSLENBQWFyRSxPQUFiLEVBQXNCLHdCQUF0QixFQUFnRCxtQkFBaEQ7QUFDQW9FLFlBQVFFLElBQVI7QUFDRCxHQUhEO0FBSUQ7O0FBRUQsU0FBU1IscUJBQVQsR0FBaUM7QUFDL0JULE9BQUtuQyxTQUFMLENBQWVRLFNBQWYsQ0FBeUJ5QyxPQUF6QixDQUFpQyxvQkFBWTtBQUMzQ0ksYUFBU0YsSUFBVCxDQUFjckUsT0FBZCxFQUF1Qix3QkFBdkIsRUFBaUQsbUJBQWpEO0FBQ0FxRCxTQUFLbUIsZUFBTDtBQUNELEdBSEQ7QUFJRDs7QUFFRCxTQUFTVCxtQkFBVCxHQUErQjtBQUM3QlYsT0FBS3BDLE1BQUwsQ0FBWVksZUFBWixDQUE0QnNDLE9BQTVCLENBQW9DLGtCQUFVO0FBQzVDckIsV0FBT3VCLElBQVAsQ0FBWXJFLE9BQVosRUFBcUIsc0JBQXJCLEVBQTZDLGlCQUE3QztBQUNBOEMsV0FBT3dCLElBQVA7QUFDQWpCLFNBQUtvQixhQUFMO0FBQ0QsR0FKRDtBQUtEOztBQUVELFNBQVNULGtCQUFULEdBQThCO0FBQzVCWCxPQUFLcEMsTUFBTCxDQUFZb0QsSUFBWixDQUFpQnJFLE9BQWpCLEVBQTBCLG9CQUExQixFQUFnRCx3QkFBaEQ7QUFDRXFELE9BQUtxQixhQUFMO0FBQ0g7O0FBRUR2QyxPQUFPd0MsU0FBUCxHQUFtQixTQUFTQyxVQUFULENBQW9CcEIsQ0FBcEIsRUFBdUI7QUFDeENBLElBQUVDLGNBQUY7QUFDQSxVQUFRRCxFQUFFcUIsT0FBVjtBQUNFLFNBQUssRUFBTDtBQUNFeEIsV0FBS3BDLE1BQUwsQ0FBWXFELElBQVosQ0FBaUIsTUFBakI7QUFDQTtBQUNGLFNBQUssRUFBTDtBQUNFakIsV0FBS3BDLE1BQUwsQ0FBWXFELElBQVosQ0FBaUIsSUFBakI7QUFDQTtBQUNGLFNBQUssRUFBTDtBQUNFakIsV0FBS3BDLE1BQUwsQ0FBWXFELElBQVosQ0FBaUIsT0FBakI7QUFDQTtBQUNGLFNBQUssRUFBTDtBQUNFakIsV0FBS3BDLE1BQUwsQ0FBWXFELElBQVosQ0FBaUIsTUFBakI7QUFDQTtBQUNGLFNBQUssRUFBTDtBQUNFakIsV0FBS3BDLE1BQUwsQ0FBWTZELFdBQVo7QUFDQTtBQWZKO0FBa0JELENBcEJEOztBQXNCQSxTQUFTYixZQUFULEdBQXdCO0FBQ3RCLE1BQU1jLGNBQWM3QixTQUFTOEIsYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBRCxjQUFZRSxTQUFaLEdBQXdCNUIsS0FBS2xDLEtBQTdCO0FBQ0EsTUFBTStELGNBQWNoQyxTQUFTOEIsYUFBVCxDQUF1QixRQUF2QixDQUFwQjtBQUNBRSxjQUFZRCxTQUFaLEdBQXdCNUIsS0FBS2pDLEtBQTdCO0FBQ0QsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsIlxuY2xhc3MgQmxvY2sge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMud2lkdGggPSAxNTtcbiAgICB0aGlzLmhlaWdodCA9IDE1O1xuICB9XG5cbiAgZHJhdyhjb250ZXh0LCBjb2xvciwgYm9yZGVyKSB7XG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGJvcmRlcjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDI7XG4gICAgY29udGV4dC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2NrOyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnXG5cbmNsYXNzIEJ1bGxldCBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKHgsIHkpIHtcbiAgICBzdXBlcih4LCB5KTtcbiAgICB0aGlzLmhlaWdodCA9IDg7XG4gICAgdGhpcy53aWR0aCA9IDg7XG4gICAgdGhpcy5keCA9IDk7XG4gICAgdGhpcy5keSA9IDM7XG4gIH1cbiAgXG4gIG1vdmUoKSB7XG4gICAgIHRoaXMueSAtPSB0aGlzLmR5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1bGxldDtcblxuXG4iLCJpbXBvcnQgU2VnbWVudHMgZnJvbSAnLi9TZWdtZW50cy5qcyc7XG5cbmNsYXNzIENlbnRpcGVkZXtcbiAgY29uc3RydWN0b3Ioc2VnQXJyYXkpIHtcbiAgICB0aGlzLnNlZ0FycmF5ID0gW107XG4gIH1cblxuICBtYWtlU2VsZihudW1TZWdtZW50cykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtU2VnbWVudHM7IGkrKykge1xuICAgICAgdGhpcy5zZWdBcnJheVtpXSA9IG5ldyBTZWdtZW50cyhpICogMjUpO1xuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IENlbnRpcGVkZTsiLCJpbXBvcnQgQnVsbGV0IGZyb20gJy4vQnVsbGV0LmpzJztcbmltcG9ydCBDZW50aXBlZGUgZnJvbSAnLi9DZW50aXBlZGUuanMnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllci5qcyc7XG5pbXBvcnQgTXVzaHJvb20gZnJvbSAnLi9NdXNocm9vbS5qcyc7XG5cbmNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNlbnRpcGVkZSA9IG5ldyBDZW50aXBlZGUoKTtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoMzUwLCA2MDApO1xuICAgIHRoaXMubXVzaHJvb21zID0gbmV3IE11c2hyb29tKCk7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gIH1cblxuICBwbGF5ZXJDb2xsaWRlKCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNlbnRpcGVkZS5zZWdBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNlbnRpcGVkZUJvZHkgPSB0aGlzLmNlbnRpcGVkZS5zZWdBcnJheVtpXTtcbiAgICAgIGlmIChjZW50aXBlZGVCb2R5LnggPj0gdGhpcy5wbGF5ZXIueCAmJiBcbiAgICAgICAgKGNlbnRpcGVkZUJvZHkueCA8PSB0aGlzLnBsYXllci54ICsgdGhpcy5wbGF5ZXIud2lkdGgpICYmIFxuICAgICAgICAoY2VudGlwZWRlQm9keS55ID49IHRoaXMucGxheWVyLnkpICYmIFxuICAgICAgICAoY2VudGlwZWRlQm9keS55IDw9IHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5oZWlnaHQpKSB7XG4gICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcbiAgICAgICAgYWxlcnQoJ3lvdSBqdXN0IGxvc3QgYSBsaWZlLCBidWRkeScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG11c2hyb29tQ29sbGlkZSgpIHtcbiAgICBmb3IobGV0IG11c2hyb29tQ291bnRlciA9IDA7IG11c2hyb29tQ291bnRlciA8IHRoaXMubXVzaHJvb21zLm11c2hBcnJheS5sZW5ndGg7IG11c2hyb29tQ291bnRlcisrKSB7XG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jZW50aXBlZGUuc2VnQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBjZW50aXBlZGVCb2R5ID0gdGhpcy5jZW50aXBlZGUuc2VnQXJyYXlbaV07XG4gICAgICBsZXQgY2xpcE9mbXVzaHJvb21zID0gdGhpcy5tdXNocm9vbXMubXVzaEFycmF5W211c2hyb29tQ291bnRlcl07XG4gICAgICAgIGlmIChjZW50aXBlZGVCb2R5LnggPj0gY2xpcE9mbXVzaHJvb21zLnggJiZcbiAgICAgICAgICAoY2VudGlwZWRlQm9keS54IDw9IGNsaXBPZm11c2hyb29tcy54ICsgY2xpcE9mbXVzaHJvb21zLndpZHRoKSAmJlxuICAgICAgICAgIChjZW50aXBlZGVCb2R5LnkgPj0gY2xpcE9mbXVzaHJvb21zLnkgLSAxMCkgJiZcbiAgICAgICAgICAoY2VudGlwZWRlQm9keS55ICsgY2VudGlwZWRlQm9keS5oZWlnaHQgPD0gY2xpcE9mbXVzaHJvb21zLnkgKyBjbGlwT2ZtdXNocm9vbXMuaGVpZ2h0ICsgMTApKSB7XG4gICAgICAgICAgY2VudGlwZWRlQm9keS5keCA9IC1jZW50aXBlZGVCb2R5LmR4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9ICBcblxuICBidWxsZXRDb2xsaWRlKCkge1xuICAgIGZvcihsZXQgYnVsbGV0Q291bnRlciA9IDA7IGJ1bGxldENvdW50ZXIgPCB0aGlzLnBsYXllci5idWxsZXRDbGlwQXJyYXkubGVuZ3RoOyBidWxsZXRDb3VudGVyKyspIHtcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNlbnRpcGVkZS5zZWdBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IGNlbnRpcGVkZUJvZHkgPSB0aGlzLmNlbnRpcGVkZS5zZWdBcnJheVtpXTtcbiAgICAgIGxldCBjbGlwT2ZCdWxsZXRzID0gdGhpcy5wbGF5ZXIuYnVsbGV0Q2xpcEFycmF5W2J1bGxldENvdW50ZXJdO1xuICAgICAgICBpZiAoY2VudGlwZWRlQm9keS54ID49IGNsaXBPZkJ1bGxldHMueCAmJlxuICAgICAgICAgIChjZW50aXBlZGVCb2R5LnggPD0gY2xpcE9mQnVsbGV0cy54ICsgY2xpcE9mQnVsbGV0cy53aWR0aCkgJiZcbiAgICAgICAgICAoY2VudGlwZWRlQm9keS55ID49IGNsaXBPZkJ1bGxldHMueSkgJiZcbiAgICAgICAgICAoY2VudGlwZWRlQm9keS55IDw9IGNsaXBPZkJ1bGxldHMueSArIGNsaXBPZkJ1bGxldHMuaGVpZ2h0KSkge1xuICAgICAgICAgIHRoaXMuY2VudGlwZWRlLnNlZ0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXN0YXJ0R2FtZSgpIHtcbiAgICB0aGlzLmNlbnRpcGVkZS5tYWtlU2VsZigxNSk7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKDM1MCwgNjAwKTtcbiAgICB0aGlzLnVwZGF0ZUxpdmVzKCk7XG4gIH1cblxuICB1cGRhdGVTY29yZSgpIHtcbiAgICB0aGlzLnNjb3JlICs9IDEwMDtcbiAgICBpZiAodGhpcy5zY29yZSA9PT0gMTUwMCkge1xuICAgICAgYWxlcnQoJ0tFRVAgSVQgVVAhJylcbiAgICAgIHRoaXMuY2VudGlwZWRlLm1ha2VTZWxmKDM1KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2NvcmUgPT09IDUwMDApIHtcbiAgICAgIGFsZXJ0KCdZT1UgRE8gWU9VIEJPTyEnKVxuICAgICAgdGhpcy5jZW50aXBlZGUubWFrZVNlbGYoNTApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY29yZSA9PT0gMTAwMDApIHtcbiAgICAgIGFsZXJ0KCchISEhICBZT1VcXCdSRSBBIFJPQ0tTVEFSIFdJVEggQSBORVcgV09STEQgUkVDT1JEICAhISEhJyk7XG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTGl2ZXMoKSB7XG4gICAgdGhpcy5saXZlcy0tO1xuICAgIGlmICh0aGlzLmxpdmVzIDwgMSkge1xuICAgICAgYWxlcnQoJyEhISAgR0FNRSBPVkVSICAhISEnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7XG5cbiIsImltcG9ydCBCbG9jayBmcm9tICcuL0Jsb2NrLmpzJztcblxuY2xhc3MgTXVzaHJvb20gZXh0ZW5kcyBCbG9ja3tcbmNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBzdXBlcih4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLm11c2hBcnJheSA9IFtdO1xuICB9XG5cbiAgY3JlYXRlTXVzaHJvb21zKG51bU11c2hyb29tcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTXVzaHJvb21zOyBpKyspIHtcbiAgICAgIHRoaXMubXVzaEFycmF5W2ldID0gbmV3IE11c2hyb29tKE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiA2OTApKSwgTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIDU3MCkpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVzaHJvb207IiwiaW1wb3J0IEJsb2NrIGZyb20gJy4vQmxvY2suanMnO1xuaW1wb3J0IEJ1bGxldCBmcm9tICcuL0J1bGxldC5qcyc7XG5cbmZ1bmN0aW9uIGtleVByZXNzZWQoKSB7fTtcblxuY2xhc3MgUGxheWVyIGV4dGVuZHMgQmxvY2t7XG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcblx0XHRzdXBlcih4LCB5KTtcbiAgICB0aGlzLmhlaWdodCA9IDMwO1xuICAgIHRoaXMud2lkdGggPSAzMDtcblx0XHR0aGlzLmR4ID0gMjU7XG5cdFx0dGhpcy5keSA9IDI1OyBcbiAgICB0aGlzLmJ1bGxldENsaXBBcnJheSA9IFtdO1xuXHR9XG5cbiAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICBpZihkaXJlY3Rpb24gPT09ICdMRUZUJyAmJiB0aGlzLnggPiAwKSB7XG4gICAgICB0aGlzLnggLT0gdGhpcy5keDtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ1VQJyAmJiB0aGlzLnkgPiAwKSB7XG4gICAgICB0aGlzLnkgLT0gdGhpcy5keTtcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ1JJR0hUJyAmJiB0aGlzLnggPCA2NjUpIHtcbiAgICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIH1cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnRE9XTicgJiYgdGhpcy55IDwgNjY1KSB7XG4gICAgICB0aGlzLnkgKz0gdGhpcy5keTtcbiAgICB9XG4gIH1cblxuICBmaXJlQnVsbGV0cygpIHtcbiAgICBjb25zdCBidWxsZXQgPSBuZXcgQnVsbGV0KHRoaXMueCArIHRoaXMud2lkdGggLyAzLCB0aGlzLnkpO1xuICAgIHRoaXMuYnVsbGV0Q2xpcEFycmF5LnB1c2goYnVsbGV0KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiaW1wb3J0IEJsb2NrIGZyb20gJy4vQmxvY2suanMnO1xuXG5jbGFzcyBTZWdtZW50cyBleHRlbmRzIEJsb2Nre1xuICBjb25zdHJ1Y3Rvcih4LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgc3VwZXIoeCwgd2lkdGgsIGhlaWdodCk7XG4gICAgdGhpcy55ID0gMjA7XG4gICAgdGhpcy5keCA9IDU7XG4gICAgdGhpcy5keSA9IDU7XG4gIH1cblxuICBtb3ZlKHgsIHkpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICBpZiAodGhpcy54ID4gNzAwIHx8IHRoaXMueCA8IDApIHtcbiAgICAgIHRoaXMueSA9IHRoaXMueSArIDIwO1xuICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xuICAgIH1cbiAgICBpZiAodGhpcy55ID4gNzAwKSB7XG4gICAgICB0aGlzLnkgPSAxMjtcbiAgICAgIHRoaXMueCA9IDA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlZ21lbnRzOyIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZS5qcyc7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJyk7XG5jb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY2FudmFzLCBjb250ZXh0LCA3MDAsIDcwMCk7XG5cbmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN0YXJ0R2FtZSk7XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQ7XG4gIGdhbWUuY2VudGlwZWRlLm1ha2VTZWxmKDE1KTtcbiAgZ2FtZS5tdXNocm9vbXMuY3JlYXRlTXVzaHJvb21zKDI1KTtcbiAgdXBkYXRlQW5pbWF0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFuaW1hdGlvbigpIHtcbiAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgZHJhd1RvQ2FudmFzU2VnbWVudHMoKTtcbiAgZHJhd1RvQ2FudmFzTXVzaHJvb21zKCk7XG4gIGRyYXdUb0NhbnZhc0J1bGxldHMoKTtcbiAgZHJhd1RvQ2FudmFzUGxheWVyKCk7XG4gIGRpc3BsYXlTY29yZSgpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlQW5pbWF0aW9uKTtcbn1cblxuZnVuY3Rpb24gZHJhd1RvQ2FudmFzU2VnbWVudHMoKSB7XG4gIGdhbWUuY2VudGlwZWRlLnNlZ0FycmF5LmZvckVhY2goc2VnbWVudCA9PiB7XG4gICAgc2VnbWVudC5kcmF3KGNvbnRleHQsICdyZ2JhKDEwMCwgMzAwLCAxMCwgMTApJywgJ3JnYigxMTIsIDEyLCAyNTIpJyk7XG4gICAgc2VnbWVudC5tb3ZlKCk7XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRyYXdUb0NhbnZhc011c2hyb29tcygpIHtcbiAgZ2FtZS5tdXNocm9vbXMubXVzaEFycmF5LmZvckVhY2gobXVzaHJvb20gPT4ge1xuICAgIG11c2hyb29tLmRyYXcoY29udGV4dCwgJ3JnYmEoMzAwLCAxMDAsIDEwLCAxMCknLCAncmdiKDI0MCwgMjUyLCAxMiknKTtcbiAgICBnYW1lLm11c2hyb29tQ29sbGlkZSgpO1xuICB9KVxufVxuICAgIFxuZnVuY3Rpb24gZHJhd1RvQ2FudmFzQnVsbGV0cygpIHtcbiAgZ2FtZS5wbGF5ZXIuYnVsbGV0Q2xpcEFycmF5LmZvckVhY2goYnVsbGV0ID0+IHtcbiAgICBidWxsZXQuZHJhdyhjb250ZXh0LCAncmdiYSgyNTUsIDI4MCwgMCwgMSknLCAncmdiKDI1MywxNCwyMDUpJyk7XG4gICAgYnVsbGV0Lm1vdmUoKTtcbiAgICBnYW1lLmJ1bGxldENvbGxpZGUoKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gZHJhd1RvQ2FudmFzUGxheWVyKCkge1xuICBnYW1lLnBsYXllci5kcmF3KGNvbnRleHQsICdyZ2JhKDI1NSwgMCwgMCwgMSknLCAncmdiYSgzMDAsIDEwMCwgMTAsIDEwKScpO1xuICAgIGdhbWUucGxheWVyQ29sbGlkZSgpO1xufVxuICAgXG53aW5kb3cub25rZXlkb3duID0gZnVuY3Rpb24gcGxheWVyTW92ZShlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICBjYXNlIDM3OlxuICAgICAgZ2FtZS5wbGF5ZXIubW92ZSgnTEVGVCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzODpcbiAgICAgIGdhbWUucGxheWVyLm1vdmUoJ1VQJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM5OlxuICAgICAgZ2FtZS5wbGF5ZXIubW92ZSgnUklHSFQnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA6XG4gICAgICBnYW1lLnBsYXllci5tb3ZlKCdET1dOJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMyOlxuICAgICAgZ2FtZS5wbGF5ZXIuZmlyZUJ1bGxldHMoKTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbn07XG5cbmZ1bmN0aW9uIGRpc3BsYXlTY29yZSgpIHtcbiAgY29uc3Qgc2NvcmVPdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUnKTtcbiAgc2NvcmVPdXRwdXQuaW5uZXJUZXh0ID0gZ2FtZS5zY29yZTtcbiAgY29uc3QgbGl2ZXNPdXRwdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGl2ZXMnKTtcbiAgbGl2ZXNPdXRwdXQuaW5uZXJUZXh0ID0gZ2FtZS5saXZlcztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=