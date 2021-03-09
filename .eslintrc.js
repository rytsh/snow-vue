module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:vue/vue3-recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "indent": ["error", 2],
    "no-unexpected-multiline": "error",
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "line-comment-position": ["error", { position: "above" }],
    "array-element-newline": ["error", "consistent"],
    "max-len": ["error", { code: 120, ignoreUrls: true }],
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 0 }],
    "quote-props": ["error", "consistent"],
    "array-bracket-spacing": ["error", "never"],
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
