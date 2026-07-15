export async function generateReview(
  prompt: string,
): Promise<string> {
  console.log("\n===== REVIEW CONTEXT =====\n");
  console.log(prompt);

  return `
# 🤖 PRISM AI Review

## Summary

The pull request has been analyzed successfully.

## Findings

- ✅ Code structure looks good.
- ⚠️ Add null checks where applicable.
- ⚠️ Consider reducing function complexity.

Overall Score: **8.5/10**
`;
}