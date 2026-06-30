import type { GameImportSource } from '../common/gameSource';

/** JSON returned to react-chess-explorer / frontend */
export type PositionMoveApiDto = {
  san: string;
  uci: string;
  games: number;
  whiteWins: number;
  draws: number;
  blackWins: number;
  avgElo: number | null;
};

export type PositionApiDto = {
  positionKey: string;
  fen: string;
  totalGames: number;
  moves: PositionMoveApiDto[];
};

/** JSON returned by GET /positions/games/:gameId */
export type ExplorerGameReplayApiDto = {
  gameId: string;
  url: string;
  white: string;
  black: string;
  whiteElo: number;
  blackElo: number;
  result: string;
  date?: string;
  event?: string;
  timeControl?: string;
  timeClass?: string;
  source: GameImportSource;
  movesUci: string[];
  movesSan: string[];
};

export type PositionGameRowApiDto = {
  gameId: string;
  url: string;
  white: string;
  black: string;
  whiteElo: number;
  blackElo: number;
  result: string;
  date?: string;
  event?: string;
  eco?: string;
  opening?: string;
  timeControl?: string;
  timeClass?: string;
  nextSan: string;
  nextUci: string;
  avgElo: number;
  source: GameImportSource;
};

export type PositionGamesApiDto = {
  positionKey: string;
  fen: string;
  uci?: string;
  offset: number;
  hasMore: boolean;
  games: PositionGameRowApiDto[];
};

export type PositionGamesSort = 'top' | 'any';

export type PositionGamesQuery = {
  fen: string;
  minElo: number;
  maxElo: number;
  /** When false, list every indexed occurrence at the position (matches position doc stats). */
  applyEloFilter?: boolean;
  uci?: string;
  limit: number;
  skip?: number;
  topOnly: boolean;
  sources?: GameImportSource[];
  /** Omit games the caller has already viewed (replay top-unviewed). */
  excludeGameIds?: readonly string[];
  /** Omit games with a replay_views row for this provider (indexed lookup). */
  excludeViewedByProviderId?: string | string[];
  /** Restrict to these game ids (e.g. player name search). */
  includeGameIds?: readonly string[];
  /** Case-insensitive substring match on white/black username. */
  player?: string;
  /** `top`: highest avg Elo first. `any`: unsorted sample for fast hub loads. */
  sort?: PositionGamesSort;
};

export type PositionGamesCountQuery = Pick<
  PositionGamesQuery,
  | 'minElo'
  | 'maxElo'
  | 'applyEloFilter'
  | 'uci'
  | 'topOnly'
  | 'sources'
  | 'excludeGameIds'
  | 'excludeViewedByProviderId'
  | 'includeGameIds'
>;

export type PositionMoveStatsQuery = Pick<
  PositionGamesQuery,
  'minElo' | 'maxElo' | 'applyEloFilter' | 'sources'
>;

/** JSON returned by GET /positions/variations */
export type PositionVariationLineApiDto = {
  key: string;
  label: string;
  moves: PositionMoveApiDto[];
  uciPath: string[];
  games: number;
  scorePercent: number | null;
  lastPlayedYear: number | null;
  avgElo: number | null;
};

export type PositionVariationsApiDto = {
  positionKey: string;
  fen: string;
  mode: 'variations' | 'popularity';
  depth: number;
  lineCount: number;
  minElo?: number;
  maxElo?: number;
  lines: PositionVariationLineApiDto[];
};

export type PositionVariationsQuery = {
  fen: string;
  mode: 'variations' | 'popularity';
  depth: number;
  lineCount: number;
  minElo?: number;
  maxElo?: number;
};
