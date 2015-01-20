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

1. Install NodeJS using the Installer binary available from http://nodejs.org/
2. Install packages via console (Mac OS "Terminal.app"):
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
npm install svg-stylus
```
or let the package.json do all the work for you and type inside of your local project directory the following command:
```
npm install
```
maybe a `sudo` is required in some environments (e.g. Mac os)

NOTE:
-----------
- The Project is in alpha state and for internal use only!

- The module.export() function of foundation is not implemented yet. Instead we make a simple linear import of all .styl files in ```"lm-foundation.styl"```. To avoid duplicate code i converted the ```@import``` rules inside the ```"components/*.styl"``` to ```@require```. This avoids redundant loading.

- All style overrides can be done in ```"_global/lm-foundation/_settings.styl"```. The outcommented code segments could be outdated! So look in the corresponding .styl files first, for the actual available variables. New or custom settings and variables can be defined in ```"custom/_settings.styl"```. Inside of the `"custom"` directory you can also implement your own .styl files for your projects.

- I changed the indentation to 4 spaces instead of 2 spaces. This settings proved to be the best coding environment for me using widescreen displays.
- 
- The jeet.gs grid framework is integrated as a support for situations, where the foundation grid framework will not work flawlessly, e.g. in the _productlisting.styl!

Deprecated and unused Components:
-----------
- Foundation Tabs: We use "accessible Tabs" instead
- Foundation Orbit: We use "Slick Slider" instead

