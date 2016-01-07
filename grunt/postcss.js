// grunt-postcss
// https://github.com/nDmitry/grunt-postcss

module.exports = {
  
  // Create data-only css with all base64 encoded data
  data: {
      options: {
          map: false,

          processors: [
            require('postcss-data-packer')({dataFile: true, pure: true}), // strip everything expcet data and combine same
            require('cssnano')() // minify the result
          ]
      },
      src: '<%= lm_conf.css_dist_file_styles %>.css',
      dest: '<%= lm_conf.css_dist_file_styles_data %>.min.css',
  },

  // Create css for common modern browsers
  dist: {
      options: {
        map: false, // inline sourcemaps

        processors: [
          require('autoprefixer-core')({browsers: ('> 5%','ie > 10')}), // add vendor prefixes
          require('postcss-data-packer')({dataFile: false, pure: false}), // strip data expcet data
          require('cssnano')() // minify the result
        ]
      },
      src: '<%= lm_conf.css_dist_file_styles %>.css',
      dest: '<%= lm_conf.css_dist_file_styles %>.min.css',
      // files: {
      //     '<%= lm_conf.css_dist_file %>.min.css' : '<%= lm_conf.css_dist_file %>.css'
      // }
  },


// TODO: Font-format Filter does NOT WORK!!!!

  // Create css for common modern browsers
  fonts: {
      options: {
        map: false, // inline sourcemaps

        processors: [
          require('postcss-discard-comments')(),
          require('postcss-discard-font-face')({discardFonts: (
            function (url, format) {
              if (~format.indexOf('woff') == -1) {
                // only base64 encoded woff font files
                return false;
              }
            }
          )}),
        ]
      },
      src: '<%= lm_conf.css_dist_file_styles_fonts %>.css',
      dest: '<%= lm_conf.css_dist_file_styles_fonts %>.min.css',
  },

  // Create css for internet explorer - once again :(
  fontsie: {
      options: {
        map: false, // inline sourcemaps

        processors: [
          require('postcss-discard-comments')(),
          require('postcss-discard-font-face')({discardFonts: (
            function (url, format) {
              if (url.indexOf('.eot')) {
                // only .eot font files
                return true;
              } else {
                return false;
              }
            }
          )})
        ]
      },
      src: '<%= lm_conf.css_dist_file_styles_fonts %>_ie.css',
      dest: '<%= lm_conf.css_dist_file_styles_fonts %>_ie.min.css',
  },

  // Create .css for IE 9 and 10 only
  ie9to10: {
      options: {
        map: false, // inline sourcemaps

        processors: [
          require('autoprefixer-core')({browsers: ('ie 9', 'ie 10')}), // add vendor prefixes
          require('pixrem')({replace: true, browsers: ('ie 9', 'ie 10') }), // add fallbacks for rem units -> https://github.com/robwierzbowski/node-pixrem
          require('cssnano')() // minify the result
        ]
      },
      src: '<%= lm_conf.css_dist_file_styles %>.css',
      dest: '<%= lm_conf.css_dist_file_ie9to10 %>.min.css',
  },

  // Create css for IE 8 only
  ie8: {
      options: {
        map: false, // inline sourcemaps

        processors: [
          require('autoprefixer-core')({browsers: ('ie 8')}), // add vendor prefixes
          require('pixrem')({replace: true, browsers: 'ie 8' }), // add fallbacks for rem units -> https://github.com/robwierzbowski/node-pixrem
          require('cssnano')() // minify the result
        ]
      },
      src: '<%= lm_conf.css_dist_file_ie8 %>.css',
      dest: '<%= lm_conf.css_dist_file_ie8 %>.min.css',
  }

};