const mix = require('laravel-mix');
const fs = require('fs');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
// if (fs.exists("../back/"))
mix.setPublicPath('../back/').js('js/app.js', 'static/js')
    .vue()
    .sass('sass/app.scss', 'static/css');
// else
// mix.js('js/app.js', 'static/js')
//     .vue()
//     .sass('sass/app.scss', 'static/css');