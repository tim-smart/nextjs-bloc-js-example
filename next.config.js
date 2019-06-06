const withTS = require("@zeit/next-typescript");
const withTM = require("next-transpile-modules");

module.exports = withTS(
  withTM({
    transpileModules: ["@bloc-js"]
  })
);
