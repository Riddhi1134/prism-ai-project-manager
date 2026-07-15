import { verifyWebhookSignature } from "@prism/github";

import { handlePullRequestEvent } from "../handlers/pull-request.handler.js";
import { handlePushEvent } from "../handlers/push.handler.js";
import { handleIssueEvent } from "../handlers/issue.handler.js";
import { handleInstallationEvent } from "../handlers/installation.handler.js";

export function verifyGitHubWebhook(
  rawBody: string,
  secret: string,
  signature?: string,
) {
  return verifyWebhookSignature(
    rawBody,
    secret,
    signature,
  );
}

export async function dispatchGitHubEvent(
  event: string,
  payload: any,
) {
  switch (event) {
    case "pull_request":
      await handlePullRequestEvent(payload);
      break;

    case "push":
      await handlePushEvent(payload);
      break;

    case "issues":
      await handleIssueEvent(payload);
      break;

    case "installation":
      await handleInstallationEvent(payload);
      break;

    default:
      console.log(`Unhandled event: ${event}`);
  }
}