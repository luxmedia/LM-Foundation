module.exports = {
    // compile coffeescript
    coffee: {
        build: {
            expand: true,
            cwd: '<%= globalConfig.src  %>',
            src: [ '**/*.coffee' ],
            dest: '<%= globalConfig.dest %>',
            ext: '.js'
        }
    }
}