module.exports = {
// optional: concatenate foundation.js files before uglify
    files: {
        // make shure to load foundation.js before its components !!!
        '<%= lm_foundation.js_dist_folder %>/vendor.js': '<%= lm_foundation.js_src_vendor %>',
        '<%= lm_foundation.js_dist_folder %>/foundation.js': ['<%= lm_foundation.js_src_fndtn %>', '<%= lm_foundation.js_src_fndtn_components %>'],
        '<%= lm_foundation.js_dist_folder %>/plugins.js': '<%= lm_foundation.js_src_plugins %>',
        '<%= lm_foundation.js_dist_folder %>/scripts.js': '<%= lm_foundation.js_src_custom %>'
    }
}