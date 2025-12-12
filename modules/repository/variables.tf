variable "repository_name" {
  description = "Name of the repository"
  type        = string
}

variable "repository_description" {
  description = "Description of the repository"
  type        = string
  default     = ""
}

variable "repository_visibility" {
  description = "Repository visibility (public or private)"
  type        = string
  default     = "private"

  validation {
    condition     = contains(["public", "private"], var.repository_visibility)
    error_message = "Visibility must be either 'public' or 'private'."
  }
}

variable "has_issues" {
  description = "Enable GitHub Issues"
  type        = bool
  default     = true
}

variable "has_projects" {
  description = "Enable GitHub Projects"
  type        = bool
  default     = true
}

variable "has_wiki" {
  description = "Enable GitHub Wiki"
  type        = bool
  default     = true
}

variable "has_downloads" {
  description = "Enable downloads"
  type        = bool
  default     = true
}

variable "has_discussions" {
  description = "Enable GitHub Discussions"
  type        = bool
  default     = false
}

variable "auto_init" {
  description = "Initialize repository with README"
  type        = bool
  default     = true
}

variable "gitignore_template" {
  description = "Gitignore template to use"
  type        = string
  default     = null
}

variable "license_template" {
  description = "License template to use"
  type        = string
  default     = null
}

variable "allow_merge_commit" {
  description = "Allow merge commits"
  type        = bool
  default     = true
}

variable "allow_squash_merge" {
  description = "Allow squash merging"
  type        = bool
  default     = true
}

variable "allow_rebase_merge" {
  description = "Allow rebase merging"
  type        = bool
  default     = true
}

variable "delete_branch_on_merge" {
  description = "Automatically delete head branches after merging PRs"
  type        = bool
  default     = true
}

