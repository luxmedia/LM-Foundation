module.exports = function(grunt) {

    // Global Variables
    var globalConfig = {
        src: 'src',
        dest: 'dist',
        distCss: 'styles',
        distJs: 'js',
        distSvg: 'svg',
        distCssFile: 'styles.css',
        distCssUnprefixedFile: 'styles-unprefixed.css',
        distJsFile: 'script.min.js',
        distSvgFile: 'sprite.svg'
    };

    // configure the tasks
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),

        globalConfig: globalConfig,

        // CUSTOM VARIABLES
        // define our source and destination folders
        lm_foundation: {
            js_src_vendor: ['<%= globalConfig.src %>/js/vendor/*.js'],
            // javascript source files
            // make shure to load foundation.js before its components (see concat) !!!
            js_src_fndtn: ['<%= globalConfig.src %>/js/foundation/foundation.js'],
            // javascript components to include
            js_src_fndtn_components: [
                '<%= globalConfig.src %>/js/foundation/foundation.abide.js',
                '<%= globalConfig.src %>/js/foundation/foundation.accordion.js',
                '<%= globalConfig.src %>/js/foundation/foundation.alerts.js',
                '<%= globalConfig.src %>/js/foundation/foundation.clearing.js',
                '<%= globalConfig.src %>/js/foundation/foundation.dropdown.js',
                '<%= globalConfig.src %>/js/foundation/foundation.equalizer.js',
                '<%= globalConfig.src %>/js/foundation/foundation.interchange.js',
                // '<%= globalConfig.src %>/js/foundation/foundation.joyride.js',
                // '<%= globalConfig.src %>/js/foundation/foundation.magellan.js',
                '<%= globalConfig.src %>/js/foundation/foundation.offcanvas.js',
                '<%= globalConfig.src %>/js/foundation/foundation.orbit.js',
                '<%= globalConfig.src %>/js/foundation/foundation.reveal.js',
                '<%= globalConfig.src %>/js/foundation/foundation.slider.js',
                // '<%= globalConfig.src %>/js/foundation/foundation.tab.js', // we use accessibleTabs instead!
                '<%= globalConfig.src %>/js/foundation/foundation.tooltip.js',
                '<%= globalConfig.src %>/js/foundation/foundation.topbar.js'
            ],
            js_src_plugins: [
                '<%= globalConfig.src %>/js/custom/plugins/custom.functions.js',
                '<%= globalConfig.src %>/js/custom/plugins/jquery.actual.js',
                '<%= globalConfig.src %>/js/custom/plugins/jquery.tabs.js'
            ],
            js_src_custom: ['<%= globalConfig.src %>/js/custom/*.js'],
            // js distribution folder and file
            js_dist_folder: ['<%= globalConfig.dest %>/js'],
            js_dist_file: '<%= globalConfig.dest %>/js/scripts.min.js',
            // stylus source file(s)
            styl_src: ['<%= globalConfig.src %>/styles/*.styl'],
            styl_src_files: 'styles/styles.styl',
            // css distribution folder and file
            css_dist_folder: '<%= globalConfig.dest %>/css',
            css_dist_file: '<%= globalConfig.dest %>/css/styles.css',
            css_dist_file_min: '<%= globalConfig.dest %>/css/styles.min.css',
            // svg source folder
            svg_src: ['<%= globalConfig.src %>/svg/*.svg'],
            // svg distribution sprite file
            svg_dist_file: '<%= globalConfig.dest %>/svg/sprite.svg',
            // excludes for "copy" to avoid duplication
            do_not_copy: ['!<%= globalConfig.src  %>/**/*.styl', '!<%= globalConfig.src  %>/**/*.coffee', '!<%= globalConfig.src  %>/**/*.jade'],
            // avoid cleaning out this files
            do_not_clean_js: ['!**/*.min.js'],
            do_not_clean_css: []
        },

        // Compile stylus files
        stylus: {
            build: {
                options: {
                    linenos: true,
                    compress: false,
                    urlfunc: {
                        name: 'url',
                        paths: [__dirname + '/<%= globalConfig.src  %>'],
                        limit: 1000000
                    }
                    
                },
                files: [{
                    expand: true,
                    cwd: '<%= globalConfig.src  %>',
                    src: '<%= lm_foundation.styl_src_files %>',
                    dest: '<%= lm_foundation.css_dist_folder %>',
                    ext: '.css',
                    flatten: true
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
                    '<%= lm_foundation.css_dist_file_min %>': [ '<%= lm_foundation.css_dist_folder %>/*.css' ]
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
                    '<%= lm_foundation.svg_dist_file %>': '<%= lm_foundation.svg_src %>'
                }
            }
        },

        // compile coffeescript
        coffee: {
            build: {
                expand: true,
                cwd: '<%= globalConfig.src  %>',
                src: [ '**/*.coffee' ],
                dest: '<%= globalConfig.dest %>',
                ext: '.js'
            }
        },

        // optional: concatenate foundation.js files before uglify
        concat: {
            build: {
                files: {
                    // make shure to load foundation.js before its components !!!
                    '<%= lm_foundation.js_dist_folder %>/vendor.js': '<%= lm_foundation.js_src_vendor %>',
                    '<%= lm_foundation.js_dist_folder %>/foundation.js': ['<%= lm_foundation.js_src_fndtn %>', '<%= lm_foundation.js_src_fndtn_components %>'],
                    '<%= lm_foundation.js_dist_folder %>/plugins.js': '<%= lm_foundation.js_src_plugins %>',
                    '<%= lm_foundation.js_dist_folder %>/scripts.js': '<%= lm_foundation.js_src_custom %>'
                }
            }
        },

        // minifies, concatenates and uglifies .js files
        uglify: {
            build: {
                options: {
                    mangle: false,
                    preserveComments: 'some'
                },
                files: {
                    '<%= lm_foundation.js_dist_folder %>/vendor.min.js': ['<%= lm_foundation.js_dist_folder %>/vendor.js'],
                    '<%= lm_foundation.js_dist_folder %>/foundation.min.js': ['<%= lm_foundation.js_dist_folder %>/foundation.js'],
                    // 'dist/docs/assets/js/modernizr.js': ['<%= vendor %>/modernizr/modernizr.js'],
                    // 'dist/docs/assets/js/all.js': ['<%= vendor %>/jquery/dist/jquery.js', '<%= vendor %>/lodash/dist/lodash.min.js','<%= vendor %>/fastclick/lib/fastclick.js', '<%= vendor %>/jquery-placeholder/jquery.placeholder.js', '<%= vendor %>/jquery.autocomplete/dist/jquery.autocomplete.js', '<%= lm_foundation.js %>', 'doc/assets/js/docs.js']
                    '<%= lm_foundation.js_dist_folder %>/plugins.min.js': [ '<%= lm_foundation.js_dist_folder %>/plugins.js' ],
                    '<%= lm_foundation.js_dist_file %>': [ '<%= lm_foundation.js_dist_folder %>/scripts.js' ]
                }
            }
        },

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
        },

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
        },

        // Copy files to dist directory
        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= globalConfig.src  %>',
                        src: [ '**/*', '!**/*.styl', '!**/*.coffee', '!**/*.jade', '!**/*.svg' ],
                        dest: '<%= globalConfig.dest %>',
                        flatten: false,
                        filter: 'isFile'
                    }
                ]
            }
        },

        // clean dist directory from old files
        clean: {
            build: {
                src: [ '<%= globalConfig.dest %>' ]
            },
            stylesheets: {
                src: [ '<%= lm_foundation.css_dist_folder %>/**/*.css', '!<%= lm_foundation.css_dist_file %>', '!<%= lm_foundation.css_dist_file_min %>' ]
            },
            scripts: {
                src: [ '<%= lm_foundation.js_dist_folder %>/**/*.js', '<%= lm_foundation.do_not_clean_js %>' ]
            },
        },

        // clean empty folders
        cleanempty: {
            options: {
                files: true,
                folders: true
            },
            src: ['<%= globalConfig.dest %>/**/*']
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
    grunt.loadNpmTasks('grunt-cleanempty');
    grunt.loadNpmTasks('grunt-contrib-concat');
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
        [ 'stylus', 'autoprefixer', 'cssmin', 'clean:stylesheets' ]
        // [ 'stylus', 'autoprefixer', 'clean:stylesheets' ]
    );

    grunt.registerTask(
        'scripts',
        'Compiles the JavaScript files.',
        [ 'coffee', 'concat', 'uglify', 'clean:scripts' ]
    );

    grunt.registerTask(
        'svgs',
        'Merges the SVGs into single sprite file.',
        [ 'svgstore' ]
    );

    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        [ 'clean:build', 'copy', 'stylesheets', 'scripts', 'svgstore', 'jade', 'cleanempty' ]
    );

    grunt.registerTask(
        'default',
        'Watches the project for changes, automatically builds them and runs a server.',
        // [ 'build', 'connect', 'watch' ]
        [ 'build', 'connect' ]
    );

};