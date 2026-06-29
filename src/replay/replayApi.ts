import type { GameImportSource } from '../common/gameSource';

export type MarkReplayHalfMoveSeenResultDto = {
  /** True when this half move was already recorded before this call. */
  seenBefore: boolean;
};

export type ReplayViewsCheckApiDto = {
  viewedGameIds: string[];
};

export type ReplayGameSummaryApiDto = {
  gameId: string;
  white: string;
  black: string;
  whiteElo: number;
  blackElo: number;
  result: string;
  /** First 10 full moves as SAN plies. */
  openingSans: string[];
  eco?: string;
  opening?: string;
  timeControl?: string;
  timeClass?: string;
  date?: string;
  source: GameImportSource;
  viewedAt?: string;
  /** False when a free-tier user cannot reopen this replay from history. */
  replayAccessible?: boolean;
};

export type ReplayHistoryApiDto = {
  games: ReplayGameSummaryApiDto[];
  limit: number;
  offset: number;
  total?: number;
  hasMore?: boolean;
  sources?: GameImportSource[];
  /** Present for free-tier users when history extends beyond the reopen limit. */
  replayHistoryLimit?: number;
  lockedHistoryCount?: number;
};

export type ReplayTopUnviewedApiDto = {
  games: ReplayGameSummaryApiDto[];
  minElo: number;
  maxElo: number;
  limit: number;
  offset: number;
  total?: number;
  hasMore?: boolean;
  sources?: GameImportSource[];
  sort: 'top' | 'any';
};
