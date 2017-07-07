const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve.modules = [path.resolve('src'), path.resolve('node_modules')];
  return storybookBaseConfig;
};
