module.exports = {
// main watch tasks
    watch: {
        stylesheets: {
            files: '<%= globalConfig.src  %>/<%= globalConfig.distCss %>/*.styl',
            tasks: [ 'stylesheets' ]
        },
        coffee: {
            files: '<%= globalConfig.src  %>/**/*.coffee',
            tasks: [ 'coffee' ]
        },
        scripts: {
            files: ['<%= globalConfig.src  %>/js/**/*.js', '<%= lm_foundation.js_dist_folder %>/*.js'],
            tasks: [ 'scripts' ]
        },
        svgs:{
            files: '<%= lm_foundation.svg_src %>',
            tasks: [ 'svgs' ]
        },
        jade: {
            files: '<%= globalConfig.src  %>/jade/*.jade',
            tasks: [ 'jade' ]
        },
        copy: {
            files: [ '<%= globalConfig.src  %>/**', '<%= lm_foundation.do_not_copy %>'],
            tasks: [ 'copy' ]
        }
    }
}