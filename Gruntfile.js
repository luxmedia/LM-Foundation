module.exports = function(grunt) {

    // Variables
    var globalConfig = {
        src: 'src',
        dest: 'dist',
        distCss: 'styles',
        distJs: 'js',
        distSvg: 'svg',
        distCssFile: 'styles.css',
        distCssUnprefixedFile: 'styles-unprefixed.css',
        distJsFile: 'js.js',
        distSvgFile: 'sprite.svg'
    };

    // configure the tasks
    grunt.initConfig({

        globalConfig: globalConfig,

        copy: {
            build: {
                expand: true,                
                cwd: '<%= globalConfig.src  %>',
                src: [ '**/*', '!**/*.styl', '!**/*.coffee', '!**/*.jade', '!**/*.svg' ],
                dest: '<%= globalConfig.dest %>',
                filter: 'isFile',
                flatte: true
            },
        },

        clean: {
            build: {
                src: [ '<%= globalConfig.dest %>' ]
            },
            stylesheets: {
                src: [ '<%= globalConfig.dest %>/<%= globalConfig.distCss %>/*.css', '!<%= globalConfig.dest %>/<%= globalConfig.distCss %>/<%= globalConfig.distCssFile %>' ]
            },
            scripts: {
                src: [ '<%= globalConfig.dest %>/**/*.js', '!<%= globalConfig.dest %>/<%= globalConfig.distJs  %>/<%= globalConfig.distJsFile %>' ]
            },
        },

        // Compile stylus files
        stylus: {
            build: {
                options: {
                    linenos: true,
                    compress: false,
                    paths: [__dirname + '/<%= globalConfig.src  %>'],
                    limit: 100000
                },
                files: [{
                    expand: true,
                    cwd: '<%= globalConfig.src  %>',
                    src: [ '<%= globalConfig.distCss %>/styles.styl' ],
                    dest: '<%= globalConfig.dest %>',
                    ext: '.css'
                }]
            }
        },

        // Add Browser vendor prefixes
        autoprefixer: {
            build: {
                expand: true,
                cwd: '<%= globalConfig.dest %>',
                src: [ '**/*.css' ],
                dest: '<%= globalConfig.dest %>'
            }
        },

        // CSS minifaction
        cssmin: {
            build: {
                files: {
                    '<%= globalConfig.dest %>/<%= globalConfig.distCss %>/<%= globalConfig.distCssFile %>': [ '<%= globalConfig.dest %>/**/*.css' ]
                }
            }
        },

        // SVG-Store - https://github.com/FWeinb/grunt-svgstore
        svgstore: {
            build: {
                options: {
                    prefix: 'svg-',
                    cleanup: false,
                    svg: {
                        style: 'dislay:none;'
                    }
                },
                files: {
                    '<%= globalConfig.dest %>/<%= globalConfig.distSvg %>/<%= globalConfig.distSvgFile %>': [ '<%= globalConfig.dest %>/<%= globalConfig.distSvg %>/*.svg' ]
                }
            }
        },

        coffee: {
            build: {
                expand: true,
                cwd: '<%= globalConfig.src  %>',
                src: [ '**/*.coffee' ],
                dest: '<%= globalConfig.dest %>',
                ext: '.js'
            }
        },

        uglify: {
            build: {
                options: {
                    mangle: false
                },
                files: {
                    '<%= globalConfig.dest %>/<%= globalConfig.distJs  %>/<%= globalConfig.distJsFile %>': [ '<%= globalConfig.dest %>/**/*.js' ]
                }
            }
        },

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
        },

        watch: {
            stylesheets: {
                files: '<%= globalConfig.src  %>/<%= globalConfig.distCss %>/*.styl',
                tasks: [ 'stylesheets' ]
            },
            scripts: {
                files: '<%= globalConfig.src  %>/**/*.coffee',
                tasks: [ 'scripts' ]
            },
            svgs:{
                files: '<%= globalConfig.src  %>/svg/*.svg',
                tasks: [ 'svgs' ]
            },
            jade: {
                files: '<%= globalConfig.src  %>/jade/*.jade',
                tasks: [ 'jade' ]
            },
            copy: {
                files: [ '<%= globalConfig.src  %>/**', '!<%= globalConfig.src  %>/<%= globalConfig.distCss %>/*.styl', '!<%= globalConfig.src  %>/**/*.coffee', '!<%= globalConfig.src  %>/jade/*.jade' ],
                tasks: [ 'copy' ]
            }
        },

        connect: {
            server: {
                options: {
                    port: 4000,
                    base: '<%= globalConfig.dest %>',
                    hostname: '*'
                }
            }
        }

    });

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // define the tasks
    grunt.registerTask(
        'stylesheets',
        'Compiles the stylesheets.',
        //[ 'stylus', 'autoprefixer', 'cssmin', 'clean:stylesheets' ]
        [ 'stylus', 'autoprefixer', 'clean:stylesheets' ]
    );

    grunt.registerTask(
        'scripts',
        'Compiles the JavaScript files.',
        [ 'coffee', 'uglify', 'clean:scripts' ]
    );

    grunt.registerTask(
        'svgs',
        'Merges the SVGs into single sprite file.',
        [ 'svgstore' ]
    );

    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        [ 'clean:build', 'copy', 'stylesheets', 'scripts', 'svgstore', 'jade' ]
    );

    grunt.registerTask(
        'default',
        'Watches the project for changes, automatically builds them and runs a server.',
        [ 'build', 'connect', 'watch' ]
    );

};