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

    // CUSTOM VARIABLES
    // define our source and destination folders
    var lm_foundation = {
        stylus_plugins: ['svg-stylus'],
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
        // styl_src_files: [
        //     '<%= globalConfig.src %>/styles/_global/normalize.styl',
        //     '<%= globalConfig.src %>/styles/_global/lm_foundation/_settings.styl',
        //     '<%= globalConfig.src %>/styles/custom/_settings.styl',
        //     '<%= globalConfig.src %>/styles/_global/lm_foundation/lm-foundation.styl'
        // ],
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
    };
    // EOF - CUSTOMV VARS

    // LOAD GRUNT CONFIG
    var path = require('path');

    require('load-grunt-config')(grunt, {
        // path to task.js files, defaults to grunt dir
        configPath: path.join(process.cwd(), 'grunt'),

        // auto grunt.initConfig
        init: true,

        // data passed into config.  Can use with <%= test %>
        data: {
            test: false,
            globalConfig: globalConfig,
            lm_foundation: lm_foundation
        },

        // pass variables to modules and tasks
        // config: {
        //     globalConfig: globalConfig,
        //     lm_foundation: lm_foundation
        // }

        // can optionally pass options to load-grunt-tasks.
        // If you set to false, it will disable auto loading tasks.
        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'devDependencies'
        },

        //can post process config object before it gets passed to grunt
        // postProcess: function(config) {},

        //allows to manipulate the config object before it gets merged with the data object
        // preMerge: function(config, data) {}
    });


};