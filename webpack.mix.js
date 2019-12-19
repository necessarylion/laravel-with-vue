const mix = require('laravel-mix');

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
mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@admin': __dirname + '/resources/admin/js/',
            '@user': __dirname + '/resources/user/js',
        }
    }
})
mix.js('resources/admin/js/app.js', 'public/admin/js')
    .sass('resources/admin/sass/app.scss', 'public/admin/css')
    .js('resources/user/js/app.js', 'public/user/js')
    .sass('resources/user/sass/app.scss', 'public/user/css');
