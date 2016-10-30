'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sass = require('./sass');

var _sass2 = _interopRequireDefault(_sass);

var _images = require('./images');

var _images2 = _interopRequireDefault(_images);

var _scripts = require('./scripts');

var _scripts2 = _interopRequireDefault(_scripts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var materialize = function () {
  function materialize() {
    _classCallCheck(this, materialize);
  }

  _createClass(materialize, [{
    key: 'sass',


    /**
     * Build the Sass assets.
     *
     * @return {this}
     */
    value: function sass() {
      (0, _sass2.default)();
      return this;
    }

    /**
     * Build the JavaScript assets.
     *
     * @return {this}
     */

  }, {
    key: 'js',
    value: function js() {
      (0, _scripts2.default)();
      return this;
    }

    /**
     * Build the image assets.
     *
     * @return {this}
     */

  }, {
    key: 'images',
    value: function images() {
      (0, _images2.default)();
      return this;
    }
  }]);

  return materialize;
}();

exports.default = new materialize();