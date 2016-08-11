module.exports = {
// compile jade template files
    jade: {
        compile: {
            options: {
                data: {}
            },
            files: [{
                expand: true,
                cwd: '<%= globalConfig.src  %>',
                src: [ 'jade/*.jade' ],
                dest: '<%= globalConfig.dest %>',
                ext: '.html'
            }]
        }
    }
}