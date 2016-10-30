'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _laravelElixir = require('laravel-elixir');

var _laravelElixir2 = _interopRequireDefault(_laravelElixir);

var _CombineTask = require('../tasks/CombineTask');

var _CombineTask2 = _interopRequireDefault(_CombineTask);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 |----------------------------------------------------------------
 | Materialize Scripts
 |----------------------------------------------------------------
 |
 | This task will concatenate and minify your the Material
 | Design Lite JavaScript files. This way, all the user
 | has to do is add one script tag to his HTML page.
 |
 */

function materializeScripts() {
  new _CombineTask2.default('scripts', getPaths(['./' + _config2.default.mdlPath + '*.js', './' + _config2.default.mdlPath + '*/*.js'], null, _config2.default.jsOutputFile));

  /**
   * Prep the Gulp src and output paths.
   *
   * @param  {string|Array} src
   * @param  {string|null}  baseDir
   * @param  {string|null}  output
   * @return {GulpPaths}
   */
  function getPaths(src, baseDir, output) {
    return new _laravelElixir2.default.GulpPaths().src(src, baseDir || _laravelElixir2.default.config.get('assets.js.folder')).output(output || _laravelElixir2.default.config.get('public.js.outputFolder'), 'all.js');
  }
}

exports.default = materializeScripts;