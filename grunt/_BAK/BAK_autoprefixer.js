module.exports = {
    // Add Browser vendor prefixes
    // https://github.com/nDmitry/grunt-autoprefixer
    autoprefixer: {
        options: {
            browsers: ['> 5%', 'last 2 versions', 'ie 8', 'ie 9']
        },
        multiple_files: {
            expand: true,
            cwd: '<%= globalConfig.dest %>',
            src: [ '**/*.css' ],
            dest: '<%= globalConfig.dest %>'
        }
    }
}