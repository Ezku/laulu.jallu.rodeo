module.exports = {
  plugins: [
    require("postcss-cssnext")({
      // The warning is from cssnano and should be safe to ignore
      warnForDuplicates: false
    }),
    require("postcss-modules")({
      generateScopedName: "[local]-[hash:base64:5]"
    }),
    require("cssnano")()
  ]
};
