const withTS = require("@zeit/next-typescript");
const withTM = require("next-transpile-modules");

module.exports = withTS(
  withTM({
    transpileModules: ["@bloc-js"],
    webpack(config) {
      // "esnext" package.json as main field
      config.resolve.mainFields = ["esnext", "browser", "module", "main"];
      return config;
    }
  })
);
