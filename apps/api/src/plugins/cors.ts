import cors from "@fastify/cors";
import { FastifyInstance } from "fastify";
import { env } from "../config/env.js";

export async function registerCors(app: FastifyInstance) {
  await app.register(cors, {
    origin: env.FRONTEND_URL,
    credentials: true,
  });
}