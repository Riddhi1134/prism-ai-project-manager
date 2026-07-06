import Fastify from "fastify";
import { githubRoutes } from "./modules/github/github.route.js";
import { registerPlugins } from "./plugins/index.js";
import { healthRoutes } from "./modules/health/health.route.js";

export const app = Fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
});

await registerPlugins(app);
await app.register(githubRoutes);
await app.register(healthRoutes);