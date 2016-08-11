module.exports = function(grunt) {

    // JSON CONSTRUCTOR
    // ===============================================
    // Get json configuration files

    var jsonpath = 'src/json';

    // BASE PATH AND FILES VARIABLES
    if (grunt.file.isFile(jsonpath + '/base__params.json')) {
        var baseParams = grunt.file.readJSON(jsonpath + '/base__params.json', {encoding:"utf-8"});
    }
    // BASE COLOR VARIABELS (used for svg and png variant generation)
    if (grunt.file.isFile(jsonpath + '/base__colors.json')) {
        var baseColors = grunt.file.readJSON(jsonpath + '/base__colors.json', {encoding:"utf-8"});
    }
    // GET THE FRAMEWORK (FOUNDATION) COMPONENTS TO BE LOADED
    if (grunt.file.isFile(jsonpath + '/fndtn__com__js.json')) {
        var fndtnCom = grunt.file.readJSON(jsonpath + '/fndtn__com__js.json');
    }
    // CUSTOM JQUERY PLUGINS
    if (grunt.file.isFile(jsonpath + '/cust__jquery__plugins.json')) {
        var jqueryPlugins = grunt.file.readJSON(jsonpath + '/cust__jquery__plugins.json');
    }
    // CUSTOM SCRIPTS
    if (grunt.file.isFile(jsonpath + '/cust__js.json')) {
        var customJs = grunt.file.readJSON(jsonpath + '/cust__js.json');
    }

    // Global folder-paths, based on gruntfile.js location
    var basePaths = {
        nodejs: baseParams.nodejs,
        src: baseParams.src,
        dest: baseParams.dest
    };

    // placeholder variable for-if condition
    var fname = '';

    // 1. BUILD FOUNDATION COMPONENTS ARRAY
    // first element in array MUST be the foundation.js base script!
    var fndtnSrcCom = ['<%= basePaths.src %>/js/foundation/foundation.js'];
    // IMPORTANT NOTE: Naming of foundation.xxx.js and objects in "components-js.json" MUST match (but case-insensitive)!!!
    for ( var key in fndtnCom ) {
        if (fndtnCom[key] == true) {
            var fname = key;
            fndtnSrcCom.push('<%= basePaths.src %>/js/foundation/foundation.' + fname.toLowerCase() + '.js');
        }
    }
    // 2. BUILD COLORS STRING (Depending on "svgmin" syntax for "ext")
    var svgColorStr = '.colors';
    // IMPORTANT NOTE: Naming of jquery.xxx.js and objects in "jqueryPlugins.json" MUST match (but case-insensitive)!!!
    for ( var key in baseColors ) {
        fname = key
        svgColorStr += '-' + fname.toLowerCase();
    }
    svgColorStr += '.svg';

    // 3. BUILD JQUERY PLUGINS ARRAY
    var jsSrcJqueryPlugins = [];
    // IMPORTANT NOTE: Naming of jquery.xxx.js and objects in "jqueryPlugins.json" MUST match (but case-insensitive)!!!
    for ( var key in jqueryPlugins ) {
        if (jqueryPlugins[key] == true) {
            var fname = key;
            jsSrcJqueryPlugins.push('<%= basePaths.src %>/js/custom/plugins/jquery.' + fname.toLowerCase() + '.js');
        }
    }
    // 4. BUILD CUSTOM SCRIPTS ARRAY
    var jsSrcScripts = [];
    // IMPORTANT NOTE: Naming of custom.xxx.js and objects in "customJs.json" MUST match (but case-insensitive)!!!
    for ( var key in customJs ) {
        if (customJs[key] == true) {
            var fname = key;
            jsSrcScripts.push('<%= basePaths.src %>/js/custom/custom.' + fname.toLowerCase() + '.js');
        }
    }

    // ===============================================
    // EOF - JSON CONSTRUCTOR


    // ASSIGN CUSTOM VARIABLES
    // ===============================================
    // define our source and destination folders
    var lmConf = {

        // --- SOURCE ---
        // --------------

        stylus_plugins: ['svg-stylus'],
        // vednor js
        js_src_vendor: ['<%= basePaths.src %>/js/vendor/common/*.js'],
        // ie8 fallback js
        js_src_ie8: ['<%= basePaths.src %>/js/vendor/ie8/*.js'],
        // foundation js source files
        // make sure to load foundation.js before its components (see JSON routine above) !!!
        js_src_fndtn_com: fndtnSrcCom,
        // Custom jquery plugins
        js_src_plugins: jsSrcJqueryPlugins,
        // custom javascripts
        js_src_custom: jsSrcScripts,
        // stylus source file(s)
        styl_src: ['<%= basePaths.src %>/styles/*.styl'],
        styl_src_file: '<%= basePaths.src %>/styles/styles.styl',
        styl_src_file_fonts: '<%= basePaths.src %>/styles/custom/fonts.styl',
        styl_src_files: 'styles/styles.styl',
        styl_src_ie8flag: 'styles/aux/_ie8-flag.styl',
        // svg source folder/filess
        svg_src: ['<%= basePaths.src %>/svg'],
        svg_src_files: ['<%= basePaths.src %>/svg/lm/*.svg', '<%= basePaths.src %>/svg/cust/*.svg'],

        // --- DESTINATION ---
        // -------------------

        // js distribution folder and files
        js_dist_folder: '<%= basePaths.dest %>/js',
        js_dist_file_vendor: '<%= basePaths.dest %>/js/vendor',
        js_dist_file_fndtn: '<%= basePaths.dest %>/js/fndtn',
        js_dist_file_plugins: '<%= basePaths.dest %>/js/plugins',
        js_dist_file_custom: '<%= basePaths.dest %>/js/custom',
        js_dist_file_ie8: '<%= basePaths.dest %>/js/ie8',
        // css distribution folder and files
        css_dist_folder: '<%= basePaths.dest %>/css',
        css_dist_file_styles: '<%= basePaths.dest %>/css/styles',
        css_dist_file_styles_data: '<%= basePaths.dest %>/css/styles_data',
        css_dist_file_styles_fonts: '<%= basePaths.dest %>/css/fonts',
        css_dist_file_ie9to10: '<%= basePaths.dest %>/css/ie9-10',
        css_dist_file_ie8: '<%= basePaths.dest %>/css/ie8',
        // svg distribution folder and files
        svg_dist: ['<%= basePaths.dest %>/svg'],
        svg_dist_file: '<%= basePaths.dest %>/svg/sprite.svg',

        // --- PARAMETERS ---
        // -------------------
        
        svg_colors_arr: baseColors,
        svg_colors_ext: svgColorStr,
        // Default png-widths for grunticon svg-fallback
        png_width: baseParams.default_png_width,
        png_height: baseParams.default_png_height,

        // excludes for "copy" to avoid duplication
        do_not_copy: ['!<%= basePaths.src %>/**/*.styl', '!<%= basePaths.src %>/**/*.coffee', '!<%= basePaths.src %>/**/*.jade'],
        // avoid cleaning out this files (minified distribution versions)
        do_not_clean_js: ['!**/*.min.js'],
        do_not_clean_css: []
    };
    // ===============================================
    // EOF - ASSIGN CUSTOM VARIABLES


    // LOAD GRUNT CONFIG AND TASKS
    // ===============================================
    var path = require('path');

    require('load-grunt-config')(grunt, {
        // path to task.js files, defaults to grunt dir
        configPath: path.join(process.cwd(), 'grunt'),

        // auto grunt.initConfig
        init: true,

        // data passed into config. Can use with <%= test %>
        data: {
            test: false,
            basePaths: basePaths,
            lmConf: lmConf,
            baseParams: baseParams
        },

        // pass variables to modules and tasks
        // config: {
        //     base_paths: basePaths,
        //     lm_conf: lmConf
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
    // ===============================================
    // EOF - LOAD GRUNT CONFIG AND TASKS

};