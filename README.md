LM-Foundation
=============

Custom ZURB-Foundation Framework Fork. Created to provide a stylus-based version of Foundation with a simplified and clean code structure.
Currently based on Foundation 5.x

=============

This project is a conversion of ZURBs Foundation Framework-Syntax from `SASS/SCSS` to `Stylus`. So we can use `NodeJS`. We try to keep all changes manually in sync with ZURB-Foundation!

- We use `Grunt` as Buildsystem.
- The Syntax is based on `BEM-Syntax` (https://bem.info/method/definitions/), but not in a strict way.

Dependencies
------------
- NodeJS
- Grunt
- Yaml
- Stylus
- Jeet.gs
- jQuery
- Modernizr

Installation
------------

1. Install NodeJS using the Installer binary available from http://nodejs.org/
2. Install packages via console (Mac OS "Terminal.app"):
Switch to your local project directory using the `console` (terminal.app) and run the following command:
```
npm install
```
maybe a `sudo` is required in some environments (e.g. Mac os). This will install all dependencies defined in package.json.

NOTE:
-----------
- The Project is in alpha state and for internal use only!

- Instead of the module.export() function we use stylus' @require method to import all .styl files in ```"lm-foundation.styl"```. This avoids redundant loading.

- All style overrides can be done in ```"_global/lm-foundation/_settings.styl"```. The outcommented code segments could be outdated! So look in the corresponding .styl files first, for the actual available variables. New or custom settings and variables can be defined in ```"custom/_settings.styl"```. Inside of the `"custom"` directory you can also implement your own .styl files for your projects.

- I changed the indentation to 4 spaces instead of 2 spaces. This settings proved to be the best coding environment for me using widescreen displays.

- The jeet.gs grid framework is integrated as a support for situations, where the foundation grid framework will not work flawlessly, e.g. in the _productlisting.styl!
- There is an Internet Explorer 8 Fallback functionality implemented! Simply use the `$ie8` stylus variable (`true` for ie) which can be used in every .styl for conditional stylings only for ie8. The Grunt build system compiles two different files: a "normal" `styles.css` and an `ie8.css`.

Namespace:
-----------
- I shortened the Namespace of some classes a bit. So .button is .btn and the grid classes are -sml, -med, -lrg, -xlrg, -xxlrg instead of the longhands -small, -medium a.so. Every bit of saved code matters!

Deprecated and unused Components:
-----------
- Foundation Orbit: We use "Slick Slider" instead

