var Elixir = require('laravel-elixir');
var Config = require('../config');

/**
 * Copy over the material images.
 */
Elixir.extend('materializeImages', function() {
    Elixir(function(mix) {
        mix.copy(Config.mdlPath + 'images', Config.imagesOutputFolder);
    });
});
