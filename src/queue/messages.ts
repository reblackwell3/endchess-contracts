export type ImportPlatform = 'chesscom' | 'lichess';

export type SetupImportMessage = {
  otherPlatform: ImportPlatform;
  otherUsername: string;
  providerId: string;
};

export type ImportGamesMessage = {
  otherPlatform: ImportPlatform;
  providerId: string;
};

export type AnalyzePgnMessage = {
  gameId: string;
  providerId: string;
  pgn: string;
  color: 'w' | 'b';
};
