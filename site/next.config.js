const { createConfig, match, customConfig } = require("@webpack-blocks/webpack");
const typescript = require("@webpack-blocks/typescript");

module.exports = {
  webpack: function(config) {
    return createConfig([customConfig(config), match(["*.js"], [typescript()])]);
  }
};
