import type {
  CardSource,
  CardStatus,
  SrsDeck,
  TrainSide,
} from './srsDeck';

/** Filters for auto-generating a position deck from top explorer games. */
export type GeneratePositionFilters = {
  /** Opening prefix as UCI moves, e.g. ['e2e4','e7e5']. Empty = any opening. */
  startMovesUci?: string[];
  trainSide: TrainSide;
  minElo: number;
  maxElo: number;
  /** Max plies of each game to enroll (used when fromMove/toMove are absent). */
  maxDepth: number;
  /** Number of top games to enroll. */
  count: number;
  /**
   * Optional move window (1-based, full-move numbers, inclusive). When set,
   * each line covers only moves [fromMove, toMove] of the game, e.g.
   * fromMove=1,toMove=12 for the opening or fromMove=40,toMove=50 for an
   * endgame. The line is stored self-contained from the window's start.
   */
  fromMove?: number;
  toMove?: number;
};

/** Filters for auto-generating a puzzle deck. */
export type GeneratePuzzleFilters = {
  ratingMin: number;
  ratingMax: number;
  count: number;
  /** When true, only enroll puzzles the user has already completed. */
  onlyCompleted?: boolean;
};

export type GenerateResultDto = {
  deck: SrsDeck;
  cardsCreated: number;
  cardsExisting: number;
  linesCreated: number;
};

/**
 * A due card returned to the client for review. Position cards now ship the
 * solution so the client puzzle board can validate locally (graded via the
 * same feedback object as puzzles).
 */
export type ReviewCardDto =
  | {
      cardId: string;
      kind: 'position';
      /** Puzzle-ready start FEN (opponent to move when a setup move exists). */
      FEN: string;
      /** Space-separated UCI: optional opponent setup move, then the answer. */
      Moves: string;
      /** Raw card position with the trainer to move. */
      fen: string;
      sideToMove: TrainSide;
      expectedUci?: string;
      expectedSan?: string;
      /** Source-game players, when enrolled from a game replay. */
      white?: string;
      black?: string;
      whiteElo?: number;
      blackElo?: number;
      timeControl?: string;
      timeClass?: string;
      /** PGN UTCDate from the source game (e.g. "2024.01.15"). */
      date?: string;
      result?: string;
      eco?: string;
      opening?: string;
      event?: string;
      openingSans?: string[];
      /** How the position card was enrolled (`auto` replay/lesson miss, `line` course/explorer line, `manual`). */
      source?: CardSource;
      courseSlug?: string;
      courseTitle?: string;
      lessonId?: string;
      lessonTitle?: string;
      interval: number;
      dueAt: string;
    }
  | {
      cardId: string;
      kind: 'puzzle';
      puzzleId: string;
      FEN: string;
      Moves: string;
      Rating?: number;
      Themes?: string;
      OpeningTags?: string;
      reviewStartIndex?: number;
      quizAtIndices?: number[];
      interval: number;
      dueAt: string;
    };

/**
 * Body for grading/recording a review. Accepts the same per-move feedback
 * object as the puzzle deck (index/guess/hintRequested/solutionShown/isCorrect/
 * isFinished); the schedule advances on a terminal event. The direct-grading
 * shortcuts (grade | playedUci | result) are still supported.
 */
export type GradeReviewBody = {
  /** Ply index within the attempt (puzzle-style feedback). */
  index?: number;
  guess?: { sourceSquare: string; targetSquare: string; piece: string };
  hintRequested?: boolean;
  solutionShown?: boolean;
  isFinished?: boolean;
  isCorrect?: boolean;
  /** Explicit SM-2 grade 0-5. */
  grade?: number;
  /** Position decks: the move the user played, compared to the card answer. */
  playedUci?: string;
  /** Puzzle decks: outcome of the attempt. */
  result?: 'solved' | 'hinted' | 'failed';
};

export type GradeReviewResultDto = {
  cardId: string;
  grade: number;
  isCorrect: boolean;
  interval: number;
  easeFactor: number;
  repetitions: number;
  dueAt: string;
  status: CardStatus;
  /** Present for position decks so the client can reveal the answer. */
  expectedUci?: string;
  expectedSan?: string;
};

export type LineListItemDto = {
  lineId: string;
  name: string;
  trainSide: TrainSide;
  plies: number;
  lastScorePct: number | null;
  bestScorePct: number;
  attempts: number;
  lastDrilledAt?: string;
};

export type LineDetailDto = {
  lineId: string;
  name: string;
  startFen: string;
  movesUci: string[];
  movesSan: string[];
  trainSide: TrainSide;
  lastScorePct: number | null;
  bestScorePct: number;
  attempts: number;
};

