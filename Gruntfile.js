module.exports = function(grunt) {

    // JSON CONSTRUCTOR
    // ===============================================
    // Get json configuration files

    var jsonpath = 'src/json';

    // BASE PATH AND FILES VARIABLES
    if (grunt.file.isFile('src/json/base__params.json')) {
        var base__params = grunt.file.readJSON('src/json/base__params.json', {encoding:"utf-8"});
    }
    // BASE COLOR VARIABELS (used for svg and png variant generation)
    if (grunt.file.isFile('src/json/base__colors.json')) {
        var base__colors = grunt.file.readJSON('src/json/base__colors.json', {encoding:"utf-8"});
    }
    // GET THE FRAMEWORK (FOUNDATION) COMPONENTS TO BE LOADED
    if (grunt.file.isFile('src/json/fndtn__com__js.json')) {
        var fndtn__com = grunt.file.readJSON('src/json/fndtn__com__js.json');
    }
    // CUSTOM JQUERY PLUGINS
    if (grunt.file.isFile('src/json/cust__jquery__plugins.json')) {
        var jquery__plugins = grunt.file.readJSON('src/json/cust__jquery__plugins.json');
    }
    // CUSTOM SCRIPTS
    if (grunt.file.isFile('src/json/cust__js.json')) {
        var custom__js = grunt.file.readJSON('src/json/cust__js.json');
    }

    // Global Variables
    var base_paths = {
        nodejs: base__params.nodejs,
        src: base__params.src,
        dest: base__params.dest
    };

    // 1. BUILD FOUNDATION COMPONENTS ARRAY
    // first element in array MUST be the foundation.js base script!
    var fndtn__src__com = ['<%= base_paths.src %>/js/foundation/foundation.js'];
    // IMPORTANT NOTE: Naming of foundation.xxx.js and objects in "components-js.json" MUST match (but case-insensitive)!!!
    for ( var key in fndtn__com ) {
        if (fndtn__com[key] == true) {
            var fname = key;
            fndtn__src__com.push('<%= base_paths.src %>/js/foundation/foundation.' + fname.toLowerCase() + '.js');
        }
    }
    // 2. BUILD COLORS STRING (Depending on "svgmin" syntax for "ext")
    var svg_color_str = '.colors';
    // IMPORTANT NOTE: Naming of jquery.xxx.js and objects in "jquery__plugins.json" MUST match (but case-insensitive)!!!
    for ( var key in base__colors ) {
        var fname = key
        svg_color_str += '-' + fname.toLowerCase();
    }
    svg_color_str += '.svg';

    // 3. BUILD JQUERY PLUGINS ARRAY
    var js_src_jquery_plugins = [];
    // IMPORTANT NOTE: Naming of jquery.xxx.js and objects in "jquery__plugins.json" MUST match (but case-insensitive)!!!
    for ( var key in jquery__plugins ) {
        if (jquery__plugins[key] == true) {
            var fname = key;
            js_src_jquery_plugins.push('<%= base_paths.src %>/js/custom/plugins/jquery.' + fname.toLowerCase() + '.js');
        }
    }
    // 4. BUILD CUSTOM SCRIPTS ARRAY
    var js_src_scripts = [];
    // IMPORTANT NOTE: Naming of custom.xxx.js and objects in "custom__js.json" MUST match (but case-insensitive)!!!
    for ( var key in custom__js ) {
        if (custom__js[key] == true) {
            var fname = key;
            js_src_scripts.push('<%= base_paths.src %>/js/custom/custom.' + fname.toLowerCase() + '.js');
        }
    }

    // ===============================================
    // EOF - JSON CONSTRUCTOR


    // ASSIGN CUSTOM VARIABLES
    // ===============================================
    // define our source and destination folders
    var lm_conf = {

        // --- SOURCE ---
        // --------------

        stylus_plugins: ['svg-stylus'],
        // vednor js
        js_src_vendor: ['<%= base_paths.src %>/js/vendor/common/*.js'],
        // ie8 fallback js
        js_src_ie8: ['<%= base_paths.src %>/js/vendor/' + base__params.namespace_ie_8 + '/*.js'],
        // foundation js source files
        // make sure to load foundation.js before its components (see JSON routine above) !!!
        js_src_fndtn_com: fndtn__src__com,
        // Custom jquery plugins
        js_src_plugins: js_src_jquery_plugins,
        // custom javascripts
        js_src_custom: js_src_scripts,
        // stylus source file(s)
        styl_src: ['<%= base_paths.src %>/' + base__params.namespace_common_styles + '/*.styl'],
        styl_src_file: '<%= base_paths.src %>/' + base__params.namespace_common_styles + '/' + base__params.namespace_common_styles + '.styl',
        styl_src_files: base__params.namespace_common_styles + '/' + base__params.namespace_common_styles + '.styl',
        styl_src_ie8flag: base__params.namespace_common_styles + '/ie8-flag.styl',
        // svg source folder/filess
        svg_src: ['<%= base_paths.src %>/vg'],
        svg_src_files: ['<%= base_paths.src %>/svg/*.svg'],

        // --- DESTINATION ---
        // -------------------

        // js distribution folder and files
        js_dist_folder: '<%= base_paths.dest %>/js',
        js_dist_file_vendor: '<%= base_paths.dest %>/js/' + base__params.namespace_vendor,
        js_dist_file_fndtn: '<%= base_paths.dest %>/js/' + base__params.jnamespace_fndtn,
        js_dist_file_plugins: '<%= base_paths.dest %>/js/' + base__params.namespace_plugins,
        js_dist_file_custom: '<%= base_paths.dest %>/js/' + base__params.namespace_custom,
        js_dist_file_ie8: '<%= base_paths.dest %>/js/' + base__params.namespace_ie_8,
        // css distribution folder and files
        css_dist_folder: '<%= base_paths.dest %>/css',
        css_dist_file_styles: '<%= base_paths.dest %>/css/' + base__params.namespace_common_styles,
        css_dist_file_styles_data: '<%= base_paths.dest %>/css/' + base__params.namespace_common_styles + '_data',
        css_dist_file_ie9to10: '<%= base_paths.dest %>/css/' + base__params.namespace_ie_9to10,
        css_dist_file_ie8: '<%= base_paths.dest %>/css/' + base__params.namespace_ie_8,
        // svg distribution folder and files
        svg_dist: ['<%= base_paths.dest %>/svg'],
        svg_dist_file: '<%= base_paths.dest %>/svg/' + base__params.namespace_svg_sprite + '.svg',

        // --- PARAMETERS ---
        // -------------------
        
        svg_colors_arr: base__colors,
        svg_colors_ext: svg_color_str,
        // Default png-widths for grunticon svg-fallback
        png_width: base__params.default_png_width,
        png_height: base__params.default_png_height,

        // excludes for "copy" to avoid duplication
        do_not_copy: ['!<%= base_paths.src %>/**/*.styl', '!<%= base_paths.src %>/**/*.coffee', '!<%= base_paths.src %>/**/*.jade'],
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
            base_paths: base_paths,
            lm_conf: lm_conf,
            base__params: base__params
        },

        // pass variables to modules and tasks
        // config: {
        //     base_paths: base_paths,
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
    // ===============================================
    // EOF - LOAD GRUNT CONFIG AND TASKS

};