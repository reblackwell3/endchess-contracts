export type WhiteRepertoireCollection = 'e4' | 'd4';

export type WhiteFamilyKind = 'vs-defense' | 'white-system' | 'vs-other';

export type RepertoireRootUci = 'e2e4' | 'd2d4';

export type WhiteOtherSectionSlug = 'e4-other' | 'd4-other';

export type WhiteRepertoireFamilyDef = {
  slug: string;
  title: string;
  collection: WhiteRepertoireCollection;
  kind: WhiteFamilyKind;
  prefixUci: readonly string[];
  /**
   * Extra tabiyas for the same opening reached by a different early move order
   * (e.g. Grünfeld via 3.Nf3 as well as 3.Nc3).
   */
  additionalPrefixesUci?: readonly (readonly string[])[];
  /** Exclusive fork id when kind is white-system. */
  forkId?: string;
  /**
   * When set, drop popularity lines that match any of these longer prefixes
   * (used for catch-all courses that share a shorter tabiya).
   */
  excludePrefixesUci?: readonly (readonly string[])[];
};

export type WhiteOtherFamilyDef = {
  slug: string;
  title: string;
  collection: WhiteRepertoireCollection;
  kind: 'vs-other';
  repertoireRootUci: RepertoireRootUci;
  otherSectionSlug: WhiteOtherSectionSlug;
  excludePrefixesUci?: readonly (readonly string[])[];
};

export type WhiteRepertoireForkOption = {
  slug: string;
  courseSlug: string;
  title: string;
  prefixUci: readonly string[];
  forkMoveUci: string;
  /** Sentinel value stored in settings instead of a course slug (e.g. nf3-main). */
  settingsValue?: string;
  /** Extra courses activated with this selection (same repertoire choice). */
  alsoActivatesCourseSlugs?: readonly string[];
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
    slug: 'vs-scandinavian',
    title: 'vs Scandinavian',
    collection: 'e4',
    kind: 'vs-defense',
    prefixUci: ['e2e4', 'd7d5'],
  },
  {
    slug: 'vs-pirc',
    title: 'vs Pirc',
    collection: 'e4',
    kind: 'vs-defense',
    prefixUci: ['e2e4', 'd7d6'],
    additionalPrefixesUci: [
      ['e2e4', 'g7g6', 'd2d4', 'f8g7', 'b1c3', 'd7d6'],
    ],
  },
  {
    slug: 'vs-alekhine',
    title: 'vs Alekhine',
    collection: 'e4',
    kind: 'vs-defense',
    prefixUci: ['e2e4', 'g8f6'],
  },
  {
    slug: 'vs-modern',
    title: 'vs Modern',
    collection: 'e4',
    kind: 'vs-defense',
    prefixUci: ['e2e4', 'g7g6'],
    // Pirc via Modern move order (...g6 then ...d6); owned by vs-pirc.
    excludePrefixesUci: [
      ['e2e4', 'g7g6', 'd2d4', 'f8g7', 'b1c3', 'd7d6'],
    ],
  },
  {
    slug: 'vs-nimzowitsch',
    title: 'vs Nimzowitsch Defense',
    collection: 'e4',
    kind: 'vs-defense',
    prefixUci: ['e2e4', 'b8c6'],
  },
  {
    slug: 'vs-owen',
    title: "vs Owen's Defense",
    collection: 'e4',
    kind: 'vs-defense',
    prefixUci: ['e2e4', 'b7b6'],
  },
  {
    slug: 'vs-grunfeld',
    title: 'vs Grünfeld',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5'],
    additionalPrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'g1f3', 'd7d5'],
    ],
  },
  {
    slug: 'vs-budapest',
    title: 'vs Budapest Gambit',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e5'],
  },
  {
    slug: 'vs-old-indian',
    title: 'vs Old Indian',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'd7d6', 'g1f3'],
    // King's Indian via ...d6 then ...g6; owned by vs-kings-indian.
    excludePrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'd7d6', 'g1f3', 'g7g6'],
    ],
  },
  {
    slug: 'vs-kings-indian',
    title: "vs King's Indian",
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'g1f3'],
    additionalPrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'd7d6', 'g1f3', 'g7g6'],
    ],
    // Grünfeld (...d5 after ...g6); owned by vs-grunfeld.
    excludePrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'g1f3', 'd7d5'],
    ],
  },
  {
    slug: 'vs-benoni',
    title: 'vs Benoni',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'c7c5'],
    // Benko Gambit (...b5); owned by vs-benko.
    excludePrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'c7c5', 'd4d5', 'b7b5'],
    ],
  },
  {
    slug: 'vs-benko',
    title: 'vs Benko Gambit',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'c7c5', 'd4d5', 'b7b5'],
  },
  {
    slug: 'vs-slav',
    title: 'vs Slav',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'c7c6'],
    additionalPrefixesUci: [
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'e2e3'],
    ],
    // Semi-Slav continuations (...e6 after ...c6); owned by vs-semi-slav.
    excludePrefixesUci: [
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'e7e6'],
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'b1c3', 'g8f6', 'e2e3', 'e7e6'],
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'e2e3', 'e7e6'],
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'e7e6', 'b1c3', 'g8f6'],
    ],
  },
  {
    slug: 'vs-semi-slav',
    title: 'vs Semi-Slav',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'e7e6'],
    // Alt move orders after Black commits to ...c6 first.
    additionalPrefixesUci: [
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'b1c3', 'g8f6', 'e2e3', 'e7e6'],
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'e2e3', 'e7e6'],
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'e7e6', 'b1c3', 'g8f6'],
    ],
  },
  {
    slug: 'vs-qga',
    title: "vs Queen's Gambit Accepted",
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'd5c4'],
  },
  {
    slug: 'vs-chigorin',
    title: 'vs Chigorin',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'b8c6'],
  },
  {
    slug: 'vs-albin',
    title: 'vs Albin Countergambit',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'e7e5'],
  },
  {
    slug: 'vs-dutch',
    title: 'vs Dutch',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'f7f5'],
  },
  {
    slug: 'vs-old-benoni',
    title: 'vs Old Benoni',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'c7c5'],
  },
  {
    slug: 'vs-modern',
    title: 'vs Modern',
    collection: 'd4',
    kind: 'vs-defense',
    prefixUci: ['d2d4', 'g7g6'],
  },
] as const;

