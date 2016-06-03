var Elixir = require('laravel-elixir');

/**
 * Watch a resource for changes.
 */
Elixir.extend('watch', function(src) {
    new Elixir.Task('watch', function() {

    })
    .watch(src);
});

/**
 * Ignore a resource for changes.
 */
Elixir.extend('ignore', function(src) {
    new Elixir.Task('ignore', function() {

    })
    .ignore(src);
});
