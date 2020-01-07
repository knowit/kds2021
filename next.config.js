const withSass = require('@zeit/next-sass')
module.exports = withSass({
    exportPathMap: function () {
        return {
            '/': {page: '/'},
            '/codeOfConduct': {page: '/codeOfConduct'},
            '/location': {page: '/location'},
            '/practicalities': {page: '/practicalities'},
            '/schedule': {page: '/schedule'},
            '/talksAndSpeakers': {page: '/talksAndSpeakers'}
        };
    }
})