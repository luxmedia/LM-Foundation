module.exports = {
    // Copy files to dist directory
    copy: {
        files: [{
            expand: true,
            cwd: '<%= globalConfig.src %>',
            src: [ '**/*', '!**/*.styl', '!**/*.coffee', '!**/*.jade', '!**/*.svg' ],
            dest: '<%= globalConfig.dest %>',
            flatten: false,
            filter: 'isFile'
        }]
    }
}