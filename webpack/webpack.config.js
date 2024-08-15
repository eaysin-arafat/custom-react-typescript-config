const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (envVers) => {
  const { env } = envVers;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);

  return config;
};
