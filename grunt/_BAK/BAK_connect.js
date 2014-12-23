module.exports = {
    connect: {
        server: {
            options: {
                port: 4000,
                base: '<%= globalConfig.dest %>',
                hostname: '*'
            }
        }
    }
}