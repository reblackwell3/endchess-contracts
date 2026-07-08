import type { OpeningLineMinN, UserCourseSettingsDto } from './coursesApi';

/** Opening repertoire: hide lines with fewer than this many elite-DB games. */
export const DEFAULT_OPENING_LINE_MIN_N: OpeningLineMinN = 0;

/** Opening repertoire: default train / distinct-line depth (full moves). */
export const DEFAULT_OPENING_LINE_MAX_MOVE = 15;

export const MIN_OPENING_LINE_MAX_MOVE = 1;
export const MAX_OPENING_LINE_MAX_MOVE = 15;

export const OPENING_LINE_MIN_N_VALUES = [0, 2, 5, 10, 25, 50] as const;

export const DEFAULT_USER_COURSE_SETTINGS: UserCourseSettingsDto = {
  openingLineMinN: DEFAULT_OPENING_LINE_MIN_N,
  openingLineMaxMove: DEFAULT_OPENING_LINE_MAX_MOVE,
};

const MIN_N_SET = new Set<number>(OPENING_LINE_MIN_N_VALUES);

export function normalizeOpeningLineMinN(value: unknown): OpeningLineMinN {
  const numeric =
    typeof value === 'number'
      ? value
      : typeof value === 'string'
        ? Number.parseInt(value, 10)
        : NaN;
  if (MIN_N_SET.has(numeric)) {
    return numeric as OpeningLineMinN;
  }
  return DEFAULT_OPENING_LINE_MIN_N;
}

export function normalizeOpeningLineMaxMove(value: unknown): number {
  const numeric =
    typeof value === 'number'
      ? value
      : typeof value === 'string'
        ? Number.parseInt(value, 10)
        : NaN;
  if (
    Number.isFinite(numeric) &&
    numeric >= MIN_OPENING_LINE_MAX_MOVE &&
    numeric <= MAX_OPENING_LINE_MAX_MOVE
  ) {
    return Math.trunc(numeric);
  }
  return DEFAULT_OPENING_LINE_MAX_MOVE;
}

export function normalizeUserCourseSettings(data?: {
  openingLineMinN?: unknown;
  openingLineMaxMove?: unknown;
} | null): UserCourseSettingsDto {
  return {
    openingLineMinN: normalizeOpeningLineMinN(data?.openingLineMinN),
    openingLineMaxMove: normalizeOpeningLineMaxMove(data?.openingLineMaxMove),
  };
}
