module.exports = {
    // Compile stylus files
    // https://github.com/gruntjs/grunt-contrib-stylus
    stylus: {
        options: {
            linenos: true,
            compress: false,
            // use: [require('svg-stylus')]
        },
        files: [{
            expand: true,
            cwd: '<%= globalConfig.src  %>',
            src: '<%= lm_foundation.styl_src_files %>',
            dest: '<%= lm_foundation.css_dist_folder %>',
            ext: '.css',
            flatten: true
        }]
        // files: {
        //     '<%= lm_foundation.css_dist_file %>': '<%= lm_foundation.styl_src_files %>'
        // }
    }
}