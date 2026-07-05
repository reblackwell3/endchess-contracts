export type WhiteRepertoireCollection = 'e4' | 'd4';

export type WhiteFamilyKind = 'vs-defense' | 'white-system';

export type WhiteRepertoireFamilyDef = {
  slug: string;
  title: string;
  collection: WhiteRepertoireCollection;
  kind: WhiteFamilyKind;
  prefixUci: readonly string[];
  /** Exclusive fork id when kind is white-system. */
  forkId?: string;
};

export type WhiteRepertoireForkOption = {
  slug: string;
  courseSlug: string;
  title: string;
  prefixUci: readonly string[];
  forkMoveUci: string;
  /** Sentinel value stored in settings instead of a course slug (e.g. nf3-main). */
  settingsValue?: string;
};

export type WhiteRepertoireForkDef = {
  id: string;
  collection: WhiteRepertoireCollection;
  branchPrefixUci: readonly string[];
  title: string;
  options: readonly WhiteRepertoireForkOption[];
  /** Fork id that must match a prior selection before this fork applies. */
  requiresFork?: { id: string; settingsValue: string };
};

export const NF3_MAIN_SETTINGS_VALUE = 'nf3-main';

export const WHITE_VS_DEFENSE_FAMILIES: readonly WhiteRepertoireFamilyDef[] = [
  {
    slug: 'vs-caro-kann',
    title: 'vs Caro-Kann',
    collection: 'e4',
    kind: 'vs-defense',
    prefixUci: ['e2e4', 'c7c6'],
  },
  {
    slug: 'vs-french',
    title: 'vs French',
    collection: 'e4',
    kind: 'vs-defense',
    prefixUci: ['e2e4', 'e7e6'],
  },
  {
    slug: 'vs-sicilian',
    title: 'vs Sicilian',
    collection: 'e4',
    kind: 'vs-defense',
    prefixUci: ['e2e4', 'c7c5'],
  },
  {
    slug: 'vs-kings-indian',
    title: "vs King's Indian",
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'g7g6'],
  },
  {
    slug: 'vs-grunfeld',
    title: 'vs Grünfeld',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5'],
  },
  {
    slug: 'vs-nimzo-indian',
    title: 'vs Nimzo-Indian',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4'],
  },
  {
    slug: 'vs-slav',
    title: 'vs Slav',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'c7c6'],
  },
] as const;

export const WHITE_SYSTEM_FAMILIES: readonly WhiteRepertoireFamilyDef[] = [
  {
    slug: 'vienna-game',
    title: 'Vienna Game',
    collection: 'e4',
    kind: 'white-system',
    forkId: 'e4-e5',
    prefixUci: ['e2e4', 'e7e5', 'b1c3'],
  },
  {
    slug: 'kings-gambit',
    title: "King's Gambit",
    collection: 'e4',
    kind: 'white-system',
    forkId: 'e4-e5',
    prefixUci: ['e2e4', 'e7e5', 'f2f4'],
  },
  {
    slug: 'italian-game',
    title: 'Italian Game',
    collection: 'e4',
    kind: 'white-system',
    forkId: 'e4-e5-nc6',
    prefixUci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1c4'],
  },
  {
    slug: 'scotch-game',
    title: 'Scotch Game',
    collection: 'e4',
    kind: 'white-system',
    forkId: 'e4-e5-nc6',
    prefixUci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'd2d4'],
  },
  {
    slug: 'ruy-lopez',
    title: 'Ruy Lopez',
    collection: 'e4',
    kind: 'white-system',
    forkId: 'e4-e5-nc6',
    prefixUci: ['e2e4', 'e7e5', 'g1f3', 'b8c6', 'f1b5'],
  },
  {
    slug: 'london-system',
    title: 'London System',
    collection: 'd4',
    kind: 'white-system',
    forkId: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5', 'g1f3', 'g8f6', 'c1f4'],
  },
  {
    slug: 'colle-system',
    title: 'Colle System',
    collection: 'd4',
    kind: 'white-system',
    forkId: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5', 'e2e3'],
  },
  {
    slug: 'queens-gambit',
    title: "Queen's Gambit",
    collection: 'd4',
    kind: 'white-system',
    forkId: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5', 'c2c4'],
  },
  {
    slug: 'qgd-main',
    title: "Queen's Gambit Declined",
    collection: 'd4',
    kind: 'white-system',
    forkId: 'd4-qgd-catalan',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'b1c3'],
  },
  {
    slug: 'catalan',
    title: 'Catalan',
    collection: 'd4',
    kind: 'white-system',
    forkId: 'd4-qgd-catalan',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'e7e6', 'g2g3'],
  },
] as const;

export function whiteFamilyCourseSlug(
  collection: WhiteRepertoireCollection,
  familySlug: string,
): string {
  return `white-${collection}-${familySlug}`;
}

export function buildWhiteFamilyCourseSlugs(): string[] {
  return [
    ...WHITE_VS_DEFENSE_FAMILIES.map((f) =>
      whiteFamilyCourseSlug(f.collection, f.slug),
    ),
    ...WHITE_SYSTEM_FAMILIES.map((f) =>
      whiteFamilyCourseSlug(f.collection, f.slug),
    ),
  ];
}

function forkOption(
  family: WhiteRepertoireFamilyDef,
  forkMoveUci: string,
  settingsValue?: string,
): WhiteRepertoireForkOption {
  return {
    slug: family.slug,
    courseSlug: whiteFamilyCourseSlug(family.collection, family.slug),
    title: family.title,
    prefixUci: family.prefixUci,
    forkMoveUci,
    settingsValue,
  };
}

