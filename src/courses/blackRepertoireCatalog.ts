/**
 * Curated Black opening repertoire: browse families + leaf courses.
 * Multi-course families are click-into hubs; leaf families open one course.
 */

export type BlackBrowseFamilySlug =
  | 'sicilian'
  | 'd4-d5'
  | 'french'
  | 'indian'
  | 'e4-e5'
  | 'caro-kann'
  | 'petrov';

export type BlackRepertoireCourseDef = {
  slug: string;
  title: string;
  /** Opening family label stamped on lessons / explorer grouping. */
  openingFamily: string;
  prefixUci: readonly string[];
  browseFamilySlug: BlackBrowseFamilySlug;
  /**
   * When set, walk from prefixUci then drop lines that match any of these
   * longer prefixes (used for catch-all "other" courses).
   */
  excludePrefixesUci?: readonly (readonly string[])[];
};

export type BlackBrowseFamilyDef = {
  slug: BlackBrowseFamilySlug;
  title: string;
  /** Catalog order on Opening → Black. */
  order: number;
  courseSlugs: readonly string[];
};

export function blackFamilyCourseSlug(
  browseFamilySlug: BlackBrowseFamilySlug,
  courseSlug: string,
): string {
  return `black-${browseFamilySlug}-${courseSlug}`;
}

