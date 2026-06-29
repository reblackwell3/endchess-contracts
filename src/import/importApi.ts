import type { ImportPlatform } from '../queue/messages';
import type { ImportJobDto } from './importJobStatus';

export type ImportRequestBody = {
  other_platform: ImportPlatform;
  other_username: string;
};

export type ImportStatusDto = {
  hasImported: boolean;
  importedGameCount: number;
  importGameLimit: number;
  atImportCap: boolean;
  importJob: ImportJobDto | null;
};
