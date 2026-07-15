import { createGitHubInstallationClient } from "../github/github.service.js";

export async function createPullRequestComment(
  installationId: number,
  owner: string,
  repo: string,
  pullNumber: number,
  body: string,
) {
  const octokit =
    await createGitHubInstallationClient(installationId);

  await octokit.request(
    "POST /repos/{owner}/{repo}/issues/{issue_number}/comments",
    {
      owner,
      repo,
      issue_number: pullNumber,
      body,
    },
  );
}