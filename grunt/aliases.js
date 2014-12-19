module.exports = {

  'stylesheets': {
    description: 'Compiles, concatenates and minifies the stylesheets.',
    tasks: [
      'stylus',
      'autoprefixer',
      'cssmin',
      'clean:stylesheets'
    ]
  },

  'scripts': {
    description: 'Compiles and concatenates the JavaScript files.',
    tasks: [
      'coffee',
      'concat',
      'uglify',
      'clean:scripts'
    ]
  },

  'build': {
    description: 'Compiles all of the assets and copies the files to the distribution directory.',
    tasks: [
      'clean:build',
      'copy',
      'stylesheets',
      'scripts',
      // 'svgstore',
      // 'jade',
      'cleanempty'
    ]
  },

  'default': {
    description: 'Watches the project for changes, automatically builds them and runs a server.',
    tasks: [
      'build',
      'connect',
      // 'watch',
      'csslint' // Turn On/Off csslint for debugging css
    ]
  }

};