import { FastifyInstance } from "fastify";
import { githubWebhookController } from "./github.controller.js";

export async function githubRoutes(app: FastifyInstance) {
  app.post(
    "/webhooks/github",
    {
      schema: {
        tags: ["GitHub"],
        summary: "Receive GitHub Webhooks",
      },
    },
    githubWebhookController,
  );
}