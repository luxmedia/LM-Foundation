// Compile stylus files
// https://github.com/gruntjs/grunt-contrib-stylus

module.exports = {

    // Create css for common modern browsers
    dist: {
        options: {
            linenos: true,
            compress: false,
            use: [
                function () {
                    return require('autoprefixer-stylus')({
                        remove: false,
                        browsers: ('> 1%','ie 9')
                    });
                },
                require('svg-stylus')
            ]
        },
        // files: [{
        //     expand: true,
        //     cwd: '<%= base_paths.src  %>',
        //     src: '<%= lm_conf.styl_src_files %>',
        //     dest: '<%= lm_conf.css_dist_folder %>',
        //     ext: '.css',
        //     flatten: true
        // }]
        files: {
            '<%= lm_conf.css_dist_file %>.css': '<%= lm_conf.styl_src_file %>'
        }
    },
    // Create css for ie8 only
    iefallback: {
        options: {
            paths: ['<%= base_paths.src %>'],
            linenos: true,
            compress: false,
            use: [
                function () {
                    return require('autoprefixer-stylus')({
                        browsers: ('ie 8')
                    });
                }
            ],
            import: ['<%= lm_conf.styl_src_ie8flag %>']
        },
        files: {
            '<%= lm_conf.css_dist_file_ie8 %>.css': '<%= lm_conf.styl_src_file %>'
        }
    }
};