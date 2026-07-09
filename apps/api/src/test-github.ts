import { createGitHubInstallationClient } from "./modules/github/github.service.js";

async function main() {
  const installationId = 145152296;

  const octokit = await createGitHubInstallationClient(installationId);

  console.log("✅ Installation client created");

  const response = await octokit.request(
    "GET /installation/repositories",
  );

  console.log("\n📦 Accessible Repositories:");

  for (const repo of response.data.repositories) {
    console.log(`- ${repo.full_name}`);
  }
}

main().catch((error) => {
  console.error("❌ Error:");
  console.error(error);
});