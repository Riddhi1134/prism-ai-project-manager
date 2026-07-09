import { FastifyInstance } from "fastify";
import { registerRawBody } from "./raw-body.js";
import { registerCors } from "./cors.js";
import { registerHelmet } from "./helmet.js";
import { registerSwagger } from "./swagger.js";

export async function registerPlugins(app: FastifyInstance) {
  await registerCors(app);

  await registerHelmet(app);

  await registerSwagger(app);

  await registerRawBody(app);
}