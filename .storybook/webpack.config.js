const path = require('path');

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.resolve.alias = {
    components: path.resolve('src/components'),
  };
  return storybookBaseConfig;
};
