module.exports = {
  extends: ["@kie-tools/eslint/eslint-config-typescript-react.js"],
  env: {
    jest: true,
  },
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname, // Ensures tsconfig.json is found correctly
  },
  ignorePatterns: ["**/node_modules/**", "**/dist/**", "**/tests/**", "*.js"], // Ignoring .js files for now
  rules: {
    // Add any package-specific ESLint rules or overrides here if needed.
    // For example:
    // "@typescript-eslint/no-unused-vars": "warn",
  },
};
