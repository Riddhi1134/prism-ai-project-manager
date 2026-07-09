import { getPullRequests } from "./modules/github/github.service.js";

async function main() {
  const pullRequests = await getPullRequests(
    145152296,
    "Riddhi1134",
    "prism-ai-project-manager",
  );

  console.log("📋 Pull Requests:");

  if (pullRequests.length === 0) {
    console.log("No open pull requests.");
    return;
  }

  for (const pr of pullRequests) {
    console.log(`#${pr.number} - ${pr.title}`);
  }
}

main().catch(console.error);