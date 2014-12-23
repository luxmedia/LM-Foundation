module.exports = {
// minifies, concatenates and uglifies .js files
    uglify: {
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
}