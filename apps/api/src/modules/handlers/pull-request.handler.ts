import type { PullRequestEventPayload } from "@prism/github";

import { reviewPullRequest } from "../review/review.service.js";
import { createPullRequestComment } from "../comments/comment.service.js";

export async function handlePullRequestEvent(
  payload: PullRequestEventPayload,
) {
  console.log("📌 Pull Request Received");

  console.log({
    action: payload.action,
    repository: payload.repository.full_name,
    prNumber: payload.pull_request.number,
    title: payload.pull_request.title,
    branch: payload.pull_request.head.ref,
  });

  // Sirf PR open hone par review
  if (payload.action !== "opened") {
    return;
  }

  try {
    const installationId = payload.installation.id;
    const owner = payload.repository.owner.login;
    const repo = payload.repository.name;
    const pullNumber = payload.pull_request.number;

    const review = await reviewPullRequest(
      installationId,
      owner,
      repo,
      pullNumber,
    );

    await createPullRequestComment(
      installationId,
      owner,
      repo,
      pullNumber,
      review,
    );

    console.log("✅ AI Review Comment Posted");
  } catch (error) {
    console.error("❌ Failed to review PR");
    console.error(error);
  }
}