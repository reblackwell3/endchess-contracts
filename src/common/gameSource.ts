export type GameImportSource =
  | 'lichess'
  | 'twic'
  | 'lichess_user'
  | 'chesscom_user'
  | 'unknown';

export const CORPUS_GAME_SOURCES = ['lichess', 'twic'] as const;
export type CorpusGameImportSource = (typeof CORPUS_GAME_SOURCES)[number];

export const USER_GAME_SOURCES = ['lichess_user', 'chesscom_user'] as const;
export type UserGameImportSource = (typeof USER_GAME_SOURCES)[number];

export const GAME_IMPORT_SOURCES: GameImportSource[] = [
  ...CORPUS_GAME_SOURCES,
  ...USER_GAME_SOURCES,
  'unknown',
];
