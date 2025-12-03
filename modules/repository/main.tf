resource "github_repository" "repo" {
  name        = var.repository_name
  description = var.repository_description
  visibility  = var.repository_visibility

  has_issues      = var.has_issues
  has_projects    = var.has_projects
  has_wiki        = var.has_wiki
  has_downloads   = var.has_downloads
  has_discussions = var.has_discussions

  auto_init          = var.auto_init
  gitignore_template = var.gitignore_template
  license_template   = var.license_template

  allow_merge_commit     = var.allow_merge_commit
  allow_squash_merge     = var.allow_squash_merge
  allow_rebase_merge     = var.allow_rebase_merge
  delete_branch_on_merge = var.delete_branch_on_merge
}

resource "github_issue_label" "question" {
  repository  = github_repository.repo.name
  name        = "question"
  color       = "cc317c"
  description = "any question ask"
}

data "github_branch" "main" {
  repository = github_repository.repo.name
  branch     = "main"

  depends_on = [github_repository.repo]
}

resource "github_branch_default" "main" {
  repository = github_repository.repo.name
  branch     = data.github_branch.main.branch
}
