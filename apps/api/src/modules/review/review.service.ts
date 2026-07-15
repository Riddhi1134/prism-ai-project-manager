import { getPullRequestFiles } from "../github/github.service.js";
import { buildReviewContext } from "./review-context.js";
import { generateReview } from "../ai/ai.service.js";

export async function reviewPullRequest(
  installationId: number,
  owner: string,
  repo: string,
  pullNumber: number,
) {
  const files = await getPullRequestFiles(
    installationId,
    owner,
    repo,
    pullNumber,
  );

  const context = buildReviewContext(files);

  return generateReview(context);
}