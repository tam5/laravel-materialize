var Elixir = require('laravel-elixir');
var Config = require('../config');
var fs     = require('fs');

var materializeSassFile = './node_modules/laravel-materialize/tmp/materialize.scss';

/**
 * Build the material css.
 */
Elixir.extend('materializeSass', function() {
    Elixir(function(mix) {
        mix.sass(createSassFile(), Config.cssOutputFile);
    });
});

/**
 * Creates the main sass file for importing mdl.
 *
 * @return {string}
 */
function createSassFile()
{
    fs.writeFile(materializeSassFile, buildImports());

    return materializeSassFile;
}

/**
 * Build up the contents of the sass import file.
 *
 * @return {string}
 */
function buildImports()
{
    var imports = [];

    if (variablesFileExists()) {
        imports.push('./' + Config.mdlPath + 'color-definitions');
        imports.push('./' + Config.sassPath +'variables');
    }

    imports.push('./' + Config.mdlSassFile);

    var toImport = '';
    imports.forEach(function(sassPath) {
        toImport += "@import '" + sassPath + "';\n";
    });

    return toImport;
}

/**
 * Checks if a variables file exists in 'resources/assets/sass'.
 *
 * @return {bool}
 */
function variablesFileExists()
{
    return fileExists(Config.variablesFile);
}

/**
 * Checks if a file exists.
 *
 * @param  {string} file
 * @return {bool}
 */
function fileExists(file) {
    try {
        fs.accessSync(file);
        return true;
    } catch (e) {
        return false;
    }
}
