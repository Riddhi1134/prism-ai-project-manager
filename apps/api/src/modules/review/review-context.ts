import type { ReviewFile } from "./review.types.js";

export function buildReviewContext(
  files: ReviewFile[],
): string {
  return files
    .map(
      (file) => `
### ${file.filename}

Status: ${file.status}

\`\`\`diff
${file.patch ?? ""}
\`\`\`
`,
    )
    .join("\n");
}