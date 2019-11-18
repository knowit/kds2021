const withSass = require('@zeit/next-sass')
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

module.exports = withSass({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/codeOfConduct': { page: '/codeOfConduct' },
      '/location': { page: '/location' },
      '/callForPresentations': { page: '/callForPresentations' },
      '/login': { page: '/login' },
      '/signUp': { page: '/signUp' },
      '/addTalk': { page: '/addTalk' },
      '/editTalk': { page: '/editTalk' },
      '/talksAndSpeakers': { page: '/talksAndSpeakers', query: { id: ""}  },
      '/schedule': { page: '/schedule', query: { id: ""} },
      '/stats': { page: '/stats' }
    };
  }
})