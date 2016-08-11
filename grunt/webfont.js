// WEBFONT
// https://github.com/sapegin/grunt-webfont
// Converts SVGs to Webfont and CSS

module.exports = {
  production: {
    src: ['<%= lmConf.svg_src_files %>'],
    dest: '<%= basePaths.dest %>/fonts',
    destCss: '<%= basePaths.src %>/styles/lm_foundation/components', // output stylus file of generated font. Is used in further stylus processing.
    destHtml: 'docs',

    options: {
      // fontFilename: 'icons-{hash}'
      fontFilename: 'icons',
      hashes: false,
      htmlDemo: true, // TURN OFF FOR PRODUCTION USE
      types: 'eot,woff', // 'eot,woff2,woff,ttf,svg'
      syntax: 'bem',
      stylesheet: 'styl',
      relativeFontPath: '../fonts', // Custom font path. Will be used instead of destCss in stylesheet (CSS/STYL) file. Useful with CSS preprocessors.
      rename: function(name) {
          // .icon_entypo-add, .icon_fontawesome-add, etc.
          var path = require('path');
          return [path.basename(path.dirname(name)), path.basename(name)].join('-');
      },
      skip: false,
      // template: '<%= basePaths.src %>/styles/lm_foundation/templates/icons.css',
      engine: 'node', // Default: fontforge, alt: node -> NOTE: "node" engine needs large icons in compound mode!!

      templateOptions: {
        baseClass: 'i',
        classPrefix: 'i__',
        mixinPrefix: 'i--',
      }
    }
  }
};