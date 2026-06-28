import type { ImportPlatform } from '../queue/messages';

export type ImportJobStatus = 'pending' | 'failed' | 'complete';

export type ImportJobError = 'user_not_found' | 'unknown';

export type ImportJobDto = {
  status: ImportJobStatus;
  platform?: ImportPlatform;
  username?: string;
  error?: ImportJobError;
};
