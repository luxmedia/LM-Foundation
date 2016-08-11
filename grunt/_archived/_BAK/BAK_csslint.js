module.exports = {
    // CSS Linter
    // https://github.com/gruntjs/grunt-contrib-csslint
    csslint: {
        options: {
            csslintrc: '.csslintrc',
            formatters: [
                {id: 'junit-xml', dest: 'report/csslint_junit.xml'},
                {id: 'csslint-xml', dest: 'report/csslint.xml'}
            ]
        },
        strict: {
            options: {
                import: 2
            },
            src: ['<%= lm_foundation.css_dist_file %>']
        },
        lax: {
            options: {
                import: false
            },
            src: ['<%= lm_foundation.css_dist_file %>']
        }
    }
}