const { vars } = require("@kie-tools/root-env");

module.exports = {
  preset: "@kie-tools/jest-base",
  testEnvironment: "node", // Or 'jsdom' if browser-specific APIs are directly tested without mocking
  moduleNameMapper: {
    // If you have path aliases in tsconfig.json, map them here
    // e.g., "^@/(.*)$": "<rootDir>/src/$1"
  },
  transformIgnorePatterns: [`node_modules/(?!${vars.buildEnv.jest.transformIgnorePatterns.join("|")})`],
  // Coverage configuration (optional, can be enhanced later)
  // coveragePathIgnorePatterns: ["/node_modules/", "/tests/", "/dist/"],
  // collectCoverage: true,
  // coverageReporters: ["lcov", "text", "html"],
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: -10,
  //   },
  // },
};
