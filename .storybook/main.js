const esDevServer = require('../es-dev-server.config.js');

module.exports = {
  // Globs of all the stories in your project
  stories: ['../components/*/stories/*.stories.{js,mdx}'],

  // Configuration for es-dev-server (start-storybook only)
  esDevServer,

  // Rollup build output directory (build-storybook only)
  outputDir: '../storybook',

  // Configuration for rollup (build-storybook only)
  rollup: config => {
    return config;
  },
};
