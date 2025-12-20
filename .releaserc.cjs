const scope = process.env.MODULE_SCOPE;

if (!scope) {
  throw new Error("MODULE_SCOPE environment variable is required");
}

// Custom plugin to filter commits by scope before github plugin posts comments
const filterCommitsByScope = {
  success: (pluginConfig, context) => {
    context.commits = context.commits.filter((commit) => {
      const match = commit.message.match(/^\w+\(([^)]+)\)/);
      return match && match[1] === scope;
    });
  },
};

module.exports = {
  tagFormat: `${scope}@\${version}`,
  branches: ["master"],
  plugins: [
    filterCommitsByScope,
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/github",
      {
        releasedLabels: false,
      },
    ],
  ],
};
