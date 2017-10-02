const { createConfig, match, customConfig } = require("@webpack-blocks/webpack");
const { css, file } = require("@webpack-blocks/assets");

module.exports = {
  webpack: function(config) {
    return createConfig([
      customConfig(config),
      match("*.css", [css()]),
      match(
        ["*.eot", "*.ttf", "*.woff", "*.woff2", "*.svg", "*.css"],
        [
          file() // will copy font files to build directory and link to them
        ]
      )
    ]);
  }
};
