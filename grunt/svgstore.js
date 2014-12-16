module.exports = {
    // SVG-Store
    // https://github.com/FWeinb/grunt-svgstore
    // 2014-12-12 - DEPRECATED, we use "svgstylus" instead !!!
    svgstore: {
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
}