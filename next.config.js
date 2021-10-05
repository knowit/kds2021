const withSass = require('@zeit/next-sass')
module.exports = withSass({
    exportPathMap: function () {
        return {
            '/': {page: '/'},
            '/CallForPresentations': {page: '/callForPresentations'},
            '/ParticipantRegistration': {page: '/participantRegistration'},
            '/CodeOfConduct': {page: '/codeOfConduct'},
            '/Location': {page: '/location'},
            '/Practicalities': {page: '/practicalities'},
            '/AboutKds': {page: '/aboutKds'},
            '/Schedule': {page: '/schedule'},
            '/TalksAndSpeakers': {page: '/talksAndSpeakers'},
            '/Logo': {page: '/logo'},
            '/Stats': {page: '/stats'}
        };
    }
})
