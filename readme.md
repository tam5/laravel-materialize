# Laravel Materialize

Want to quickly integrate Google's [Material Design](http://www.google.com/design/spec/material-design/introduction.html) into a Laravel project in a clean, yet customizable way without the hassle of configuring everything? Then you've come to the right place!

With the help of Laravel Elixir, this package pulls in the components from Google's [Material Design Lite](https://getmdl.io) for easy integration with Laravel.

## Installation

##### Install:

```sh
npm install laravel-materialize --save-dev
```

##### Compile:

In your `gulpfile.js`, require and use the package. For example:

```javascript
var elixir = require('laravel-elixir');
require('laravel-materialize');
 
elixir(function(mix) {
  mix.materialize();
});
```

Run `gulp` and all the assets will be compiled. Yeah, that's it!

## Usage

To include the assets into your layout add this to your `<head>`

```html
<!-- Material Styles -->
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="{{ asset('css/materialize.css') }}">
```

And this right before the end of your `<body>`

```html
<!-- Material JavaScripts -->
<script src="{{ asset('js/materialize.js') }}"></script>
```

Now go add mdl components and classes to your views! Check out the mdl [documentation](https://getmdl.io) for quick reference.

## Customization

Want to change the colors of your app? How about the font? Want to tweak the defaults of Material Design to make it unique to your app? Sure, couldn't be easier! All you've got to do is create a `_variables.scss` file within `resources/assets/sass` and set the MDL variables to what you'd like. After you `gulp` all your assets will be updated with the new values you specified. Here is a quick reference on the most basic things you'll likely want to change:

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

#### Even more customization

If for whatever reason your Laravel file structure is different than the default, you can configure Laravel Elixir to work with your project. If you do that, your changes will also be reflected in this package, so you won't have to worry about it. If however you have some need to manually change the paths for this package, have a quick look at the `Config.js` file at the root of the package.

## Contributing

Have an idea of how this could be even easier to use? Have any other random comment you'd like to share? Just create a new issue and we can chat about it.

Or, take a look at the [to do list](https://github.com/tam5/laravel-materialize/wiki/To-do-list) and see if you can help tackle something there.
