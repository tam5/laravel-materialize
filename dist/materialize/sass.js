'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _laravelElixir = require('laravel-elixir');

var _laravelElixir2 = _interopRequireDefault(_laravelElixir);

var _CssTask = require('../tasks/CssTask');

var _CssTask2 = _interopRequireDefault(_CssTask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 |----------------------------------------------------------------
 | Materialize Sass
 |----------------------------------------------------------------
 |
 | This task will handle all preprocessing of the MDL sass.
 | We also allow the user to include a variables file so
 | that he's able to override the default MDL styles.
 */

function materializeSass() {
  new _CssTask2.default('sass', getPaths(constructImportsFile(), _laravelElixir2.default.config.publicPath + '/css/materialize.css'));

  /**
   * Creates the main sass file for importing mdl.
   *
   * @return {string}
   */
  function constructImportsFile() {
    var importsFilePath = './node_modules/laravel-materialize/dist/tmp/materialize.scss';

    _fs2.default.writeFile(importsFilePath, buildImports());

    return importsFilePath;
  }

  /**
   * Build up the contents of the sass import file.
   *
   * @return {string}
   */
  function buildImports() {
    var imports = [];

    if (variablesFileExists()) {
      imports.push('./' + _config2.default.mdlPath + 'color-definitions');
      imports.push('./' + _config2.default.sassPath + 'variables');
    }

    imports.push('./' + _config2.default.mdlSassFile);

    var toImport = '';
    imports.forEach(function (sassPath) {
      toImport += "@import '" + sassPath + "';\n";
    });

    return toImport;
  }

  /**
   * Checks if a variables file exists in 'resources/assets/sass'.
   *
   * @return {bool}
   */
  function variablesFileExists() {
    return fileExists(_config2.default.variablesFile);
  }

  /**
   * Checks if a file exists.
   *
   * @param  {string} file
   * @return {bool}
   */
  function fileExists(file) {
    try {
      _fs2.default.accessSync(file);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Prep the Gulp src and output paths.
   *
   * @param  {string|Array} src
   * @param  {string|null}  baseDir
   * @param  {string|null}  output
   * @return {GulpPaths}
   */
  function getPaths(src, baseDir, output) {
    return new _laravelElixir2.default.GulpPaths().src(src, baseDir || _laravelElixir2.default.config.get('assets.css.sass.folder')).output(output || _laravelElixir2.default.config.get('public.css.outputFolder'), 'app.css');
  };
}

exports.default = materializeSass;