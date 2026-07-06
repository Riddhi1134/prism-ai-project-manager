import { FastifyReply, FastifyRequest } from "fastify";

export async function githubWebhookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  request.log.info("GitHub webhook received");

  return reply.send({
    success: true,
    message: "Webhook received",
  });
}