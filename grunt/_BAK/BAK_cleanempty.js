module.exports = {
// clean empty folders
    cleanempty: {
        options: {
            files: true,
            folders: true
        },
        src: ['<%= globalConfig.dest %>/**/*']
    }
}