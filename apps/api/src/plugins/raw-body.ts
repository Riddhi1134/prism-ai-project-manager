import fp from "fastify-plugin";
import rawBody from "fastify-raw-body";
import type { FastifyInstance } from "fastify";

export const registerRawBody = fp(async (app: FastifyInstance) => {
  await app.register(rawBody, {
    field: "rawBody",
    global: false,
    encoding: "utf8",
    runFirst: true,
  });
});