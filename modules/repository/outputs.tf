output "repository_id" {
  description = "GitHub repository ID"
  value       = github_repository.repo.repo_id
}

output "repository_full_name" {
  description = "Full name of the repository (owner/repo)"
  value       = github_repository.repo.full_name
}

output "repository_url" {
  description = "URL of the repository"
  value       = github_repository.repo.html_url
}

output "repository_git_clone_url" {
  description = "Git clone URL"
  value       = github_repository.repo.git_clone_url
}

output "repository_ssh_clone_url" {
  description = "SSH clone URL"
  value       = github_repository.repo.ssh_clone_url
}
