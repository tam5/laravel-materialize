'use strict';

var _laravelElixir = require('laravel-elixir');

var _laravelElixir2 = _interopRequireDefault(_laravelElixir);

var _materialize = require('./materialize/materialize');

var _materialize2 = _interopRequireDefault(_materialize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Build all the assets needed for Material Design Lite.
 */
_laravelElixir2.default.extend('materialize', function () {
  _materialize2.default.sass().js().images();
});