export const WHITE_REPERTOIRE_FORKS: readonly WhiteRepertoireForkDef[] = [
  {
    id: 'e4-e5',
    collection: 'e4',
    branchPrefixUci: ['e2e4', 'e7e5'],
    title: 'Choose your response to 1…e5',
    options: [
      {
        slug: 'nf3-main',
        courseSlug: '',
        title: 'Main line',
        prefixUci: ['e2e4', 'e7e5', 'g1f3'],
        forkMoveUci: 'g1f3',
        settingsValue: NF3_MAIN_SETTINGS_VALUE,
      },
      forkOption(
        WHITE_SYSTEM_FAMILIES.find((f) => f.slug === 'vienna-game')!,
        'b1c3',
      ),
      forkOption(
        WHITE_SYSTEM_FAMILIES.find((f) => f.slug === 'kings-gambit')!,
        'f2f4',
      ),
    ],
  },
  {
    id: 'e4-e5-nc6',
    collection: 'e4',
    branchPrefixUci: ['e2e4', 'e7e5', 'g1f3', 'b8c6'],
    title: 'Choose your response to …Nc6',
    requiresFork: { id: 'e4-e5', settingsValue: NF3_MAIN_SETTINGS_VALUE },
    options: [
      forkOption(
        WHITE_SYSTEM_FAMILIES.find((f) => f.slug === 'italian-game')!,
        'f1c4',
      ),
      forkOption(
        WHITE_SYSTEM_FAMILIES.find((f) => f.slug === 'ruy-lopez')!,
        'f1b5',
      ),
      forkOption(
        WHITE_SYSTEM_FAMILIES.find((f) => f.slug === 'scotch-game')!,
        'd2d4',
      ),
    ],
  },
  {
    id: 'd4-d5',
    collection: 'd4',
    branchPrefixUci: ['d2d4', 'd7d5'],
    title: 'Choose your response to 1…d5',
    options: [
      forkOption(
        WHITE_SYSTEM_FAMILIES.find((f) => f.slug === 'london-system')!,
        'g1f3',
      ),
      forkOption(
        WHITE_SYSTEM_FAMILIES.find((f) => f.slug === 'colle-system')!,
        'e2e3',
      ),
      forkOption(
        WHITE_SYSTEM_FAMILIES.find((f) => f.slug === 'queens-gambit')!,
        'c2c4',
      ),
    ],
  },
  {
    id: 'd4-qgd-catalan',
    collection: 'd4',
    branchPrefixUci: ['d2d4', 'd7d5', 'c2c4', 'e7e6'],
    title: 'Choose your response to …e6',
    requiresFork: {
      id: 'd4-d5',
      settingsValue: whiteFamilyCourseSlug('d4', 'queens-gambit'),
    },
    options: [
      forkOption(
        WHITE_SYSTEM_FAMILIES.find((f) => f.slug === 'qgd-main')!,
        'b1c3',
      ),
      forkOption(WHITE_SYSTEM_FAMILIES.find((f) => f.slug === 'catalan')!, 'g2g3'),
    ],
  },
] as const;

export function forksForCollection(
  collection: WhiteRepertoireCollection,
): readonly WhiteRepertoireForkDef[] {
  return WHITE_REPERTOIRE_FORKS.filter((fork) => fork.collection === collection);
}

export function getForkById(forkId: string): WhiteRepertoireForkDef | undefined {
  return WHITE_REPERTOIRE_FORKS.find((fork) => fork.id === forkId);
}

export function isValidForkSelection(
  forkId: string,
  settingsValue: string,
): boolean {
  const fork = getForkById(forkId);
  if (!fork) return false;
  return fork.options.some(
    (option) =>
      (option.settingsValue ?? option.courseSlug) === settingsValue,
  );
}

export function forkApplies(
  fork: WhiteRepertoireForkDef,
  forks: Record<string, string> | undefined,
): boolean {
  if (!fork.requiresFork) return true;
  return forks?.[fork.requiresFork.id] === fork.requiresFork.settingsValue;
}

export function unresolvedForksForCollection(
  collection: WhiteRepertoireCollection,
  forks: Record<string, string> | undefined,
): WhiteRepertoireForkDef[] {
  return forksForCollection(collection).filter((fork) => {
    if (!forkApplies(fork, forks)) return false;
    const value = forks?.[fork.id];
    if (!value) return true;
    return !isValidForkSelection(fork.id, value);
  });
}

export function activeWhiteSystemCourseSlugs(
  collection: WhiteRepertoireCollection,
  forks: Record<string, string> | undefined,
): string[] {
  const slugs: string[] = [];
  for (const fork of forksForCollection(collection)) {
    if (!forkApplies(fork, forks)) continue;
    const value = forks?.[fork.id];
    if (!value || !isValidForkSelection(fork.id, value)) continue;
    if (value === NF3_MAIN_SETTINGS_VALUE) continue;
    slugs.push(value);
  }
  return slugs;
}

export function autoIncludedCourseSlugs(
  collection: WhiteRepertoireCollection,
): string[] {
  return WHITE_VS_DEFENSE_FAMILIES.filter((f) => f.collection === collection).map(
    (f) => whiteFamilyCourseSlug(f.collection, f.slug),
  );
}

export function activeCollectionCourseSlugs(
  collection: WhiteRepertoireCollection,
  forks: Record<string, string> | undefined,
): string[] {
  return [
    ...autoIncludedCourseSlugs(collection),
    ...activeWhiteSystemCourseSlugs(collection, forks),
  ];
}
