import type { GameImportSource } from '../common/gameSource';
import type { ReplayGameSummaryApiDto } from '../replay/replayApi';

export type PlayerSearchRow = {
  username: string;
  title?: string;
  source: GameImportSource;
  gameCount: number;
  avgRating: number;
  maxRating: number;
};

export type OpeningSearchRow = {
  opening: string;
  eco?: string;
  source: GameImportSource;
  gameCount: number;
  maxRating: number;
  familyId?: number;
};

export type OpeningVariationRow = {
  opening: string;
  eco?: string;
  gameCount: number;
  maxRating: number;
  lineId?: number;
  /** Full variation name from the lichess openings reference table. */
  lichessOpening?: string;
  /** Lichess opening movetext for this variation line. */
  pgn?: string;
};

export type PlayerOpeningRow = {
  opening: string;
  eco?: string;
  count: number;
  percent: number;
};

export type MyGamesApiDto = {
  games: MyGameSummaryApiDto[];
  limit: number;
  offset: number;
  total?: number;
  hasMore?: boolean;
};

export type GameAnalysisStatus = 'pending' | 'ready' | 'none' | 'scheduled';

export type MyGameSummaryApiDto = ReplayGameSummaryApiDto & {
  analysisStatus: GameAnalysisStatus;
};

export type MistakePlyDto = {
  plyIndex: number;
  fen: string;
  playedUci: string;
  playedSan: string;
  diff?: number;
  setupEvalCp?: number;
  quality?: string;
  bestUci?: string;
  bestSan?: string;
  refutationUci?: string;
  refutationSan?: string;
};

export type MyGameReplayPayload = {
  gameId: string;
  white: string;
  black: string;
  whiteElo: number;
  blackElo: number;
  result: string;
  date?: string;
  timeControl?: string;
  timeClass?: string;
  pgn: string;
  movesUci: string[];
  movesSan: string[];
};

export type MyGameDetailApiDto = {
  game: MyGameReplayPayload;
  source: GameImportSource;
  analysisStatus: GameAnalysisStatus;
  mistakes: MistakePlyDto[];
  userColor: 'w' | 'b' | null;
};

export type PlayerSearchApiDto = {
  players: PlayerSearchRow[];
};

export type PlayerGamesApiDto = {
  username: string;
  source: GameImportSource;
  games: ReplayGameSummaryApiDto[];
  offset: number;
  hasMore?: boolean;
};

export type OpeningSearchApiDto = {
  openings: OpeningSearchRow[];
};

export type OpeningVariationsApiDto = {
  opening: string;
  familyId?: number;
  source: GameImportSource;
  variations: OpeningVariationRow[];
};

export type OpeningGamesApiDto = {
  opening: string;
  eco?: string;
  familyId?: number;
  lineId?: number;
  source: GameImportSource;
  games: ReplayGameSummaryApiDto[];
  offset: number;
  hasMore?: boolean;
};

export type PlayerOpeningsApiDto = {
  username: string;
  source: GameImportSource;
  totalGames: number;
  openings: PlayerOpeningRow[];
};
