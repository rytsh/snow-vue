// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    // directory name: 'build directory'
    public: { url: "/", static: true },
    src: { url: "/_dist" },
  },
  plugins: [
    ["@snowpack/plugin-typescript"],
    ["@snowpack/plugin-sass"],
    "@snowpack/plugin-vue",
    "@snowpack/plugin-vue/plugin-tsx-jsx.js",
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 8080,
    open: "none",
    bundle: false,
  },
  buildOptions: {
    clean: true,
  },
  alias: {
    "@": "./src",
  },
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
  },
};
