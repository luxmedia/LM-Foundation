LM-Foundation
=============

Custom ZURB-Foundation Framework Fork. Converted Framework SCSS to Stylus. Simplified Structure.

=============

This project is a manual conversion of ZURBs Foundation Framework-Syntax from SASS/SCSS to Stylus. So we can use NodeJS.
It is a reduced Version of Foundation with just the .styl files and .js.

All Grunt or Bower or whatever buildsystems have to be defined on yourself. Also the gridsystem of Foundation isn't our first choice, instead we plan to use and implement jeet.gs

Dependencies
------------
- NodeJS
- Grunt
- Stylus
- Jeet.gs
- jQuery
- Modernizr

Installation
------------

Install NodeJS
```
cd ~/Project
npm install jeet
npm install grunt
npm install grunt-autoprefixer
npm install grunt-svgstore
npm install grunt-contrib-clean
npm install grunt-contrib-coffee
npm install grunt-contrib-connect
npm install grunt-contrib-copy
npm install grunt-contrib-cssmin
npm install grunt-contrib-jade
npm install grunt-contrib-jshint
npm install grunt-contrib-stylus
npm install grunt-contrib-uglify
npm install grunt-contrib-watch
```

NOTE:
-----------
- The Project is in alpha state and for internal use only!

- The module.export() function of foundation is not implemented yet. Instead we make a simple linear import of all .styl files in ```"lm-foundation.styl"```. To avoid duplicate code i converted the ```@import``` rules inside the ```"components/*.styl"``` to ```@require```. This should avoid redundant loading.

- I also removed the predefined !default variables from the ```"components/*.styl"``` files. Alle default values are stored in ```"_global/lm-foundation/_settings.styl"```. Overrides can be done in ```"custom/_settings.styl"```.

- I changed the indentation to 4 spaces instead of 2 spaces. This settings proved to be the best coding environment for me using large displays.

- We do not use foundation's tabs library. Instead we use accessibleTabs which provide a better readable HTML-Markup.

