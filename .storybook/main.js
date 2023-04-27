const path = require('path');
module.exports = {
  core: {
    builder: 'webpack5',
  },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "storybook-addon-designs"
  ],
    // Add the following lines to specify the static directory
  // for serving static files like images, fonts, etc.
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader'],
      include: path.resolve(__dirname, '../public'),
    });
    return config;
  },
}
