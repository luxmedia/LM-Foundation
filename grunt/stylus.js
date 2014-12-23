module.exports = {
    // Compile stylus files
    // https://github.com/gruntjs/grunt-contrib-stylus
    stylus: {
        options: {
            linenos: true,
            compress: false,
            use: [require('svg-stylus')]
        },
        files: [{
            expand: true,
            cwd: '<%= base_conf.src  %>',
            src: '<%= lm_conf.styl_src_files %>',
            dest: '<%= lm_conf.css_dist_folder %>',
            ext: '.css',
            flatten: true
        }]
        // files: {
        //     '<%= lm_conf.css_dist_file %>': '<%= lm_conf.styl_src_files %>'
        // }
    }
}