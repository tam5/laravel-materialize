<p align="center">
  <img width="300"src="https://cloud.githubusercontent.com/assets/11488762/19834991/f2b21774-9e4d-11e6-99f4-f0e582c38cd3.png">
</p>

## Intro

This package allows you to quickly and cleanly integrate Google's [Material Design Lite](https://getmdl.io) into your Laravel project, while still giving you flexibility.

If your frontend will be heavily composed of vue components, you may want to also check out [vue-mdl](https://github.com/posva/vue-mdl).

## Installation

This package can work with new or existing Laravel projects. If you don't already have a Laravel application, [create one](https://laravel.com/docs/5.3/installation).


Then, install the package:

```sh
npm install --save-dev laravel-materialize
```

## Usage

In your `gulpfile.js`, require and use the package. For example:

```javascript
const elixir = require('laravel-elixir');

require('laravel-materialize');
require('laravel-elixir-vue-2');

elixir(mix => {
    mix.sass('app.scss')
       .materialize()
       .webpack('app.js');
});
```

Run `gulp` to compile the assets.

Include the assets in your layout by adding this to your `<head>`

```html
<!-- Material Styles -->
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
<link rel="stylesheet" href="/css/materialize.css">
```

And this right before the end of your `<body>`

```html
<!-- Material JavaScripts -->
<script src="/js/materialize.js"></script>
```

Now go add mdl components and classes to your views! Check out the mdl [documentation](https://getmdl.io) for quick reference.

For example, add a simple button to any of your views to make sure everything is working:

```html
<!-- Colored FAB button with ripple -->
<button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
  <i class="material-icons">add</i>
</button>
```

## Customization

Want to change the colors of your app? How about the font? Want to tweak the defaults of Material Design to make it unique to your app? Sure, it's easy! 

Create a file called `_mdl-variables.scss` within `resources/assets/sass` and set whatever MDL variables you want. For example:

```scss
// colors
$color-primary: $palette-indigo-500;
$color-accent: $palette-pink-A200;

$text-color-primary: rgba-tpl($color-black, 0.87);
$text-link-color: $color-accent;

// font
$preferred_font: 'Roboto', 'Helvetica', 'Arial', sans-serif;
$performance_font: 'Helvetica', 'Arial', sans-serif;
```

For a full list of variables you can set, see [here](https://github.com/google/material-design-lite/blob/master/src/_variables.scss);

**Note:** The sass color variables defined by MDL (ex: `$palette-indigo-500`) will automatically be injected for you.  

**Another Note:** If you are specifying your own color value, some of the colors will only work if you give an rgb value. (ex: `0, 0, 0`, rather than `#000` or `rgb(0,0,0)`) -- more info can be found in the issues [here](https://github.com/google/material-design-lite/issues).

## Contributing

Go for it.
