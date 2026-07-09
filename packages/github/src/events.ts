export const GitHubEvents = {
  PullRequest: "pull_request",
  Push: "push",
  Issues: "issues",
  Repository: "repository",
  Installation: "installation",
} as const;

export type GitHubEvent =
  (typeof GitHubEvents)[keyof typeof GitHubEvents];