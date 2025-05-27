// Define environment variables for the dmn-documentation-generator package.
// This file is typically used for build-time configuration or feature flags.
const { varsWithName, getOrDefault, composeEnv, str2bool } = require("@kie-tools-scripts/build-env");

const rootEnv = require("@kie-tools/root-env/env");

module.exports = composeEnv([rootEnv], {
  vars: varsWithName({
    ONLINE_EDITOR__disableExtendedServicesWizard: {
      default: `${false}`,
      description: "Disables the Extended Services Wizard.",
    },
    ONLINE_EDITOR__feedbackUrl: {
      default: "https://github.com/apache/incubator-kie-issues/issues/439#issuecomment-1821845917",
      description: "URL where users can give feedback, currently present in the New DMN Editor dropdown.",
    },
    ONLINE_EDITOR__requireCustomCommitMessage: {
      default: `${false}`,
      description: "Require users to type a custom commit message when creating a new commit.",
    },
    ONLINE_EDITOR__customCommitMessageValidationServiceUrl: {
      default: "",
      description: "Service URL to validate commit messages.",
    },
    ONLINE_EDITOR__appName: {
      default: "Apache KIE™ Sandbox",
      description: "The name used to refer to a particular KIE Sandbox distribution.",
    },
    ONLINE_EDITOR__devDeploymentBaseImageRegistry: {
      default: "docker.io",
      description: "Image registry to be used by Dev Deployments when deploying models.",
    },
    ONLINE_EDITOR__devDeploymentBaseImageAccount: {
      default: "apache",
      description: "Image account to be used by Dev Deployments when deploying models.",
    },
    ONLINE_EDITOR__devDeploymentBaseImageName: {
      default: "incubator-kie-sandbox-dev-deployment-base",
      description: "Image name to be used by Dev Deployments when deploying models.",
    },
    ONLINE_EDITOR__devDeploymentBaseImageTag: {
      default: rootEnv.env.root.streamName,
      description: "Image tag to be used by Dev Deployments when deploying models.",
    },
    ONLINE_EDITOR__devDeploymentQuarkusBlankAppImageRegistry: {
      default: "docker.io",
      description: "Image registry to be used by Dev Deployments when deploying models.",
    },
    ONLINE_EDITOR__devDeploymentQuarkusBlankAppImageAccount: {
      default: "apache",
      description: "Image account to be used by Dev Deployments when deploying models.",
    },
    ONLINE_EDITOR__devDeploymentQuarkusBlankAppImageName: {
      default: "incubator-kie-sandbox-dev-deployment-quarkus-blank-app",
      description: "Image name to be used by Dev Deployments when deploying models.",
    },
    ONLINE_EDITOR__devDeploymentQuarkusBlankAppImageTag: {
      default: rootEnv.env.root.streamName,
      description: "Image tag to be used by Dev Deployments when deploying models.",
    },
    ONLINE_EDITOR__devDeploymentDmnFormWebappImageRegistry: {
      default: "docker.io",
      description: "Image registry to be used by Dev Deployments to display a form for deployed DMN models.",
    },
    ONLINE_EDITOR__devDeploymentDmnFormWebappImageAccount: {
      default: "apache",
      description: "Image account to be used by Dev Deployments to display a form for deployed DMN models.",
    },
    ONLINE_EDITOR__devDeploymentDmnFormWebappImageName: {
      default: "incubator-kie-sandbox-dev-deployment-dmn-form-webapp",
      description: "Image name to be used by Dev Deployments to display a form for deployed DMN models.",
    },
    ONLINE_EDITOR__devDeploymentDmnFormWebappImageTag: {
      default: rootEnv.env.root.streamName,
      description: "Image tag to be used by Dev Deployments to display a form for deployed DMN models.",
    },
    ONLINE_EDITOR__devDeploymentImagePullPolicy: {
      default: "IfNotPresent",
      description: "The image pull policy. Can be 'Always', 'IfNotPresent', or 'Never'.",
    },
    ONLINE_EDITOR__quarkusAcceleratorGitRef: {
      default: "main",
      description: "Default Quarkus Accelerator's Git ref to be used when cloning it.",
    },
    ONLINE_EDITOR_DEV__port: {
      default: 9001,
      description: "The development web server port",
    },
    ONLINE_EDITOR_DEV__https: {
      default: "false",
      description: "Tells if the development web server should use https",
    },
    ONLINE_EDITOR__skipPlaywrightTestsForArm64: {
      default: "false",
      description: "Skip Playwright tests for ARM64 architecture.",
    },
  }),
  get env() {
    return {
      onlineEditor: {
        dev: {
          port: getOrDefault(this.vars.ONLINE_EDITOR_DEV__port),
          https: str2bool(getOrDefault(this.vars.ONLINE_EDITOR_DEV__https)),
        },
        test: {
          skipForArm64: getOrDefault(this.vars.ONLINE_EDITOR__skipPlaywrightTestsForArm64),
        },
        appName: getOrDefault(this.vars.ONLINE_EDITOR__appName),
        disableExtendedServicesWizard: str2bool(getOrDefault(this.vars.ONLINE_EDITOR__disableExtendedServicesWizard)),
        feedbackUrl: getOrDefault(this.vars.ONLINE_EDITOR__feedbackUrl),
        requireCustomCommitMessage: str2bool(getOrDefault(this.vars.ONLINE_EDITOR__requireCustomCommitMessage)),
        customCommitMessageValidationServiceUrl: getOrDefault(
          this.vars.ONLINE_EDITOR__customCommitMessageValidationServiceUrl
        ),
      },
      devDeployments: {
        imagePullPolicy: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentImagePullPolicy),
        baseImage: {
          tag: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentBaseImageTag),
          registry: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentBaseImageRegistry),
          account: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentBaseImageAccount),
          name: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentBaseImageName),
        },
        quarkusBlankAppImage: {
          tag: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentQuarkusBlankAppImageTag),
          registry: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentQuarkusBlankAppImageRegistry),
          account: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentQuarkusBlankAppImageAccount),
          name: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentQuarkusBlankAppImageName),
        },
        dmnFormWebappImage: {
          tag: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentDmnFormWebappImageTag),
          registry: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentDmnFormWebappImageRegistry),
          account: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentDmnFormWebappImageAccount),
          name: getOrDefault(this.vars.ONLINE_EDITOR__devDeploymentDmnFormWebappImageName),
        },
      },
    };
  },
});
