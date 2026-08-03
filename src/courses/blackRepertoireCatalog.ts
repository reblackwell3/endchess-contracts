/**
 * Curated Black opening repertoire: browse families + leaf courses.
 * Multi-course families are click-into hubs; leaf families open one course.
 */

export type BlackBrowseFamilySlug =
  | 'sicilian'
  | 'd4-d5'
  | 'french'
  | 'indian'
  | 'benoni'
  | 'e4-e5'
  | 'caro-kann'
  | 'petrov'
  | 'dutch'
  | 'modern'
  | 'scandinavian'
  | 'pirc'
  | 'alekhine'
  | 'nimzowitsch'
  | 'owen';

export type BlackRepertoireCourseDef = {
  slug: string;
  title: string;
  /** Opening family label stamped on lessons / explorer grouping. */
  openingFamily: string;
  prefixUci: readonly string[];
  /**
   * Extra tabiyas for the same opening reached by a different early move order.
   */
  additionalPrefixesUci?: readonly (readonly string[])[];
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
  {
    slug: blackFamilyCourseSlug('sicilian', 'other'),
    title: 'Sicilian — Other',
    openingFamily: 'Sicilian Defense',
    browseFamilySlug: 'sicilian',
    prefixUci: ['e2e4', 'c7c5'],
    additionalPrefixesUci: [
      ['e2e4', 'c7c5', 'g1f3', 'b8c6'],
      ['e2e4', 'c7c5', 'g1f3', 'e7e6'],
    ],
    // Open-Sicilian named leaves own these longer prefixes.
    excludePrefixesUci: [
      [
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
      [
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
      [
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
      [
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
      [
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
      [
        'e2e4',
        'c7c5',
        'g1f3',
        'e7e6',
        'd2d4',
        'c5d4',
        'f3d4',
        'b8c6',
      ],
      [
        'e2e4',
        'c7c5',
        'g1f3',
        'e7e6',
        'd2d4',
        'c5d4',
        'f3d4',
        'a7a6',
      ],
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
    // Semi-Slav continuations (...e6 after ...c6); owned by semi-slav course.
    excludePrefixesUci: [
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'e7e6'],
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'b1c3', 'g8f6', 'e2e3', 'e7e6'],
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'e2e3', 'e7e6'],
    ],
  },
  {
    slug: blackFamilyCourseSlug('d4-d5', 'semi-slav'),
    title: 'Semi-Slav',
    openingFamily: 'Semi-Slav Defense',
    browseFamilySlug: 'd4-d5',
    // Canonical Nf3–Nc3–…e6; skip rarer White move orders that transpose.
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3', 'e7e6'],
    // Alt move orders after Black commits to ...c6 first.
    // additionalPrefixesUci: [
    //   ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'b1c3', 'g8f6', 'e2e3', 'e7e6'],
    //   ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'e2e3', 'e7e6'],
    //   ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'b1c3', 'g8f6', 'g1f3', 'e7e6'],
    // ],
  },
  {
    slug: blackFamilyCourseSlug('d4-d5', 'semi-slav-other'),
    title: 'Semi-Slav — Other White setups',
    openingFamily: 'Semi-Slav Defense',
    browseFamilySlug: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'c7c6'],
    // The named Semi-Slav course owns the positions where Black commits to ...e6.
    excludePrefixesUci: [
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'b1c3'],
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'g1f3', 'g8f6', 'e2e3'],
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'b1c3', 'g8f6', 'g1f3'],
      ['d2d4', 'd7d5', 'c2c4', 'c7c6', 'b1c3', 'g8f6', 'e2e3'],
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
    slug: blackFamilyCourseSlug('d4-d5', 'chigorin'),
    title: 'Chigorin',
    openingFamily: 'Chigorin Defense',
    browseFamilySlug: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'b8c6'],
  },
  {
    slug: blackFamilyCourseSlug('d4-d5', 'albin'),
    title: 'Albin Countergambit',
    openingFamily: 'Albin Countergambit',
    browseFamilySlug: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5', 'c2c4', 'e7e5'],
  },
  {
    slug: blackFamilyCourseSlug('d4-d5', 'other'),
    title: '1.d4 d5 — Other',
    openingFamily: "Queen's Pawn Game",
    browseFamilySlug: 'd4-d5',
    prefixUci: ['d2d4', 'd7d5'],
    excludePrefixesUci: [
      ['d2d4', 'd7d5', 'c2c4'], // Queen's Gambit lines (qgd / slav / semi-slav / qga / …)
      ['d2d4', 'd7d5', 'g1f3', 'g8f6', 'c1f4'], // London; owned by vs-london
      ['d2d4', 'd7d5', 'e2e3'], // Colle; owned by vs-colle
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
  {
    slug: blackFamilyCourseSlug('french', 'other'),
    title: 'French — Other',
    openingFamily: 'French Defense',
    browseFamilySlug: 'french',
    prefixUci: ['e2e4', 'e7e6'],
    // Named main-line French leaves own these longer prefixes.
    excludePrefixesUci: [
      ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'e4e5', 'c7c5'],
      ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1d2'],
      ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'e4d5', 'e6d5'],
      ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'f8b4'],
      ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'g8f6'],
      ['e2e4', 'e7e6', 'd2d4', 'd7d5', 'b1c3', 'd5e4'],
    ],
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
    // Canonical …e6 then …b6; skip early …b6 move order (transposes, rarer).
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'b7b6'],
    // additionalPrefixesUci: [['d2d4', 'g8f6', 'c2c4', 'b7b6']],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'bogo'),
    title: 'Bogo-Indian',
    openingFamily: 'Bogo-Indian Defense',
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'f8b4'],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'e6'),
    title: 'Indian — …e6',
    openingFamily: 'Indian Defense',
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e6'],
    excludePrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4'], // Nimzo-Indian; owned by nimzo
      ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'b7b6'], // Queen's Indian; owned by queens-indian
      ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'f8b4'], // Bogo-Indian; owned by bogo
    ],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'budapest'),
    title: 'Budapest Gambit',
    openingFamily: 'Budapest Gambit',
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'e7e5'],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'old-indian'),
    title: 'Old Indian',
    openingFamily: 'Old Indian Defense',
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'd7d6'],
    // King's Indian via ...d6 then ...g6; owned by kings-indian.
    excludePrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'd7d6', 'b1c3', 'g7g6'],
      ['d2d4', 'g8f6', 'c2c4', 'd7d6', 'g1f3', 'g7g6'],
    ],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'benoni'),
    title: 'Benoni',
    openingFamily: 'Benoni Defense',
    browseFamilySlug: 'benoni',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'c7c5'],
    // Benko Gambit (...b5); owned by benko.
    excludePrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'c7c5', 'd4d5', 'b7b5'],
    ],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'benko'),
    title: 'Benko Gambit',
    openingFamily: 'Benko Gambit',
    browseFamilySlug: 'benoni',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'c7c5', 'd4d5', 'b7b5'],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'old-benoni'),
    title: 'Old Benoni',
    openingFamily: 'Benoni Defense',
    browseFamilySlug: 'benoni',
    prefixUci: ['d2d4', 'c7c5'],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'kings-indian'),
    title: "King's Indian",
    openingFamily: "King's Indian Defense",
    browseFamilySlug: 'indian',
    // Canonical …g6; skip …d6-then-…g6 move order (transposes, less common).
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'g7g6'],
    // additionalPrefixesUci: [
    //   ['d2d4', 'g8f6', 'c2c4', 'd7d6', 'b1c3', 'g7g6'],
    //   ['d2d4', 'g8f6', 'c2c4', 'd7d6', 'g1f3', 'g7g6'],
    // ],
    // Grünfeld (...d5 after ...g6); owned by grunfeld.
    excludePrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5'],
      ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'g1f3', 'd7d5'],
    ],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'grunfeld'),
    title: 'Grünfeld',
    openingFamily: 'Grünfeld Defense',
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'b1c3', 'd7d5'],
    additionalPrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'g7g6', 'g1f3', 'd7d5'],
    ],
  },
  {
    slug: blackFamilyCourseSlug('indian', 'other'),
    title: 'Indian — Other',
    openingFamily: 'Indian Defense',
    browseFamilySlug: 'indian',
    prefixUci: ['d2d4', 'g8f6'],
    // Named 2.c4 Indian / Benoni leaves own these longer prefixes.
    excludePrefixesUci: [
      ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'b1c3', 'f8b4'],
      ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'b7b6'],
      ['d2d4', 'g8f6', 'c2c4', 'b7b6'],
      ['d2d4', 'g8f6', 'c2c4', 'e7e6', 'g1f3', 'f8b4'],
      ['d2d4', 'g8f6', 'c2c4', 'e7e6'],
      ['d2d4', 'g8f6', 'c2c4', 'e7e5'],
      ['d2d4', 'g8f6', 'c2c4', 'd7d6'],
      ['d2d4', 'g8f6', 'c2c4', 'c7c5'],
      ['d2d4', 'g8f6', 'c2c4', 'g7g6'],
    ],
  },

  // --- Leaf families ---
  {
    slug: blackFamilyCourseSlug('dutch', 'main'),
    title: 'Dutch',
    openingFamily: 'Dutch Defense',
    browseFamilySlug: 'dutch',
    prefixUci: ['d2d4', 'f7f5'],
  },
  {
    slug: blackFamilyCourseSlug('modern', 'vs-e4'),
    title: 'Modern vs 1.e4',
    openingFamily: 'Modern Defense',
    browseFamilySlug: 'modern',
    // Keeps …g6 lines including …d6 (Pirc course is canonical …d6 only).
    prefixUci: ['e2e4', 'g7g6'],
    // Pirc via Modern move order (...g6 then ...d6); was owned by pirc.
    // excludePrefixesUci: [
    //   ['e2e4', 'g7g6', 'd2d4', 'f8g7', 'b1c3', 'd7d6'],
    // ],
  },
  {
    slug: blackFamilyCourseSlug('modern', 'vs-d4'),
    title: 'Modern vs 1.d4',
    openingFamily: 'Modern Defense',
    browseFamilySlug: 'modern',
    prefixUci: ['d2d4', 'g7g6'],
  },
  {
    slug: blackFamilyCourseSlug('scandinavian', 'main'),
    title: 'Scandinavian',
    openingFamily: 'Scandinavian Defense',
    browseFamilySlug: 'scandinavian',
    prefixUci: ['e2e4', 'd7d5'],
  },
  {
    slug: blackFamilyCourseSlug('pirc', 'main'),
    title: 'Pirc',
    openingFamily: 'Pirc Defense',
    browseFamilySlug: 'pirc',
    // Canonical …d6; …g6 move order stays on Modern.
    prefixUci: ['e2e4', 'd7d6'],
    // additionalPrefixesUci: [
    //   ['e2e4', 'g7g6', 'd2d4', 'f8g7', 'b1c3', 'd7d6'],
    // ],
  },
  {
    slug: blackFamilyCourseSlug('alekhine', 'main'),
    title: 'Alekhine',
    openingFamily: 'Alekhine Defense',
    browseFamilySlug: 'alekhine',
    prefixUci: ['e2e4', 'g8f6'],
  },
  {
    slug: blackFamilyCourseSlug('nimzowitsch', 'main'),
    title: 'Nimzowitsch Defense',
    openingFamily: 'Nimzowitsch Defense',
    browseFamilySlug: 'nimzowitsch',
    prefixUci: ['e2e4', 'b8c6'],
  },
  {
    slug: blackFamilyCourseSlug('owen', 'main'),
    title: "Owen's Defense",
    openingFamily: "Owen's Defense",
    browseFamilySlug: 'owen',
    prefixUci: ['e2e4', 'b7b6'],
  },
  {
    slug: blackFamilyCourseSlug('e4-e5', 'main'),
    title: '1.e4 e5',
    openingFamily: "King's Pawn Game",
    browseFamilySlug: 'e4-e5',
    prefixUci: ['e2e4', 'e7e5'],
    // Petrov is its own leaf course.
    excludePrefixesUci: [['e2e4', 'e7e5', 'g1f3', 'g8f6']],
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
  {
    slug: 'benoni',
    title: 'Benoni & Benko',
    order: 80,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'benoni').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'dutch',
    title: 'Dutch Defense',
    order: 90,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'dutch').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'modern',
    title: 'Modern Defense',
    order: 100,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'modern').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'scandinavian',
    title: 'Scandinavian Defense',
    order: 110,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'scandinavian').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'pirc',
    title: 'Pirc Defense',
    order: 120,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'pirc').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'alekhine',
    title: 'Alekhine Defense',
    order: 130,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'alekhine').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'nimzowitsch',
    title: 'Nimzowitsch Defense',
    order: 140,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'nimzowitsch').map(
      (c) => c.slug,
    ),
  },
  {
    slug: 'owen',
    title: "Owen's Defense",
    order: 150,
    courseSlugs: BLACK_REPERTOIRE_COURSES.filter((c) => c.browseFamilySlug === 'owen').map(
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

/**
 * Collections that may own black repertoire forks.
 * Only `d4-d5` is a browse fork hub; `sicilian` is Other-handoff (2.Nf3) only.
 */
export type BlackForkCollectionSlug = 'd4-d5' | 'sicilian';

/**
 * Browse families that auto-start a fork picker and filter the course list.
 * Sicilian keeps `black-sicilian-nf3` for Sicilian Other train handoff, but is
 * not a family-entry gate — named Sicilians stay always listed.
 */
export function isBlackForkCollectionFamily(
  slug: BlackBrowseFamilySlug,
): slug is BlackForkCollectionSlug {
  return slug === 'd4-d5';
}

/**
 * Course that should auto-prompt a black handoff picker before browse/train.
 * Named Sicilian leaves are never gated; only Sicilian Other.
 */
export function blackHandoffPickerCollectionForCourse(
  courseSlug: string,
): BlackForkCollectionSlug | null {
  if (courseSlug === blackFamilyCourseSlug('sicilian', 'other')) {
    return 'sicilian';
  }
  return null;
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
  alsoActivatesCourseSlugs?: readonly string[];
};

export type BlackRepertoireForkDef = {
  id: string;
  collection: BlackForkCollectionSlug;
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

/**
 * Sicilian Other stays listed regardless of Open setup picks.
 * Named Open leaves are activated only by fork selections (incl. nested).
 * Browse still shows every named leaf because Sicilian is not a fork hub.
 */
const SICILIAN_ALWAYS_ON_SLUGS = [
  blackFamilyCourseSlug('sicilian', 'other'),
] as const;

function prefixThroughForkMove(
  coursePrefixUci: readonly string[],
  forkMoveUci: string,
): readonly string[] {
  const forkAt = coursePrefixUci.indexOf(forkMoveUci);
  if (forkAt >= 0) {
    return coursePrefixUci.slice(0, forkAt + 1);
  }
  return coursePrefixUci;
}

function blackForkOption(
  collection: BlackForkCollectionSlug,
  courseKey: string,
  forkMoveUci: string,
  options?: {
    title?: string;
    settingsValue?: string;
    alsoActivatesCourseSlugs?: readonly string[];
  },
): BlackRepertoireForkOption {
  const course = BLACK_REPERTOIRE_COURSES.find(
    (entry) => entry.slug === blackFamilyCourseSlug(collection, courseKey),
  );
  if (!course) {
    throw new Error(`Missing black ${collection} course: ${courseKey}`);
  }
  return {
    slug: courseKey,
    courseSlug: course.slug,
    title: options?.title ?? course.title,
    // Stop at this decision's reply — not the course's deep tabiya.
    prefixUci: prefixThroughForkMove(course.prefixUci, forkMoveUci),
    forkMoveUci,
    settingsValue: options?.settingsValue,
    alsoActivatesCourseSlugs: options?.alsoActivatesCourseSlugs,
  };
}

export const BLACK_REPERTOIRE_FORKS: readonly BlackRepertoireForkDef[] = [
  {
    id: 'black-d4-d5-c4',
    collection: 'd4-d5',
    branchPrefixUci: ['d2d4', 'd7d5', 'c2c4'],
    title: 'Choose your defense to 2.c4',
    options: [
      blackForkOption('d4-d5', 'qgd', 'e7e6'),
      blackForkOption('d4-d5', 'slav', 'c7c6'),
      blackForkOption('d4-d5', 'semi-slav', 'c7c6', {
        alsoActivatesCourseSlugs: [
          blackFamilyCourseSlug('d4-d5', 'semi-slav-other'),
        ],
      }),
      blackForkOption('d4-d5', 'qga', 'd5c4'),
      blackForkOption('d4-d5', 'chigorin', 'b8c6'),
      blackForkOption('d4-d5', 'albin', 'e7e5'),
    ],
  },
  {
    /**
     * Handoff from Sicilian Other at 2.Nf3. Nested pickers specialize
     * …d6 / …e6 Open setups; …Nc6 goes straight to Sveshnikov.
     */
    id: 'black-sicilian-nf3',
    collection: 'sicilian',
    branchPrefixUci: ['e2e4', 'c7c5', 'g1f3'],
    title: 'Sicilian Other: choose your 2.Nf3 reply',
    options: [
      blackForkOption('sicilian', 'najdorf', 'd7d6', {
        title: '2…d6',
        settingsValue: 'd6',
      }),
      blackForkOption('sicilian', 'sveshnikov', 'b8c6', {
        title: '2…Nc6',
        settingsValue: 'nc6',
      }),
      blackForkOption('sicilian', 'taimanov', 'e7e6', {
        title: '2…e6',
        settingsValue: 'e6',
      }),
    ],
  },
  {
    id: 'black-sicilian-d6-nc3',
    collection: 'sicilian',
    branchPrefixUci: [
      'e2e4',
      'c7c5',
      'g1f3',
      'd7d6',
      'd2d4',
      'c5d4',
      'f3d4',
      'g8f6',
      'b1c3',
    ],
    title: 'Open Sicilian: choose your setup after 5.Nc3',
    requiresFork: { id: 'black-sicilian-nf3', settingsValue: 'd6' },
    options: [
      blackForkOption('sicilian', 'najdorf', 'a7a6', {
        title: '5…a6 (Najdorf)',
        settingsValue: 'a6',
      }),
      blackForkOption('sicilian', 'dragon', 'g7g6', {
        title: '5…g6 (Dragon)',
        settingsValue: 'g6',
      }),
      blackForkOption('sicilian', 'classical', 'b8c6', {
        title: '5…Nc6 (Classical)',
        settingsValue: 'nc6',
      }),
      // Scheveningen often has too few elite lines at local 4/8 to publish.
    ],
  },
  {
    id: 'black-sicilian-e6-open',
    collection: 'sicilian',
    branchPrefixUci: [
      'e2e4',
      'c7c5',
      'g1f3',
      'e7e6',
      'd2d4',
      'c5d4',
      'f3d4',
    ],
    title: 'Open Sicilian: choose your setup after 4.Nxd4',
    requiresFork: { id: 'black-sicilian-nf3', settingsValue: 'e6' },
    options: [
      blackForkOption('sicilian', 'taimanov', 'b8c6', {
        title: '4…Nc6 (Taimanov)',
        settingsValue: 'nc6',
      }),
      blackForkOption('sicilian', 'kan', 'a7a6', {
        title: '4…a6 (Kan)',
        settingsValue: 'a6',
      }),
    ],
  },
] as const;

export function blackForksForCollection(
  collection: BlackForkCollectionSlug,
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
  collection: BlackForkCollectionSlug,
  forks: Record<string, string> | undefined,
): BlackRepertoireForkDef[] {
  return blackForksForCollection(collection).filter((fork) => {
    if (!blackForkApplies(fork, forks)) return false;
    const value = forks?.[fork.id];
    if (!value) return true;
    return !isValidBlackForkSelection(fork.id, value);
  });
}

export function autoIncludedBlackCourseSlugs(
  collection: BlackForkCollectionSlug,
): string[] {
  if (collection === 'd4-d5') return [...D4_D5_ALWAYS_ON_SLUGS];
  if (collection === 'sicilian') return [...SICILIAN_ALWAYS_ON_SLUGS];
  return [];
}

export function activeBlackSystemCourseSlugs(
  collection: BlackForkCollectionSlug,
  forks: Record<string, string> | undefined,
): string[] {
  const slugs: string[] = [];
  for (const fork of blackForksForCollection(collection)) {
    if (!blackForkApplies(fork, forks)) continue;
    const value = forks?.[fork.id];
    if (!value || !isValidBlackForkSelection(fork.id, value)) continue;
    const option = fork.options.find(
      (entry) => (entry.settingsValue ?? entry.courseSlug) === value,
    );
    if (!option) continue;
    // Parent gateway choices (e.g. 2…d6) defer leaf activation to nested forks.
    const nestedSpecializes = BLACK_REPERTOIRE_FORKS.some(
      (child) =>
        child.collection === collection &&
        child.requiresFork?.id === fork.id &&
        child.requiresFork.settingsValue === value,
    );
    if (!nestedSpecializes) {
      slugs.push(option.courseSlug);
      if (option.alsoActivatesCourseSlugs?.length) {
        slugs.push(...option.alsoActivatesCourseSlugs);
      }
    }
  }
  return slugs;
}

export function activeBlackCollectionCourseSlugs(
  collection: BlackForkCollectionSlug,
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
