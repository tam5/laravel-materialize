var Elixir = require('laravel-elixir');

/*
 |----------------------------------------------------------------
 | Application Assets
 |----------------------------------------------------------------
 |
 | These properties tell the package where to find the source files 
 | for your application assets. By default these properties will
 | differ Elixir's configuration, for a much easier workflow.
 |
 */
var sassPath      = Elixir.config.assetsPath + '/' + Elixir.config.css.sass.folder + '/';
var variablesFile = sassPath + '_variables.scss';

/*
 |----------------------------------------------------------------
 | Asset Outputs
 |----------------------------------------------------------------
 |
 | Once all of the Material Design Lite files have been merged 
 | and compiled, they'll be saved to your public directory.
 | Here you can choose exactly where they will be saved.
 |
 */
var cssOutputFile      = Elixir.config.publicPath + '/css/materialize.css';
var jsOutputFile       = Elixir.config.publicPath + '/js/materialize.js';
var imagesOutputFolder = Elixir.config.publicPath + '/images';

/*
 |----------------------------------------------------------------
 | 'Material Design Lite' Source Location
 |----------------------------------------------------------------
 |
 | Once all of the Material Design Lite files have been merged 
 | and compiled, they'll be saved to your public directory.
 | Here you can choose exactly where they will be saved.
 |
 */
var mdlPath     = 'node_modules/material-design-lite/src/';
var mdlSassFile = mdlPath + 'styleguide';


/**
 * Export all of the configuration settings set above 
 * so that they will be accessible cleanly as well   
 * as easily through the familiar dot notation.
 */
var config = {
    sassPath                     : sassPath,
    mdlPath                      : mdlPath,
    mdlSassFile                  : mdlSassFile,
    variablesFile                : variablesFile,
    cssOutputFile                : cssOutputFile,
    jsOutputFile                 : jsOutputFile,
    imagesOutputFolder           : imagesOutputFolder,
};

module.exports = config;
