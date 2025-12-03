# GitHub Repository Terraform Configuration

This Terraform configuration creates and manages a GitHub repository.

## Prerequisites

1. **Terraform**: Install from [terraform.io](https://www.terraform.io/downloads)
2. **GitHub Personal Access Token**: Create one at [github.com/settings/tokens](https://github.com/settings/tokens)
   - Required scopes: `repo`, `delete_repo` (if you plan to destroy)

## Setup

1. Copy the example variables file:
   ```bash
   cp terraform.tfvars.example terraform.tfvars
   ```

2. Edit `terraform.tfvars` with your values:
   - `github_token`: Your GitHub personal access token
   - `github_owner`: Your GitHub username or organization
   - `repository_name`: Name for your new repository
   - Other optional settings

3. Initialize Terraform:
   ```bash
   terraform init
   ```

## Usage

**Plan the changes:**
```bash
terraform plan
```

**Create the repository:**
```bash
terraform apply
```

**Destroy the repository:**
```bash
terraform destroy
```

## Configuration Options

See `variables.tf` for all available configuration options, including:
- Repository visibility (public/private)
- Enable/disable Issues, Wiki, Projects, Discussions
- Gitignore and license templates
- Merge settings

## Security Note

Never commit `terraform.tfvars` or any file containing your GitHub token to version control. These files are already included in `.gitignore`.