/** Leaf courses published by the course builder. */
export const BLACK_REPERTOIRE_COURSES: readonly BlackRepertoireCourseDef[] = [
  // --- Sicilian ---
  {
    slug: blackFamilyCourseSlug('sicilian', 'najdorf'),
    title: 'Najdorf',
    openingFamily: 'Sicilian Defense',
    browseFamilySlug: 'sicilian',
    prefixUci: [
      'e2e4',
      'c7c5',
      'g1f3',
      'd7d6',
      'd2d4',
      'c5d4',
      'f3d4',
      'g8f6',
      'b1c3',
      'a7a6',
    ],
  },
  {
    slug: blackFamilyCourseSlug('sicilian', 'dragon'),
    title: 'Dragon',
    openingFamily: 'Sicilian Defense',
    browseFamilySlug: 'sicilian',
    prefixUci: [
      'e2e4',
      'c7c5',
      'g1f3',
      'd7d6',
      'd2d4',
      'c5d4',
      'f3d4',
      'g8f6',
      'b1c3',
      'g7g6',
    ],
  },
  {
    slug: blackFamilyCourseSlug('sicilian', 'classical'),
    title: 'Classical',
    openingFamily: 'Sicilian Defense',
    browseFamilySlug: 'sicilian',
    prefixUci: [
      'e2e4',
      'c7c5',
      'g1f3',
      'd7d6',
      'd2d4',
      'c5d4',
      'f3d4',
      'g8f6',
      'b1c3',
      'b8c6',
    ],
  },
  {
    slug: blackFamilyCourseSlug('sicilian', 'scheveningen'),
    title: 'Scheveningen',
    openingFamily: 'Sicilian Defense',
    browseFamilySlug: 'sicilian',
    prefixUci: [
      'e2e4',
      'c7c5',
      'g1f3',
      'd7d6',
      'd2d4',
      'c5d4',
      'f3d4',
      'g8f6',
      'b1c3',
      'e7e6',
    ],
  },
  {
    slug: blackFamilyCourseSlug('sicilian', 'sveshnikov'),
    title: 'Sveshnikov',
    openingFamily: 'Sicilian Defense',
    browseFamilySlug: 'sicilian',
    prefixUci: [
      'e2e4',
      'c7c5',
      'g1f3',
      'b8c6',
      'd2d4',
      'c5d4',
      'f3d4',
      'g8f6',
      'b1c3',
      'e7e5',
    ],
  },
  {
    slug: blackFamilyCourseSlug('sicilian', 'taimanov'),
    title: 'Taimanov',
    openingFamily: 'Sicilian Defense',
    browseFamilySlug: 'sicilian',
    prefixUci: [
      'e2e4',
      'c7c5',
      'g1f3',
      'e7e6',
      'd2d4',
      'c5d4',
      'f3d4',
      'b8c6',
    ],
  },
  {
    slug: blackFamilyCourseSlug('sicilian', 'kan'),
    title: 'Kan',
    openingFamily: 'Sicilian Defense',
    browseFamilySlug: 'sicilian',
    prefixUci: [
      'e2e4',
      'c7c5',
      'g1f3',
      'e7e6',
      'd2d4',
      'c5d4',
      'f3d4',
      'a7a6',
    ],
  },

  // --- 1.d4 d5 ---
  {
    slug: blackFamilyCourseSlug('d4-d5', 'vs-london'),
    title: 'vs London',
    openingFamily: "Queen's Pawn Game",
    browseFamilySlug: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5', 'g1f3', 'g8f6', 'c1f4'],
  },
  {
    slug: blackFamilyCourseSlug('d4-d5', 'vs-colle'),
    title: 'vs Colle',
    openingFamily: "Queen's Pawn Game",
    browseFamilySlug: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5', 'e2e3'],
  },
  {
    slug: blackFamilyCourseSlug('d4-d5', 'qgd'),
    title: "Queen's Gambit Declined",
    openingFamily: "Queen's Gambit Declined",
    browseFamilySlug: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'e7e6'],
  },
  {
    slug: blackFamilyCourseSlug('d4-d5', 'slav'),
    title: 'Slav',
    openingFamily: 'Slav Defense',
    browseFamilySlug: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'c7c6'],
    excludePrefixesUci: [
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'e7e6'],
    ],
  },
  {
    slug: blackFamilyCourseSlug('d4-d5', 'qga'),
    title: "Queen's Gambit Accepted",
    openingFamily: "Queen's Gambit Accepted",
    browseFamilySlug: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'd5c4'],
  },
  {
    slug: blackFamilyCourseSlug('d4-d5', 'other'),
    title: '1.d4 d5 — Other',
    openingFamily: "Queen's Pawn Game",
    browseFamilySlug: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5'],
    excludePrefixesUci: [
      ['d2d4', 'd7d5', 'c2c4'],
      ['d2d4', 'd7d5', 'g1f3', 'g8f6', 'c1f4'],
      ['d2d4', 'd7d5', 'e2e3'],
    ],
  },

  // --- French ---
  {
    slug: blackFamilyCourseSlug('french', 'vs-advance'),
    title: 'vs Advance',
    openingFamily: 'French Defense',
    browseFamilySlug: 'french',
    prefixUci: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'e4e5', 'c7c5'],
  },
  {
    slug: blackFamilyCourseSlug('french', 'vs-tarrasch'),
    title: 'vs Tarrasch',
    openingFamily: 'French Defense',
    browseFamilySlug: 'french',
    prefixUci: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1d2'],
  },
  {
    slug: blackFamilyCourseSlug('french', 'vs-exchange'),
    title: 'vs Exchange',
    openingFamily: 'French Defense',
    browseFamilySlug: 'french',
    prefixUci: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'e4d5', 'e6d5'],
  },
  {
    slug: blackFamilyCourseSlug('french', 'winawer'),
    title: 'Winawer',
    openingFamily: 'French Defense',
    browseFamilySlug: 'french',
    prefixUci: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'f8b4'],
  },
  {
    slug: blackFamilyCourseSlug('french', 'classical'),
    title: 'Classical',
    openingFamily: 'French Defense',
    browseFamilySlug: 'french',
    prefixUci: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'g8f6'],
  },
  {
    slug: blackFamilyCourseSlug('french', 'rubinstein'),
    title: 'Rubinstein',
    openingFamily: 'French Defense',
    browseFamilySlug: 'french',
    prefixUci: ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'd5e4'],
  },

  // --- Indian ---
  {
    slug: blackFamilyCourseSlug('indian', 'nimzo'),
    title: 'Nimzo-Indian',
    openingFamily: 'Nimzo-Indian Defense',
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4'],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'queens-indian'),
    title: "Queen's Indian",
    openingFamily: "Queen's Indian Defense",
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'b7b6'],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'bogo'),
    title: 'Bogo-Indian',
    openingFamily: 'Bogo-Indian Defense',
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'f8b4'],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'benoni'),
    title: 'Benoni',
    openingFamily: 'Benoni Defense',
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'c7c5'],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'kings-indian'),
    title: "King's Indian",
    openingFamily: "King's Indian Defense",
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'g7g6'],
    excludePrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5'],
    ],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'grunfeld'),
    title: 'Grünfeld',
    openingFamily: 'Grünfeld Defense',
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5'],
  },

  // --- Leaf families ---
  {
    slug: blackFamilyCourseSlug('e4-e5', 'main'),
    title: '1.e4 e5',
    openingFamily: "King's Pawn Game",
    browseFamilySlug: 'e4-e5',
    prefixUci: ['e2e4', 'e7e5'],
  },
  {
    slug: blackFamilyCourseSlug('caro-kann', 'main'),
    title: 'Caro-Kann',
    openingFamily: 'Caro-Kann Defense',
    browseFamilySlug: 'caro-kann',
    prefixUci: ['e2e4', 'c7c6'],
  },
  {
    slug: blackFamilyCourseSlug('petrov', 'main'),
    title: 'Petrov',
    openingFamily: "Petrov's Defense",
    browseFamilySlug: 'petrov',
    prefixUci: ['e2e4', 'e7e5', 'g1f3', 'g8f6'],
  },
] as const;

