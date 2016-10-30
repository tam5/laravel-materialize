import Elixir from 'laravel-elixir';
import materialize from './materialize/materialize';

/**
 * Build all the assets needed for Material Design Lite.
 */
Elixir.extend('materialize', function () {
  materialize
    .sass()
    .js()
    .images();
});

