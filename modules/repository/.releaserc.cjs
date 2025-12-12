module.exports = {
  extends: "./modules/.releaserc.base.cjs",
  tagFormat: "repository@${version}",
  plugins: [
    [
      "@semantic-release/git",
      {
        assets: ["modules/repository/CHANGELOG.md"],
        message:
          "chore(release): repository@${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};

