var Elixir = require('laravel-elixir');
var Config = require('../config');

/**
 * Build the material JavaScripts.
 */
Elixir.extend('materializeJs', function() {
    Elixir(function(mix) {
        mix.scripts([
            './' + Config.mdlPath + '*.js',
            './' + Config.mdlPath + '*/*.js',
        ], Config.jsOutputFile)
    });
});
