import { app } from "./app.js";
import { env } from "./config/env.js";

async function start() {
  try {
    await app.listen({
      host: env.HOST,
      port: env.PORT,
    });

    app.log.info(`🚀 PRISM API running at http://localhost:${env.PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

/**
 * Graceful Shutdown
 */

const shutdown = async (signal: string) => {
  app.log.info(`${signal} received. Shutting down...`);

  try {
    await app.close();
    app.log.info("✅ Server stopped successfully");
    process.exit(0);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

start();