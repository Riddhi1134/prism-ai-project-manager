export interface ReviewFile {
  filename: string;
  status: string;
  additions: number;
  deletions: number;
  changes: number;
  patch?: string;
}

export interface ReviewContext {
  repository: string;
  pullNumber: number;
  files: ReviewFile[];
}