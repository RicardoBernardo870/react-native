module.exports = {
  env: {
    browser: false,
    es2021: true,
    "react-native/react-native": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "prettier"
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "linebreak-style": ["error", "unix"], // Use Unix line endings
  },
};
