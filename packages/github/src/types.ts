export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  default_branch: string;

  owner: {
    login: string;
  };
}
export interface GitHubUser {
  login: string;
  id: number;
}

export interface GitHubPullRequest {
  number: number;
  title: string;
  body: string | null;

  head: {
    sha: string;
    ref: string;
  };

  base: {
    sha: string;
    ref: string;
  };
}

export interface PullRequestEventPayload {
  action: string;

  installation: GitHubInstallation;

  repository: GitHubRepository;

  sender: GitHubUser;

  pull_request: GitHubPullRequest;
}

export interface GitHubInstallation {
  id: number;
}