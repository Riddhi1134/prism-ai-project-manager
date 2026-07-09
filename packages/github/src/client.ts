import { App } from "@octokit/app";
import type { Octokit } from "@octokit/rest";

export function createGitHubApp(
  appId: string,
  privateKey: string,
) {
  return new App({
    appId,
    privateKey,
  });
}

export async function getInstallationClient(
  appId: string,
  privateKey: string,
  installationId: number,
): Promise<Octokit> {
  const app = createGitHubApp(appId, privateKey);

  return (await app.getInstallationOctokit(installationId)) as Octokit;
}