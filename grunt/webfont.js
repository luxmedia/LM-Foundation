// WEBFONT
// https://github.com/sapegin/grunt-webfont
// Converts SVGs to Webfont and CSS

module.exports = {
  dist: {
    src: ['<%= lm_conf.svg_src_files %>'],
    dest: '<%= base_paths.dest %>/fonts',
    destCss: '<%= base_paths.src %>/styles/lm_foundation/components',
    destHtml: 'docs',

    options: {
      // fontFilename: 'icons-{hash}'
      fontFilename: 'icons',
      hashes: false,
      htmlDemo: true, // TURN OFF FOR PRODUCTION USE
      types: 'eot,woff', // 'eot,woff2,woff,ttf,svg'
      syntax: 'bem',
      stylesheet: 'styl',
      relativeFontPath: '../fonts',
      rename: function(name) {
          // .icon_entypo-add, .icon_fontawesome-add, etc.
          var path = require('path');
          return [path.basename(path.dirname(name)), path.basename(name)].join('-');
      },
      skip: false,
      // template: '<%= base_paths.src %>/styles/lm_foundation/templates/icons.css',

      templateOptions: {
        baseClass: 'i',
        classPrefix: 'i__',
        mixinPrefix: 'i--',
      }
    }
  }
};