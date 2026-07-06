import crypto from "node:crypto";

/**
 * Generate GitHub HMAC SHA256 signature
 */
export function generateSignature(
  payload: string,
  secret: string,
): string {
  return `sha256=${crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex")}`;
}

/**
 * Compare GitHub signature securely
 */
export function verifySignature(
  payload: string,
  secret: string,
  signature: string,
): boolean {
  const expected = generateSignature(payload, secret);

  return crypto.timingSafeEqual(
    Buffer.from(expected),
    Buffer.from(signature),
  );
}