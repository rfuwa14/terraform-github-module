const scope = process.env.MODULE_SCOPE;

if (!scope) {
  throw new Error("MODULE_SCOPE environment variable is required");
}

// NOTE: Wrap plugins to filter commits by scope.
// These out-of-the-box semantic-release pluigns don't assume monorepo (multiple releases).
// Thus, we need to manually filter the commits by scope for each step in the pipeline.
//
// There is a plugin called `semantic-release/monorepo` which addresses the same problem, but 
// it seems to solve this only for npm and diff path based, not scope base.
const scopedReleasePlugin = {
  analyzeCommits: async (pluginConfig, context) => {
    const { analyzeCommits } = await import("@semantic-release/commit-analyzer");
    const filtered = filterByScope(context.commits);
    context.logger.log(
      `Filtered commits for scope "${scope}": ${filtered.length} of ${context.commits.length}`
    );
    return analyzeCommits(
      { preset: "conventionalcommits" },
      { ...context, commits: filtered }
    );
  },
  generateNotes: async (pluginConfig, context) => {
    const { generateNotes } = await import("@semantic-release/release-notes-generator");
    return generateNotes(
      { preset: "conventionalcommits" },
      { ...context, commits: filterByScope(context.commits) }
    );
  },
  success: async (pluginConfig, context) => {
    const github = await import("@semantic-release/github");
    return github.success(
      { releasedLabels: false },
      { ...context, commits: filterByScope(context.commits) }
    );
  },
};

const filterByScope = (commits) =>
  commits.filter((commit) => {
    const match = commit.message.match(/^\w+\(([^)]+)\)/);
    return match && match[1] === scope;
  });

module.exports = {
  tagFormat: `${scope}@\${version}`,
  branches: ["master"],
  plugins: [
    scopedReleasePlugin,
    [
      "@semantic-release/github",
      {
        releasedLabels: false,
        successComment: false, // Disable default success comments, handled by scopedReleasePlugin
      },
    ],
  ],
};
