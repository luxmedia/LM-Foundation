module.exports = function(grunt) {

    // Global Variables
    var base_conf = {
        nodejs: 'node_modules',
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
    var lm_conf = {
        stylus_plugins: ['svg-stylus'],
        // vednor js
        js_src_vendor: ['<%= base_conf.src %>/js/vendor/all/*.js'],
        // ie8 fallback js
        js_src_ie8: ['<%= base_conf.src %>/js/vendor/ie/*.js'],
        // javascript source files
        // make sure to load foundation.js before its components (see concat task) !!!
        js_src_fndtn: ['<%= base_conf.src %>/js/foundation/foundation.js'],

        // DEFINE: FOUNDATION JS PLUGINS TO LOAD
        js_src_fndtn_components: [
            '<%= base_conf.src %>/js/foundation/foundation.abide.js',
            '<%= base_conf.src %>/js/foundation/foundation.accordion.js',
            '<%= base_conf.src %>/js/foundation/foundation.alerts.js',
            '<%= base_conf.src %>/js/foundation/foundation.clearing.js',
            '<%= base_conf.src %>/js/foundation/foundation.dropdown.js',
            '<%= base_conf.src %>/js/foundation/foundation.equalizer.js',
            '<%= base_conf.src %>/js/foundation/foundation.interchange.js',
            // '<%= base_conf.src %>/js/foundation/foundation.joyride.js',
            // '<%= base_conf.src %>/js/foundation/foundation.magellan.js',
            '<%= base_conf.src %>/js/foundation/foundation.offcanvas.js',
            // '<%= base_conf.src %>/js/foundation/foundation.orbit.js',
            '<%= base_conf.src %>/js/foundation/foundation.slickslider.js', // not really a foundation component, but included here
            '<%= base_conf.src %>/js/foundation/foundation.reveal.js',
            '<%= base_conf.src %>/js/foundation/foundation.slider.js',
            // '<%= base_conf.src %>/js/foundation/foundation.tab.js', // we use accessibleTabs instead!
            '<%= base_conf.src %>/js/foundation/foundation.tooltip.js',
            '<%= base_conf.src %>/js/foundation/foundation.topbar.js'
        ],
        // DEFINE: CUSTOM JS PLUGINS TO LOAD
        js_src_plugins: [
            '<%= base_conf.src %>/js/custom/plugins/custom.functions.js',
            '<%= base_conf.src %>/js/custom/plugins/jquery.actual.js',
            '<%= base_conf.src %>/js/custom/plugins/jquery.tabs.js'
        ],
        js_src_custom: ['<%= base_conf.src %>/js/custom/*.js'],
        // js distribution folder and file
        js_dist_folder: ['<%= base_conf.dest %>/js'],
        js_dist_file_vendor: 'vendor',
        js_dist_file_fndtn: 'foundation',
        js_dist_file_plugins: 'plugins',
        js_dist_file_custom: 'scripts',
        js_dist_file_iefallback: 'ie8',
        // stylus source file(s)
        styl_src: ['<%= base_conf.src %>/styles/*.styl'],
        // styl_src_files: [
        //     '<%= base_conf.src %>/styles/_global/normalize.styl',
        //     '<%= base_conf.src %>/styles/_global/lm_foundation/_settings.styl',
        //     '<%= base_conf.src %>/styles/custom/_settings.styl',
        //     '<%= base_conf.src %>/styles/_global/lm_foundation/lm-foundation.styl'
        // ],
        styl_src_files: 'styles/styles.styl',
        // css distribution folder and file
        css_dist_folder: '<%= base_conf.dest %>/css',
        css_dist_file: '<%= base_conf.dest %>/css/styles.css',
        css_dist_file_min: '<%= base_conf.dest %>/css/styles.min.css',
        // svg source folder
        svg_src: ['<%= base_conf.src %>/svg/*.svg'],
        // svg distribution sprite file
        svg_dist_file: '<%= base_conf.dest %>/svg/sprite.svg',
        // excludes for "copy" to avoid duplication
        do_not_copy: ['!<%= base_conf.src %>/**/*.styl', '!<%= base_conf.src %>/**/*.coffee', '!<%= base_conf.src %>/**/*.jade'],
        // avoid cleaning out this files (minified distribution versions)
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

        // data passed into config. Can use with <%= test %>
        data: {
            test: false,
            base_conf: base_conf,
            lm_conf: lm_conf
        },

        // pass variables to modules and tasks
        // config: {
        //     base_conf: base_conf,
        //     lm_conf: lm_conf
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