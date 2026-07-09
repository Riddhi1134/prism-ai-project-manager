import { createGitHubApp } from "@prism/github";

const app = createGitHubApp(
  "dummy-app-id",
  "dummy-private-key",
);

console.log("GitHub App Created ✅");
console.log(app !== undefined);