export const BLACK_BROWSE_FAMILIES: readonly BlackBrowseFamilyDef[] = [
  {
    slug: 'sicilian',
    title: 'Sicilian Defense',
    order: 10,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'sicilian').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'e4-e5',
    title: '1.e4 e5',
    order: 20,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'e4-e5').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'french',
    title: 'French Defense',
    order: 30,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'french').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'caro-kann',
    title: 'Caro-Kann',
    order: 40,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'caro-kann').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'petrov',
    title: 'Petrov',
    order: 50,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'petrov').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'd4-d5',
    title: '1.d4 d5',
    order: 60,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'd4-d5').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'indian',
    title: 'Indian Defenses',
    order: 70,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'indian').map(
      (c) => c.slug,
    ),
  },
] as const;

export function getBlackBrowseFamily(
  slug: string,
): BlackBrowseFamilyDef | undefined {
  return BLACK_BROWSE_FAMILIES.find((family) => family.slug === slug);
}

export function getBlackRepertoireCourse(
  slug: string,
): BlackRepertoireCourseDef | undefined {
  return BLACK_REPERTOIRE_COURSES.find((course) => course.slug === slug);
}

export function isBlackBrowseFamilySlug(
  value: string,
): value is BlackBrowseFamilySlug {
  return BLACK_BROWSE_FAMILIES.some((family) => family.slug === value);
}

export function buildBlackFamilyCourseSlugs(): string[] {
  return BLACK_REPERTOIRE_COURSES.map((course) => course.slug);
}

export function isMultiCourseBlackFamily(family: BlackBrowseFamilyDef): boolean {
  return family.courseSlugs.length > 1;
}

/** Families that use a White-style repertoire fork picker instead of listing every leaf. */
export function isBlackForkCollectionFamily(
  slug: BlackBrowseFamilySlug,
): boolean {
  return slug === 'd4-d5';
}

export function leafCourseSlugForFamily(
  family: BlackBrowseFamilyDef,
): string | undefined {
  if (family.courseSlugs.length !== 1) return undefined;
  return family.courseSlugs[0];
}

export type BlackRepertoireForkOption = {
  slug: string;
  courseSlug: string;
  title: string;
  prefixUci: readonly string[];
  forkMoveUci: string;
  settingsValue?: string;
};

export type BlackRepertoireForkDef = {
  id: string;
  collection: 'd4-d5';
  branchPrefixUci: readonly string[];
  title: string;
  options: readonly BlackRepertoireForkOption[];
  requiresFork?: { id: string; settingsValue: string };
};

const D4_D5_ALWAYS_ON_SLUGS = [
  blackFamilyCourseSlug('d4-d5', 'vs-london'),
  blackFamilyCourseSlug('d4-d5', 'vs-colle'),
  blackFamilyCourseSlug('d4-d5', 'other'),
] as const;

