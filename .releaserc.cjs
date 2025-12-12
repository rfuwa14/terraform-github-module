const scope = process.env.MODULE_SCOPE;

if (!scope) {
  throw new Error("MODULE_SCOPE environment variable is required");
}

module.exports = {
  tagFormat: `${scope}@\${version}`,
  branches: ["master"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "feat", scope, release: "minor" },
          { type: "fix", scope, release: "patch" },
          { type: "perf", scope, release: "patch" },
          { type: "refactor", scope, release: "patch" },
          { type: "docs", scope, release: false },
          { type: "style", scope, release: false },
          { type: "chore", scope, release: false },
          { type: "test", scope, release: false }
        ],
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