/** Auto-included catch-all for popular early branches not in named families. */
export const WHITE_OTHER_FAMILIES: readonly WhiteOtherFamilyDef[] = [
  {
    slug: 'other',
    title: '1.e4 — Other',
    collection: 'e4',
    kind: 'vs-other',
    repertoireRootUci: 'e2e4',
    otherSectionSlug: 'e4-other',
  },
  {
    slug: 'other',
    title: '1.d4 — Other',
    collection: 'd4',
    kind: 'vs-other',
    repertoireRootUci: 'd2d4',
    otherSectionSlug: 'd4-other',
    // The selected Queen's Gambit repertoire owns every 1.d4 d5 2.c4 reply.
    excludePrefixesUci: [
      ['d2d4', 'd7d5', 'c2c4'],
      ['d2d4', 'e7e6', 'c2c4', 'd7d5'],
      ['d2d4', 'c7c6', 'c2c4', 'd7d5'],
      ['d2d4', 'g8f6', 'c2c4', 'c7c6', 'b1c3', 'd7d5'],
      ['d2d4', 'c7c6', 'c2c4', 'g8f6', 'b1c3', 'd7d5'],
    ],
  },
] as const;

export const WHITE_SYSTEM_FAMILIES: readonly WhiteRepertoireFamilyDef[] = [
  {
    slug: 'nf3-main',
    title: '1.e4 e5 — Main line',
    collection: 'e4',
    kind: 'white-system',
    forkId: 'e4-e5',
    prefixUci: ['e2e4', 'e7e5', 'g1f3'],
    // …Nc6 owned by Italian / Ruy Lopez / Scotch fork.
    excludePrefixesUci: [['e2e4', 'e7e5', 'g1f3', 'b8c6']],
  },
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
    additionalPrefixesUci: [
      ['d2d4', 'd7d5', 'g1f3', 'e7e6', 'c1f4'],
    ],
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
    // Named …d5 replies / nested QGD–Catalan courses own these longer prefixes.
    excludePrefixesUci: [
      ['d2d4', 'd7d5', 'c2c4', 'c7c6'], // Slav / Semi-Slav
      ['d2d4', 'd7d5', 'c2c4', 'd5c4'], // QGA
      ['d2d4', 'd7d5', 'c2c4', 'b8c6'], // Chigorin
      ['d2d4', 'd7d5', 'c2c4', 'e7e5'], // Albin
      ['d2d4', 'd7d5', 'c2c4', 'e7e6'], // QGD / Catalan
    ],
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
  {
    slug: 'vs-nimzo-indian',
    title: 'vs Nimzo-Indian',
    collection: 'd4',
    kind: 'white-system',
    forkId: 'd4-indian-e6',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4'],
    additionalPrefixesUci: [
      ['d2d4', 'e7e6', 'c2c4', 'g8f6', 'b1c3', 'f8b4'],
    ],
  },
  {
    slug: 'vs-bogo-indian',
    title: 'vs Bogo-Indian',
    collection: 'd4',
    kind: 'white-system',
    forkId: 'd4-indian-e6',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'f8b4'],
    additionalPrefixesUci: [
      ['d2d4', 'e7e6', 'c2c4', 'g8f6', 'g1f3', 'f8b4'],
    ],
  },
  {
    slug: 'vs-queens-indian',
    title: "vs Queen's Indian",
    collection: 'd4',
    kind: 'white-system',
    forkId: 'd4-indian-e6',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'b7b6'],
    additionalPrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'b7b6'],
      ['d2d4', 'e7e6', 'c2c4', 'g8f6', 'g1f3', 'b7b6'],
    ],
  },
  {
    slug: 'vs-indian-e6',
    title: 'vs Indian — …e6',
    collection: 'd4',
    kind: 'white-system',
    forkId: 'd4-indian-e6',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6'],
    additionalPrefixesUci: [['d2d4', 'e7e6', 'c2c4', 'g8f6']],
    excludePrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3'], // 3.Nc3 complex; owned by Nc3 repertoire
      ['d2d4', 'e7e6', 'c2c4', 'g8f6', 'b1c3'],
      ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'b7b6'], // Queen's Indian
      ['d2d4', 'e7e6', 'c2c4', 'g8f6', 'g1f3', 'b7b6'],
      ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'f8b4'], // Bogo-Indian
      ['d2d4', 'e7e6', 'c2c4', 'g8f6', 'g1f3', 'f8b4'],
    ],
  },
  {
    slug: 'vs-indian-qgd',
    title: "Queen's Gambit Declined — Indian move order",
    collection: 'd4',
    kind: 'white-system',
    forkId: 'd4-indian-e6',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'd7d5'],
    additionalPrefixesUci: [
      ['d2d4', 'e7e6', 'c2c4', 'g8f6', 'b1c3', 'd7d5'],
    ],
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
    ...WHITE_OTHER_FAMILIES.map((f) =>
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
  alsoActivatesCourseSlugs?: readonly string[],
): WhiteRepertoireForkOption {
  return {
    slug: family.slug,
    courseSlug: whiteFamilyCourseSlug(family.collection, family.slug),
    title: family.title,
    prefixUci: family.prefixUci,
    forkMoveUci,
    settingsValue,
    alsoActivatesCourseSlugs,
  };
}

