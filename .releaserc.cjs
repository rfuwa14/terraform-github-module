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
        preset: "conventionalcommits"
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

