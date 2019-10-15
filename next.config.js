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
      '/callForPresentations': { page: '/callForPresentations' }
    };
  }
})