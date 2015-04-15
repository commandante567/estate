var elixir = require('laravel-elixir');

require('laravel-elixir-compass');
require('laravel-elixir-browserify');
/*
   |--------------------------------------------------------------------------
   | Elixir Asset Management
   |--------------------------------------------------------------------------
   |
   | Elixir provides a clean, fluent API for defining some basic Gulp tasks
   | for your Laravel application. By default, we are compiling the Less
   | file for our application, as well as publishing vendor resources.
   |

   browserify('flats.js',{
        debug:true,
        insertGlobals:true,
        transform: ["reactify"],
        output: 'public/js'
    })
   */

elixir(function(mix) {
    mix.less('app.less');
    mix.compass('style.scss', "public/css",{
        modules: ['susy'],
        style:'nested',
        font:'public/fonts',
        images:'public/img',
        javascript:'public/js',
        sourcemap:true
    });
    mix.browserify('cool.jsx',{
        debug:true,
        insertGlobals:true,
        transform: ["reactify"],
        output: 'public/js',
        rename: 'cool.js'
        })
});

elixir.extend('livereload', function(src, output) {

    gulp.task('livereload', function() {
        livereload.listen();
        gulp.on('stop', function(){
            livereload.changed('localhost');
        });
    });

    this.registerWatcher('livereload');

    return this.queueTask('livereload');

});
