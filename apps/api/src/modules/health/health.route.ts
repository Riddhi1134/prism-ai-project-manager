import { FastifyInstance } from "fastify";

export async function healthRoutes(app: FastifyInstance) {
  app.get("/health", async () => {
    return {
      status: "ok",
      service: "PRISM API",
      version: "1.0.0",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  });
}