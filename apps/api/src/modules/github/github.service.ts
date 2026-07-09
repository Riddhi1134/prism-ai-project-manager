import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { getInstallationClient } from "@prism/github";
import { env } from "../../config/env.js";

export async function createGitHubInstallationClient(
  installationId: number,
) {
  if (!env.GITHUB_PRIVATE_KEY_PATH) {
    throw new Error("GITHUB_PRIVATE_KEY_PATH is not configured");
  }

  const keyPath = resolve(process.cwd(), env.GITHUB_PRIVATE_KEY_PATH);

  console.log("Using key:", keyPath);

  const privateKey = readFileSync(keyPath, "utf8");

  return getInstallationClient(
    env.GITHUB_APP_ID!,
    privateKey,
    installationId,
  );
}

export async function getRepositories(installationId: number) {
  const octokit = await createGitHubInstallationClient(installationId);

  const response = await octokit.request(
    "GET /installation/repositories",
  );

  return response.data.repositories;
}

export async function getPullRequests(
  installationId: number,
  owner: string,
  repo: string,
) {
  const octokit = await createGitHubInstallationClient(
    installationId,
  );

  const response = await octokit.request(
    "GET /repos/{owner}/{repo}/pulls",
    {
      owner,
      repo,
      state: "open",
    },
  );

  return response.data;
}