/** Prefix for per-user mistake course parts (mistakes-1, mistakes-2, …). */
export const MISTAKE_COURSE_SLUG_PREFIX = 'mistakes-';

/** Numbered mistake course slugs only (mistakes-1, not mistakes-anonymous-seo-test). */
export const MISTAKE_COURSE_SLUG_RE = /^mistakes-(\d+)$/;

export function isMistakeCourseSlug(slug: string): boolean {
  return slug.startsWith(MISTAKE_COURSE_SLUG_PREFIX);
}

export function mistakeCourseSlug(partIndex: number): string {
  return `${MISTAKE_COURSE_SLUG_PREFIX}${partIndex}`;
}

export function parseMistakeCoursePartIndex(slug: string): number | null {
  const match = MISTAKE_COURSE_SLUG_RE.exec(slug);
  if (!match) {
    return null;
  }
  return Number.parseInt(match[1], 10);
}
