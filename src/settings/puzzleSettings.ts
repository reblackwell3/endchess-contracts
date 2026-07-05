export class PuzzleSettings {
  static Difficulty = {
    EASY: 'EASY',
    MEDIUM: 'MEDIUM',
    HARD: 'HARD',
  };

  static FetchType = {
    RANDOM: 'RANDOM',
    // BY_ID: 'BY_ID',
  };

  static SolvedStatus = {
    UNSOLVED: 'UNSOLVED',
    SOLVED: 'SOLVED',
  };
}

export type PuzzleSettingsDto = {
  fetchType?: string;
  difficulties?: string[];
  solvedStatuses?: string[];
  ratingMin?: number;
  ratingMax?: number;
};

export type MoveFeedbackDto = {
  index: number;
  guess?: {
    sourceSquare: string;
    targetSquare: string;
    piece: string;
  };
  hintRequested?: boolean;
  solutionShown?: boolean;
  /** User opened engine analysis before finishing; counts as a failed attempt but not SRS. */
  analysisOpened?: boolean;
  isCorrect?: boolean;
  isFinished?: boolean;
};
