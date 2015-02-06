module.exports = function(grunt) {

    // JSON CONSTRUCTOR
    // ===============================================
    // Get json configuration files

    // BASE PATH AND FILES VARIABLES
    if (grunt.file.isFile('src/json/base__paths.json')) {
        var base__paths = grunt.file.readJSON('src/json/base__paths.json', {encoding:"utf-8"});
    }
    // GET THE FRAMEWORK (FOUNDATION) COMPONENTS TO BE LOADED
    if (grunt.file.isFile('src/json/fndtn__com__js.json')) {
        var fndtn__com = grunt.file.readJSON('src/json/fndtn__com__js.json');
    }
    // CUSTOM JQUERY PLUGINS
    if (grunt.file.isFile('src/json/cust__jquery__plugins.json')) {
        var jquery__plugins = grunt.file.readJSON('src/json/cust__jquery__plugins.json');
    }
    // CUSTOM JQUERY PLUGINS
    if (grunt.file.isFile('src/json/cust__js.json')) {
        var custom__js = grunt.file.readJSON('src/json/cust__js.json');
    }

    // Global Variables
    var base_conf = {
        nodejs: base__paths.nodejs,
        src: base__paths.src,
        dest: base__paths.dest
    };

    // 1. BUILD FOUNDATION COMPONENTS ARRAY
    // first element in array MUST be the foundation.js base script!
    var fndtn__src__com = ['<%= base_conf.src %>/js/foundation/foundation.js'];
    // IMPORTANT NOTE: Naming of foundation.xxx.js and objects in "components-js.json" MUST match (but case-insensitive)!!!
    for ( var key in fndtn__com ) {
        if (fndtn__com[key] == true) {
            var fname = key;
            fndtn__src__com.push('<%= base_conf.src %>/js/foundation/foundation.' + fname.toLowerCase() + '.js');
        }
    }
    // 2. BUILD JQUERY PLUGINS ARRAY
    var js_src_jquery_plugins = [];
    // IMPORTANT NOTE: Naming of jquery.xxx.js and objects in "jquery__plugins.json" MUST match (but case-insensitive)!!!
    for ( var key in jquery__plugins ) {
        if (jquery__plugins[key] == true) {
            var fname = key;
            js_src_jquery_plugins.push('<%= base_conf.src %>/js/custom/plugins/jquery.' + fname.toLowerCase() + '.js');
        }
    }
    // 3. BUILD CUSTOM SCRIPTS ARRAY
    var js_src_scripts = [];
    // IMPORTANT NOTE: Naming of custom.xxx.js and objects in "custom__js.json" MUST match (but case-insensitive)!!!
    for ( var key in custom__js ) {
        if (custom__js[key] == true) {
            var fname = key;
            js_src_scripts.push('<%= base_conf.src %>/js/custom/custom.' + fname.toLowerCase() + '.js');
        }
    }

    // ===============================================
    // EOF - JSON CONSTRUCTOR


    // ASSIGN CUSTOM VARIABLES
    // ===============================================
    // define our source and destination folders
    var lm_conf = {
        // --- SOURCE ---
        stylus_plugins: ['svg-stylus'],
        // vednor js
        js_src_vendor: ['<%= base_conf.src %>/js/vendor/common/*.js'],
        // ie8 fallback js
        js_src_ie8: ['<%= base_conf.src %>/js/vendor/ie/*.js'],
        // foundation js source files
        // make sure to load foundation.js before its components (see JSON routine above) !!!
        js_src_fndtn_com: fndtn__src__com,
        // Custom jquery plugins
        js_src_plugins: js_src_jquery_plugins,
        // custom javascripts
        js_src_custom: js_src_scripts,
        // stylus source file(s)
        styl_src: ['<%= base_conf.src %>/styles/*.styl'],
        styl_src_file: '<%= base_conf.src %>/styles/styles.styl',
        styl_src_files: 'styles/styles.styl',
        styl_src_ie8flag: 'styles/ie8-flag.styl',
        // svg source folder/files
        svg_src: ['<%= base_conf.src %>/svg'],
        svg_src_files: ['<%= base_conf.src %>/svg/*.svg'],
        // --- DESTINATION ---
        // js distribution folder and file
        js_dist_folder: '<%= base_conf.dest %>/js',
        js_dist_file_vendor: base__paths.js_dist_file_vendor,
        js_dist_file_fndtn: base__paths.js_dist_file_fndtn,
        js_dist_file_plugins: base__paths.js_dist_file_plugins,
        js_dist_file_custom: base__paths.js_dist_file_custom,
        js_dist_file_iefallback: base__paths.js_dist_file_iefallback,
        // css distribution folder and file
        css_dist_folder: '<%= base_conf.dest %>/css',
        css_dist_file: '<%= base_conf.dest %>/css/styles',
        css_dist_file_ie8: '<%= base_conf.dest %>/css/ie8',
        // svg distribution folder/files
        svg_dist: ['<%= base_conf.dest %>/svg'],
        svg_dist_file: '<%= base_conf.dest %>/svg/sprite.svg',
        // excludes for "copy" to avoid duplication
        do_not_copy: ['!<%= base_conf.src %>/**/*.styl', '!<%= base_conf.src %>/**/*.coffee', '!<%= base_conf.src %>/**/*.jade'],
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
    // ===============================================
    // EOF - LOAD GRUNT CONFIG AND TASKS

};