'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _laravelElixir = require('laravel-elixir');

var _laravelElixir2 = _interopRequireDefault(_laravelElixir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 |----------------------------------------------------------------
 | Materialize Images
 |----------------------------------------------------------------
 |
 | This task simply copies over the necessary images
 | from the Material Design Lite source, into the
 | public directory of the user's application.
 |
 */

function materializeImages() {
    var src = _config2.default.mdlPath + 'images';
    var output = _config2.default.imagesOutputFolder;
    var paths = new _laravelElixir2.default.GulpPaths().src(src).output(output);

    new _laravelElixir2.default.Task('copy', function ($) {
        return gulp.src(paths.src.path, { dot: true }).pipe($.if(!paths.output.isDir, $.rename(paths.output.name))).pipe(this.saveAs(gulp));
    }, paths).watch(paths.src.path).ignore(paths.output.path);
}

exports.default = materializeImages;