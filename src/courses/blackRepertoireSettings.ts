import {
  activeBlackCollectionCourseSlugs,
  BLACK_REPERTOIRE_FORKS,
  isValidBlackForkSelection,
} from './blackRepertoireCatalog';

export type BlackRepertoireForks = Record<string, string>;

export function normalizeBlackRepertoireForks(
  value: unknown,
): BlackRepertoireForks | undefined {
  if (!value || typeof value !== 'object') return undefined;
  const normalized: BlackRepertoireForks = {};
  for (const key of Object.keys(value as Record<string, unknown>)) {
    const entry = (value as Record<string, unknown>)[key];
    if (typeof entry === 'string' && entry.length > 0) {
      normalized[key] = entry;
    }
  }
  if (Object.keys(normalized).length === 0) return undefined;
  return normalized;
}

export function validateBlackRepertoireForks(
  forks: BlackRepertoireForks,
): BlackRepertoireForks {
  const normalized: BlackRepertoireForks = {};
  for (const forkId of Object.keys(forks)) {
    const selection = forks[forkId];
    if (selection === undefined) continue;
    if (!isValidBlackForkSelection(forkId, selection)) {
      throw new Error(`Invalid black repertoire selection for fork ${forkId}`);
    }
    normalized[forkId] = selection;
  }
  for (const fork of BLACK_REPERTOIRE_FORKS) {
    if (!fork.requiresFork) continue;
    if (!(fork.id in normalized)) continue;
    const required = forks[fork.requiresFork.id];
    if (required !== fork.requiresFork.settingsValue) {
      delete normalized[fork.id];
    }
  }
  return normalized;
}

export function filterCoursesByBlackCollection<T extends { slug: string }>(
  courses: readonly T[],
  collection: 'd4-d5',
  forks: BlackRepertoireForks | undefined,
): T[] {
  const allowed = new Set(activeBlackCollectionCourseSlugs(collection, forks));
  return courses.filter((course) => allowed.has(course.slug));
}