function blackForkOption(
  courseKey: 'qgd' | 'slav' | 'qga',
  forkMoveUci: string,
): BlackRepertoireForkOption {
  const course = BLACK_REPERTOIRE_COURSES.find(
    (entry) => entry.slug === blackFamilyCourseSlug('d4-d5', courseKey),
  );
  if (!course) {
    throw new Error(`Missing black d4-d5 course: ${courseKey}`);
  }
  return {
    slug: courseKey,
    courseSlug: course.slug,
    title: course.title,
    prefixUci: course.prefixUci,
    forkMoveUci,
  };
}

export const BLACK_REPERTOIRE_FORKS: readonly BlackRepertoireForkDef[] = [
  {
    id: 'black-d4-d5-c4',
    collection: 'd4-d5',
    branchPrefixUci: ['d2d4', 'd7d5', 'c2c4'],
    title: 'Choose your reply to 2.c4',
    options: [
      blackForkOption('qgd', 'e7e6'),
      blackForkOption('slav', 'c7c6'),
      blackForkOption('qga', 'd5c4'),
    ],
  },
] as const;

export function blackForksForCollection(
  collection: 'd4-d5',
): readonly BlackRepertoireForkDef[] {
  return BLACK_REPERTOIRE_FORKS.filter((fork) => fork.collection === collection);
}

export function getBlackForkById(
  forkId: string,
): BlackRepertoireForkDef | undefined {
  return BLACK_REPERTOIRE_FORKS.find((fork) => fork.id === forkId);
}

export function isValidBlackForkSelection(
  forkId: string,
  settingsValue: string,
): boolean {
  const fork = getBlackForkById(forkId);
  if (!fork) return false;
  return fork.options.some(
    (option) => (option.settingsValue ?? option.courseSlug) === settingsValue,
  );
}

export function blackForkApplies(
  fork: BlackRepertoireForkDef,
  forks: Record<string, string> | undefined,
): boolean {
  if (!fork.requiresFork) return true;
  return forks?.[fork.requiresFork.id] === fork.requiresFork.settingsValue;
}

export function unresolvedBlackForksForCollection(
  collection: 'd4-d5',
  forks: Record<string, string> | undefined,
): BlackRepertoireForkDef[] {
  return blackForksForCollection(collection).filter((fork) => {
    if (!blackForkApplies(fork, forks)) return false;
    const value = forks?.[fork.id];
    if (!value) return true;
    return !isValidBlackForkSelection(fork.id, value);
  });
}

export function autoIncludedBlackCourseSlugs(collection: 'd4-d5'): string[] {
  if (collection !== 'd4-d5') return [];
  return [...D4_D5_ALWAYS_ON_SLUGS];
}

export function activeBlackSystemCourseSlugs(
  collection: 'd4-d5',
  forks: Record<string, string> | undefined,
): string[] {
  const slugs: string[] = [];
  for (const fork of blackForksForCollection(collection)) {
    if (!blackForkApplies(fork, forks)) continue;
    const value = forks?.[fork.id];
    if (!value || !isValidBlackForkSelection(fork.id, value)) continue;
    slugs.push(value);
  }
  return slugs;
}

export function activeBlackCollectionCourseSlugs(
  collection: 'd4-d5',
  forks: Record<string, string> | undefined,
): string[] {
  return [
    ...autoIncludedBlackCourseSlugs(collection),
    ...activeBlackSystemCourseSlugs(collection, forks),
  ];
}

function startsWithPrefix(
  uciPath: readonly string[],
  prefix: readonly string[],
): boolean {
  if (prefix.length > uciPath.length) return false;
  for (let i = 0; i < prefix.length; i += 1) {
    if (uciPath[i] !== prefix[i]) return false;
  }
  return true;
}

/** True when a repertoire line should be dropped from an "other" course. */
export function lineMatchesExcludedPrefix(
  uciPath: readonly string[],
  excludePrefixesUci: readonly (readonly string[])[] | undefined,
): boolean {
  if (!excludePrefixesUci?.length) return false;
  return excludePrefixesUci.some((prefix) => startsWithPrefix(uciPath, prefix));
}
