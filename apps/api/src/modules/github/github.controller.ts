import { FastifyReply, FastifyRequest } from "fastify";
import { env } from "../../config/env.js";
import { verifyGitHubWebhook } from "./github.service.js";
import { dispatchGitHubEvent } from "./github.service.js";
export async function githubWebhookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const signature = request.headers["x-hub-signature-256"];

  const isValid = verifyGitHubWebhook(
    (request as any).rawBody,
    env.GITHUB_WEBHOOK_SECRET ?? "",
    typeof signature === "string" ? signature : undefined,
  );
  const event = request.headers["x-github-event"];

await dispatchGitHubEvent(
  typeof event === "string" ? event : "",
  request.body,
);

  if (!isValid) {
    return reply.status(401).send({
      success: false,
      message: "Invalid GitHub Signature",
    });
  }

  request.log.info("GitHub Signature Verified");

  return reply.send({
    success: true,
    message: "Webhook Verified",
  });
}