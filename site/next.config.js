const fs = require("fs");
const trash = require("trash");

const { createConfig, match, customConfig } = require("@webpack-blocks/webpack");
const typescript = require("@webpack-blocks/typescript");

module.exports = {
  webpack: function(config) {
    return createConfig([
      customConfig(config),
      match(["*.js"], [typescript()]),
      // See: https://github.com/zeit/next.js/blob/master/examples/with-global-stylesheet/next.config.js
      customConfig({
        module: {
          rules: [
            {
              test: /\.css$/,
              use: [
                {
                  loader: "emit-file-loader",
                  options: {
                    name: "dist/[path][name].[ext]"
                  }
                },
                {
                  loader: "skeleton-loader",
                  options: {
                    procedure: function(content) {
                      const fileName = `${this._module.userRequest}.json`;
                      const classNames = fs.readFileSync(fileName, "utf8");

                      trash(fileName);

                      return [
                        "module.exports = {",
                        `classNames: ${classNames},`,
                        `stylesheet: \`${content}\``,
                        "}"
                      ].join("");
                    }
                  }
                },
                "postcss-loader"
              ]
            }
          ]
        }
      })
    ]);
  }
};
