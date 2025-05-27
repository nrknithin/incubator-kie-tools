// Define environment variables for the dmn-documentation-generator package.
// This file is typically used for build-time configuration or feature flags.

const { vars } = require("@kie-tools/root-env");

module.exports = {
  dmnDocumentationGenerator: {
    // Add any package-specific environment variables here if needed in the future.
    // For example:
    // myFeatureFlag: vars.dmnDocumentationGenerator.myFeatureFlag.vars.getOrDefault(false),
  },
};
