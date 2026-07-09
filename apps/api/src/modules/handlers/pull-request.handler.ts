import type { PullRequestEventPayload } from "@prism/github";

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
}