export const NF3_INDIAN_SETTINGS_VALUE = 'nf3-indian';

export const WHITE_REPERTOIRE_FORKS: readonly WhiteRepertoireForkDef[] = [
  {
    id: 'e4-e5',
    collection: 'e4',
    branchPrefixUci: ['e2e4', 'e7e5'],
    title: 'Choose your response to 1…e5',
    options: [
      {
        slug: 'nf3-main',
        courseSlug: whiteFamilyCourseSlug('e4', 'nf3-main'),
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
  {
    id: 'd4-indian-e6',
    collection: 'd4',
    branchPrefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6'],
    title: 'Choose your response to …e6',
    options: [
      {
        slug: 'vs-nimzo-indian',
        courseSlug: whiteFamilyCourseSlug('d4', 'vs-nimzo-indian'),
        title: '3.Nc3',
        prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3'],
        forkMoveUci: 'b1c3',
        alsoActivatesCourseSlugs: [
          whiteFamilyCourseSlug('d4', 'vs-indian-qgd'),
        ],
      },
      {
        slug: 'vs-indian-e6',
        courseSlug: whiteFamilyCourseSlug('d4', 'vs-indian-e6'),
        title: '3.Nf3',
        prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3'],
        forkMoveUci: 'g1f3',
        settingsValue: NF3_INDIAN_SETTINGS_VALUE,
        alsoActivatesCourseSlugs: [
          whiteFamilyCourseSlug('d4', 'vs-bogo-indian'),
          whiteFamilyCourseSlug('d4', 'vs-queens-indian'),
        ],
      },
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
    const option = fork.options.find(
      (entry) => (entry.settingsValue ?? entry.courseSlug) === value,
    );
    if (!option) continue;
    if (option.courseSlug) {
      slugs.push(option.courseSlug);
    }
    if (option.alsoActivatesCourseSlugs?.length) {
      slugs.push(...option.alsoActivatesCourseSlugs);
    }
  }
  return slugs;
}

export function autoIncludedCourseSlugs(
  collection: WhiteRepertoireCollection,
): string[] {
  return [
    ...WHITE_VS_DEFENSE_FAMILIES.filter((f) => f.collection === collection).map(
      (f) => whiteFamilyCourseSlug(f.collection, f.slug),
    ),
    ...WHITE_OTHER_FAMILIES.filter((f) => f.collection === collection).map((f) =>
      whiteFamilyCourseSlug(f.collection, f.slug),
    ),
  ];
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
