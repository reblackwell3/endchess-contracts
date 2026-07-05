import {
  activeCollectionCourseSlugs,
  isValidForkSelection,
  WHITE_REPERTOIRE_FORKS,
  type WhiteRepertoireCollection,
} from './whiteRepertoireCatalog';

export type WhiteRepertoireForks = Record<string, string>;

export function normalizeWhiteRepertoireForks(
  value: unknown,
): WhiteRepertoireForks | undefined {
  if (!value || typeof value !== 'object') return undefined;
  const normalized: WhiteRepertoireForks = {};
  for (const key of Object.keys(value as Record<string, unknown>)) {
    const entry = (value as Record<string, unknown>)[key];
    if (typeof entry === 'string' && entry.length > 0) {
      normalized[key] = entry;
    }
  }
  if (Object.keys(normalized).length === 0) return undefined;
  return normalized;
}

export function validateWhiteRepertoireForks(
  forks: WhiteRepertoireForks,
): WhiteRepertoireForks {
  const normalized: WhiteRepertoireForks = {};
  for (const forkId of Object.keys(forks)) {
    const selection = forks[forkId];
    if (selection === undefined) continue;
    if (!isValidForkSelection(forkId, selection)) {
      throw new Error(`Invalid white repertoire selection for fork ${forkId}`);
    }
    normalized[forkId] = selection;
  }
  for (const fork of WHITE_REPERTOIRE_FORKS) {
    if (!fork.requiresFork) continue;
    if (!(fork.id in normalized)) continue;
    const required = forks[fork.requiresFork.id];
    if (required !== fork.requiresFork.settingsValue) {
      delete normalized[fork.id];
    }
  }
  return normalized;
}

export function filterCoursesByWhiteCollection<T extends { slug: string }>(
  courses: readonly T[],
  collection: WhiteRepertoireCollection,
  forks: WhiteRepertoireForks | undefined,
): T[] {
  const allowed = new Set(activeCollectionCourseSlugs(collection, forks));
  return courses.filter((course) => allowed.has(course.slug));
}
