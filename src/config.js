const Elixir = require('laravel-elixir');

/*
 |----------------------------------------------------------------
 | Application Assets
 |----------------------------------------------------------------
 |
 | These properties tell the package where to find the source files 
 | for your application assets. By default these properties will
 | differ to Elixir's configuration, but you may change them.   
 |
 */
let sassPath      = Elixir.config.assetsPath + '/' + Elixir.config.css.sass.folder + '/';
let variablesFile = sassPath + '_mdl-variables.scss';

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
let cssOutputFile      = Elixir.config.publicPath + '/css/materialize.css';
let jsOutputFile       = Elixir.config.publicPath + '/js/materialize.js';
let imagesOutputFolder = Elixir.config.publicPath + '/images';

/*
 |----------------------------------------------------------------
 | 'Material Design Lite' Source Location
 |----------------------------------------------------------------
 |
 | The location of 'Material Design Lite' source files is
 | specified here. You really shouldn't have to change
 | this. However, you may change it if you need to.
 |
 */
let mdlPath     = 'node_modules/material-design-lite/src/';
let mdlSassFile = mdlPath + 'styleguide';


/**
 * Export all of the configuration settings set above 
 * so that they will be accessible cleanly as well   
 * as easily through the familiar dot notation.
 */
const config = {
  sassPath,
  mdlPath,
  mdlSassFile,
  variablesFile,
  cssOutputFile,
  jsOutputFile,
  imagesOutputFolder
};

module.exports = config;
