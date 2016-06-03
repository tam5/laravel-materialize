var Elixir = require('laravel-elixir');

require('require-dir')('./tasks');

/**
 * Build all the assets needed for Material Design Lite.
 */
Elixir.extend('materialize', function() {
    Elixir(function(mix) {
        mix
        .materializeSass()
        .materializeJs()
        .materializeImages();
    });
});
