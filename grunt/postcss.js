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
      src: '<%= lm_conf.css_dist_file %>.css',
      dest: '<%= lm_conf.css_dist_file %>_data.min.css',
  },

  // Create css for common modern browsers
  dist: {
      options: {
        map: false, // inline sourcemaps

        processors: [
          require('autoprefixer-core')({browsers: ('> 1%','ie 9')}), // add vendor prefixes
          require('postcss-data-packer')({dataFile: false, pure: false}), // strip data expcet data
          require('cssnano')() // minify the result
        ]
      },
      src: '<%= lm_conf.css_dist_file %>.css',
      dest: '<%= lm_conf.css_dist_file %>.min.css',
      // files: {
      //     '<%= lm_conf.css_dist_file %>.min.css' : '<%= lm_conf.css_dist_file %>.css'
      // }
  },

  // Create css for ie8 only
  iefallback: {
      options: {
        map: false, // inline sourcemaps

        processors: [
          require('autoprefixer-core')({browsers: ('ie 8')}), // add vendor prefixes
          // require('pixrem')(), // add fallbacks for rem units
          require('cssnano')() // minify the result
        ]
      },
      src: '<%= lm_conf.css_dist_file_ie8 %>.css',
      dest: '<%= lm_conf.css_dist_file_ie8 %>.min.css',
  }

};