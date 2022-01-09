const path = require('path');

module.exports = {
  stories: ['../pages', '../components', '../hooks'],
  features: {
    previewCsfV3: true,
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chakra-ui/storybook-addon',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    return config;
  },
};
