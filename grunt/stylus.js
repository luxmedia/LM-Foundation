// Compile stylus files
// https://github.com/gruntjs/grunt-contrib-stylus

module.exports = {

    // Create css for common modern browsers
    production: {
        options: {
            linenos: true,
            compress: false,
            use: [
                // function () {
                //     return require('autoprefixer-stylus')({
                //         remove: false,
                //         browsers: ('> 1%','ie 9')
                //     });
                // },
                require('svg-stylus')
            ]
        },
        // files: [{
        //     expand: true,
        //     cwd: '<%= basePaths.src  %>',
        //     src: '<%= lmConf.styl_src_files %>',
        //     dest: '<%= lmConf.css_dist_folder %>',
        //     ext: '.css',
        //     flatten: true
        // }]
        files: {
            '<%= lmConf.css_dist_file_styles %>.css': '<%= lmConf.styl_src_file %>'
        }
    },

    // Create css for fonts
    fonts: {
        options: {
            linenos: true,
            compress: true,
            'resolve url': true,
            'resolve url nocheck': true,
        },
        files: {
            '<%= lmConf.css_dist_file_styles_fonts %>.css': '<%= lmConf.styl_src_file_fonts %>'
        }
    },
    
    // Create css for fonts - ie8 special
    fontsie: {
        options: {
            paths: ['<%= basePaths.src %>'],
            linenos: true,
            compress: true,
            import: ['<%= lmConf.styl_src_ie8flag %>']
        },
        files: {
            '<%= lmConf.css_dist_file_styles_fonts %>_ie.css': '<%= lmConf.styl_src_file_fonts %>'
        }
    },

    // Create css for ie8 only
    ie8: {
        options: {
            paths: ['<%= basePaths.src %>'],
            linenos: true,
            compress: false,
            use: [
                // function () {
                //     return require('autoprefixer-stylus')({
                //         browsers: ('ie 8')
                //     });
                // }
            ],
            import: ['<%= lmConf.styl_src_ie8flag %>']
        },
        files: {
            '<%= lmConf.css_dist_file_ie8 %>.css': '<%= lmConf.styl_src_file %>'
        }
    }
};