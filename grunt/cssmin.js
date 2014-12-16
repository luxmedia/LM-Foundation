module.exports = {
    // CSS minifaction
    cssmin: {
        files: {
            '<%= lm_foundation.css_dist_file_min %>': [ '<%= lm_foundation.css_dist_folder %>/*.css' ]
        }
    }
}