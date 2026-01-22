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

# resource "github_actions_variable" "variables" {
#   for_each = {
#     ENV = "test"
#     FOO = "bar"
#   }
#
#   repository    = "my-test-repo"
#   variable_name = each.key
#   value         = each.value
# }
