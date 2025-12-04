terraform {
  required_providers {
    github = {
      source  = "integrations/github"
      version = "~> 6.0"
    }
  }
}

provider "github" {
  owner = "rfuwa14"
}

module "repository" {
  source = "./modules/repository"

  repository_name        = "my-test-repo"
  repository_description = "my test repo (will be deleted soon)"
  auto_init              = true
}

