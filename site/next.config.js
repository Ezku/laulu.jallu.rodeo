const { createConfig, match, customConfig } = require("@webpack-blocks/webpack");
const { css, file } = require("@webpack-blocks/assets");
const typescript = require("@webpack-blocks/typescript");

module.exports = {
  webpack: function(config) {
    return createConfig([
      customConfig(config),
      match("*.css", [css()]),
      match(["*.js"], [typescript()]),
      match(
        ["*.eot", "*.ttf", "*.woff", "*.woff2", "*.svg", "*.css"],
        [
          file() // will copy font files to build directory and link to them
        ]
      )
    ]);
  }
};
