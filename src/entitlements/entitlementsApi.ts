export type FreeTierLimits = {
  puzzlesPerDay: number | null;
  srsReviewsPerDay: number | null;
  replayNewGameCooldownDays: number;
  replayHistoryLimit: number;
  gameAnalysesPerDay: number;
};

export type FreeTierUsage = {
  puzzlesToday: number;
  srsReviewsToday: number;
  gameAnalysesToday: number;
  replayNewGameAvailableAt?: string;
};

export type AnalysisUsage = {
  limit: number;
  usedToday: number;
};

export type EntitlementsSummary = {
  hasFullAccess: boolean;
  isLifetimeMember: boolean;
  isTrial: boolean;
  trialEndsAt?: string;
  freeTier?: {
    limits: FreeTierLimits;
    usage: FreeTierUsage;
  };
  analysisUsage?: AnalysisUsage;
};
