import { getRepositories } from "./modules/github/github.service.js";

async function main() {
  const repositories = await getRepositories(145152296);

  console.log("📦 Repositories:");

  for (const repo of repositories) {
    console.log(`- ${repo.full_name}`);
  }
}

main().catch(console.error);