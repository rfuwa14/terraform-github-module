set -e


STATE_OUT="/tmp/another_tf/terraform.tfstate"
mkdir -p "$(dirname $STATE_OUT)"

for key in $(terraform state list | grep 'github_actions_variable.variables' | sed 's/.*\["\(.*\)"\]/\1/'); do
  terraform state mv -state-out="$STATE_OUT" "github_actions_variable.variables[\"$key\"]" "github_actions_variable.variables[\"$key\"]"
done

cd another_tf
terraform init
terraform state push $STATE_OUT
