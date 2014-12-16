module.exports = { //note the `tasks` export here [!]
    
    // clean dist directory from old files
    'clean:build': {
        src: [ '<%= globalConfig.dest %>' ]
    },
    'clean:stylesheets': {
        src: [ '<%= lm_foundation.css_dist_folder %>/**/*.css', '!<%= lm_foundation.css_dist_file %>', '!<%= lm_foundation.css_dist_file_min %>' ]
    },
    'clean:scripts': {
        src: [ '<%= lm_foundation.js_dist_folder %>/**/*.js', '<%= lm_foundation.do_not_clean_js %>' ]
    }
}