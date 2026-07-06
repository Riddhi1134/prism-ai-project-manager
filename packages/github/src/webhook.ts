import { verifySignature } from "./utils/signature.js";

export function verifyWebhookSignature(
  payload: string,
  secret: string,
  signature?: string,
): boolean {
  if (!signature) {
    return false;
  }

  return verifySignature(payload, secret, signature);
}