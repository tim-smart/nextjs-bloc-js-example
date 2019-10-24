const withTM = require("next-transpile-modules");

module.exports = withTM({
  transpileModules: ["@bloc-js"],
  webpack(config) {
    // "esnext" package.json as main field
    config.resolve.mainFields = ["esnext", "browser", "module", "main"];
    return config;
  }
});
