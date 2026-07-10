import type { ImportPlatform } from '../queue/messages';

export type ImportJobStatus = 'pending' | 'failed' | 'complete';

export type ImportJobError = 'user_not_found' | 'unknown' | 'timed_out';

export type ImportJobDto = {
  status: ImportJobStatus;
  platform?: ImportPlatform;
  username?: string;
  error?: ImportJobError;
  /** ISO timestamp of the last import job update (for stale-job detection). */
  updatedAt?: string;
};
