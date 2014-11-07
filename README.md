LM-Foundation
=============

Custom ZURB-Foundation Framework Fork. Converted Framework SCSS to Stylus. Simplified Structure.

=============

This project is a manual conversion of ZURBs Foundation Framework-Syntax from SASS/SCSS to Stylus. So we can use NodeJS.
It is a reduced Version of Foundation with just the .styl files and .js.

All Grunt or Bower or whatever buildsystems have to be defined on yourself. Also the gridsystem of Foundation isn't our first choice, instead we plan to use and implement jeet.gs

NOTE:
-----------
The Project is in alpha state and for internal use only!

The module.export() function of foundation is not implemented yet. Instead we make a simple linear import of all .styl files in "foundation.styl". To avoid duplicate code i converted the @import rules inside the "components/*.styl" to @require. This should avoid redundant loading.

I also removed the predefined !default variables from the "components/*.styl" files. All variable-based settings must be done in "_settings.styl"
