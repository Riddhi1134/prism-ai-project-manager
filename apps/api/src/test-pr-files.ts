import { getPullRequestFiles } from "./modules/github/github.service.js";
import { buildReviewContext } from "./modules/review/review-context.js";

async function main() {
  const files = await getPullRequestFiles(
    145152296,
    "Riddhi1134",
    "prism-ai-project-manager",
    1,
  );

  const context = buildReviewContext(files);

  console.log(context);
}

main().catch(console.error);