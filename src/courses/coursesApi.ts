import type { TrainSide } from '../srs/srsDeck';

export type CoursePhase = 'opening' | 'middlegame' | 'endgame' | 'mistakes';
export type GamePool = 'repertoire' | 'supplemental' | 'combined';
export type ParentOpening = 'e4' | 'caro-kann' | 'grunfeld';
export type SectionKind = 'line-branch' | 'structure' | 'material';
export type LessonType = 'line' | 'replay' | 'mistake';
/** Opening repertoire line selection strategy at build time. */
export type CourseAlgorithm = 'popularity';

export type CourseFiltersDto = {
  minElo: number;
  maxElo: number;
  sources: string[];
  /** Games in the build pool: master-pool limit for engine courses; explorer corpus size for openings. */
  numGamesUsed: number;
};

/** Build-time metadata stamped when a course version is published. */
export type CourseMetadataDto = {
  generatedAt?: string;
  algorithm?: CourseAlgorithm;
  filters?: CourseFiltersDto;
  builderCommitSha?: string;
};

export type CourseVersionEntryDto = {
  slug: string;
  version: string;
  metadata: CourseMetadataDto;
};

export type CourseVersionsJsonDto = {
  courses: CourseVersionEntryDto[];
};

export type OpeningLineMinN = 0 | 2 | 5 | 10 | 25 | 50;

/** Per-user preferences for one course (keyed by slug). Always normalized on read. */
export type UserCourseSettingsDto = {
  openingLineMinN: OpeningLineMinN;
  openingLineMaxMove: number;
};

export type CourseProgressDto = {
  completedLessonIds: string[];
  completedSectionIds: string[];
  ignoredLessonIds: string[];
  lastLessonId?: string;
  updatedAt?: string;
};

/** Lean progress shape used by course mappers (DB row or merged snapshot). */
export type CourseProgressSnapshot = {
  completedLessonIds: readonly { toString(): string }[];
  completedSectionIds: readonly { toString(): string }[];
  ignoredLessonIds?: readonly { toString(): string }[];
  lastLessonId?: { toString(): string };
  updatedAt?: Date | string;
};

export type LessonPlySeenDto = {
  seenBefore: boolean;
  cardCreated: boolean;
  skipped: boolean;
};

export type LessonMissedPositionResultDto = {
  created: boolean;
  skipped: boolean;
  graded: boolean;
};

export type LessonGradePositionResultDto = {
  graded: boolean;
};

export type CoursePreviewThumbnailDto = {
  pgn: string;
  startFen?: string;
  setupUci?: string;
  /** When set, orients preview boards from this train side. */
  trainSide?: TrainSide;
};

export type LessonListItemDto = {
  lessonId: string;
  order: number;
  title: string;
  type: LessonType;
  trainSide: TrainSide;
  plies: number;
  completed: boolean;
  ignored: boolean;
  startFen?: string;
  date?: string;
  /**
   * Elite-DB game count for this repertoire line (opening popularity).
   * Absent on engine-built / middlegame / endgame / mistake lessons.
   */
  N?: number;
  /** Full line UCI path; used to apply user max-move filters on opening lists. */
  movesUci?: string[];
  /** Animated line snippet for hover preview on course line lists. */
  previewThumbnail?: CoursePreviewThumbnailDto;
};

export type CourseSectionDto = {
  sectionId: string;
  slug: string;
  title: string;
  order: number;
  sectionKind: SectionKind;
  lessonCount: number;
  eco?: string;
  opening?: string;
  lessons: LessonListItemDto[];
  completed: boolean;
};

export type CourseListItemDto = {
  courseId: string;
  slug: string;
  title: string;
  description: string;
  phase: CoursePhase;
  gamePool: GamePool;
  sectionCount: number;
  lessonCount: number;
  avgElo: number;
  version: string;
  confirmDepth: number;
  parentOpening?: ParentOpening;
  trainSide?: TrainSide;
  /** White opening hub grouping for 1.e4 / 1.d4 family courses. */
  repertoireCollection?: 'e4' | 'd4';
  completedLessonCount?: number;
  completedSectionCount?: number;
  lastLessonId?: string;
  lastAccessedAt?: string;
  previewThumbnails?: CoursePreviewThumbnailDto[];
  metadata?: CourseMetadataDto;
};

export type CourseDetailDto = {
  courseId: string;
  slug: string;
  title: string;
  description: string;
  phase: CoursePhase;
  gamePool: GamePool;
  sectionCount: number;
  lessonCount: number;
  avgElo: number;
  version: string;
  scanDepth: number;
  confirmDepth: number;
  parentOpening?: ParentOpening;
  trainSide?: TrainSide;
  repertoireCollection?: 'e4' | 'd4';
  /** Opening line selection strategy used at publish (omitted on engine-built courses). */
  algorithm?: CourseAlgorithm;
  /** Corpus / popularity knobs used when this course version was generated. */
  filters: CourseFiltersDto;
  sections: CourseSectionDto[];
  progress: CourseProgressDto;
  /** Per-user prefs for this course (opening line filters, etc.). */
  courseSettings: UserCourseSettingsDto;
  metadata?: CourseMetadataDto;
};

export type LessonDrillMoveDto = {
  index: number;
  isCorrect: boolean;
};

export type CourseLineMasteryState = {
  masteredSlots: boolean[];
  skipRemaining: number;
  skipInterval?: number;
  slotRepetitionsRemaining?: number[];
  recoveryTrainSlot?: number;
};

export type CourseLineMasteryPhase = 'drill' | 'repetition';

export type CourseLineMasteryRequestDto = {
  trainMode: CourseTrainModeKey;
  perMove: LessonDrillMoveDto[];
  phase?: CourseLineMasteryPhase;
};

export type CourseTrainModeKey = 'w' | 'b' | 'both';

export type LessonDrillResultDto = {
  quizAtIndices: number[];
  cardsCreated: number;
  cardsUpdated: number;
  skipped: boolean;
};

export type LessonDetailDto = {
  lessonId: string;
  courseId: string;
  sectionId: string;
  order: number;
  title: string;
  type: LessonType;
  coursePhase: CoursePhase;
  /** 0-based indices where the trainer is to move. */
  trainIndices: number[];
  /**
   * 0-based indices to quiz during line review. Opening courses include every
   * train index; other phases only include moves with SRS cards (misses).
   */
  quizAtIndices: number[];
  startFen: string;
  setupFen?: string;
  setupUci?: string;
  movesUci: string[];
  movesSan: string[];
  trainSide: TrainSide;
  sourceGameId: string;
  sourceMeta: {
    white: string;
    black: string;
    whiteElo: number;
    blackElo: number;
    eco?: string;
    opening?: string;
    result: string;
    date?: string;
    timeControl?: string;
    timeClass?: string;
  };
  window: { fromPly: number; toPly: number };
  quality: {
    avgCpLoss: number;
    maxCpLoss: number;
    halfMoveCount: number;
    confirmDepth: number;
  };
  materialSignature?: string;
  /**
   * Elite-DB game count for this repertoire line (opening popularity).
   * Absent on engine-built / middlegame / endgame / mistake lessons.
   */
  N?: number;
  setupEvalCp?: number;
  mistakeUci?: string;
  mistakeSan?: string;
  bestUci?: string;
  lineMastery?: Partial<Record<CourseTrainModeKey, CourseLineMasteryState>>;
  /** Ply depth to skip when user has mastered shared opening stems. */
  stemSkipDepth?: number;
};