/** One move result reported by the client when drilling a line. */
export type LineDrillMove = {
  /** Ply index into the line's move arrays. */
  index: number;
  isCorrect: boolean;
};

export type LineDrillResultBody = {
  perMove: LineDrillMove[];
};

export type LineDrillResultDto = {
  lineId: string;
  scorePct: number;
  cardsUpdated: number;
  attempts: number;
  bestScorePct: number;
};

export type ManualLineBody = {
  name?: string;
  trainSide: TrainSide;
  /** Provide either a UCI move list or a SAN move list. */
  movesUci?: string[];
  movesSan?: string[];
  startFen?: string;
  /** Optional move window (1-based, full-move numbers, inclusive). */
  fromMove?: number;
  toMove?: number;
};

export type ManualCardBody = {
  fen: string;
  expectedUci: string;
};

/** Enroll a missed puzzle into the puzzle SRS deck with resume-at-miss metadata. */
export type EnrollMissedBody = {
  puzzleId: string;
  includePuzzle?: boolean;
  reviewStartIndex?: number;
  quizAtIndices?: number[];
};

export type EnrollMissedResultDto = {
  puzzleCardCreated: boolean;
  positionCardCreated: boolean;
};

/**
 * Enroll a single missed position from the explorer's replay trainer. The
 * position is the FEN where the trainer was to move; `setupFen`/`setupUci`
 * describe the opponent ply that led into it so the card can be served
 * puzzle-style.
 */
export type EnrollMissedPositionBody = {
  fen: string;
  expectedUci: string;
  setupFen?: string;
  setupUci?: string;
  /** Source-game players, shown on the review board. */
  white?: string;
  black?: string;
  whiteElo?: number;
  blackElo?: number;
  timeControl?: string;
  timeClass?: string;
  /** PGN UTCDate from the source game (e.g. "2024.01.15"). */
  date?: string;
  result?: string;
  eco?: string;
  opening?: string;
  event?: string;
  openingSans?: string[];
  /** When enrolling from a course lesson, tags the card for manage/delete. */
  courseSlug?: string;
  courseTitle?: string;
  lessonId?: string;
  lessonTitle?: string;
};

export type EnrollMissedPositionResultDto = {
  /** False when no card was written (already existed or setting disabled). */
  created: boolean;
  /** True when the addMissedPositionsToSrs setting is off. */
  skipped: boolean;
};

/** Body for POST /srs/replay-position/grade — grade an existing position card. */
export type GradeReplayPositionBody = {
  fen: string;
  expectedUci: string;
  /** Defaults to true when omitted. */
  isCorrect?: boolean;
};

export type GradeReplayPositionResultDto = {
  /** True when an existing position card was found and graded. */
  graded: boolean;
};

export type SrsStatsDto = {
  deck: SrsDeck;
  due: number;
  new: number;
  learning: number;
  review: number;
  total: number;
  activityByDate: { date: string; count: number }[];
  weakLines?: LineListItemDto[];
};

/** One SRS card row for the manage-inventory UI. */
export type CardManageItemDto = {
  cardId: string;
  kind: SrsDeck;
  label: string;
  source?: CardSource;
  status: CardStatus;
  interval: number;
  dueAt: string;
  /** Puzzle deck only. */
  puzzleId?: string;
  /** Position deck only. */
  expectedSan?: string;
  /** Trainer position (position deck) or puzzle start FEN. */
  fen?: string;
  sideToMove?: TrainSide;
  white?: string;
  black?: string;
  whiteElo?: number;
  blackElo?: number;
  timeControl?: string;
  timeClass?: string;
  /** PGN UTCDate from the source game (e.g. "2024.01.15"). */
  date?: string;
  result?: string;
  eco?: string;
  opening?: string;
  event?: string;
  openingSans?: string[];
  /** FEN before animated preview plies; defaults to `fen` when omitted. */
  previewStartFen?: string;
  /** Space-separated UCI plies for hover/list board previews. */
  previewMovesUci?: string;
  boardOrientation?: 'white' | 'black';
  /** Course that enrolled this card. */
  courseSlug?: string;
  courseTitle?: string;
  /** Course manage view: lesson that produced this position card. */
  lessonId?: string;
  lessonTitle?: string;
  lessonHalfMove?: number;
};

export type CourseManageCardsDto = {
  course: CourseManageItemDto;
  cards: CardManageItemDto[];
};

export type CourseManageItemDto = {
  courseId: string;
  slug: string;
  title: string;
  phase: string;
  cardCount: number;
};

export type ManageSummaryDto = {
  moves: number;
  puzzles: number;
  lines: number;
  courses: CourseManageItemDto[];
};

export type BulkDeleteResultDto = {
  deleted: number;
};
