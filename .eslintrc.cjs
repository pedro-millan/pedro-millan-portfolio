module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    env: {
      browser: true,
      es2021: true,
    },
    plugins: ["react", "@typescript-eslint"],
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    settings: {
      react: {
        version: "detect",
      },
    },
    ignorePatterns: ["dist", "node_modules"]
  }
  