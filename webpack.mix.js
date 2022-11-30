let mix = require('laravel-mix');
require('laravel-mix-eslint');
require('laravel-mix-clean');

const proxy = './index.html' || null;

/*
  |--------------------------------------------------------------------------
  | DO NOT EDIT BELOW
  |--------------------------------------------------------------------------
 */

mix
  // Scripts
  .js('sources/js/index.js', 'js/main.bundle.js')
  // Run ESLint on every file
  .eslint({
    fix: true,
    extensions: ['js']
    //...
  })
  // Styles
  .sass('sources/css/main.scss', 'css/main.css')
    .options({
      postCss: [
        require('tailwindcss'),
        require('postcss-nested'),
        require('tailwindcss/nesting'),
        require('autoprefixer'),
      ]
    })
  // Set the public path to the dist folder
  .setPublicPath('dist')
  // BrowserSync
  .browserSync({
    // proxy,
    server: "./",
    files: [
      './index.html',
      './*.{php, twig, html}',
      './partials/*.php',
      'dist/**/*.{js,css}',
      'sources/**/*.{js,css}'
    ],
  })
  // Run default output cleaning
  .clean()
  // Versioning
  .version()
  .options({
    processCssUrls: false,
  });
