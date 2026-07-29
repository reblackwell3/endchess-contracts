import {
  BLACK_REPERTOIRE_FORKS,
  type BlackBrowseFamilySlug,
  type BlackRepertoireForkDef,
} from './blackRepertoireCatalog';
import {
  WHITE_REPERTOIRE_FORKS,
  type WhiteRepertoireCollection,
  type WhiteRepertoireForkDef,
} from './whiteRepertoireCatalog';

export type RepertoirePickerCollectionKey =
  | WhiteRepertoireCollection
  | BlackBrowseFamilySlug;

export type RepertoirePickerOptionDef = {
  /** Value persisted in the user's repertoire fork settings. */
  settingsValue: string;
  /** Course that owns the continuation selected by this value. */
  courseSlug: string;
  title: string;
  forkMoveUci: string;
};

export type RepertoirePickerDecisionDef = {
  /** Stable identifier used as the key in repertoire fork settings. */
  decisionId: string;
  /** White collection or Black browse family containing this decision. */
  collectionKey: RepertoirePickerCollectionKey;
  trainSide: 'w' | 'b';
  /**
   * Move path from the initial position to the decision.
   * Consumers with a chess dependency can normalize this to FEN/positionKey.
   */
  branchPrefixUci: readonly string[];
  options: readonly RepertoirePickerOptionDef[];
};

type ExistingRepertoireForkDef =
  | WhiteRepertoireForkDef
  | BlackRepertoireForkDef;

function normalizeFork(
  fork: ExistingRepertoireForkDef,
  trainSide: 'w' | 'b',
): RepertoirePickerDecisionDef {
  return {
    decisionId: fork.id,
    collectionKey: fork.collection,
    trainSide,
    branchPrefixUci: fork.branchPrefixUci,
    options: fork.options.map((option) => ({
      settingsValue: option.settingsValue ?? option.courseSlug,
      courseSlug: option.courseSlug,
      title: option.title,
      forkMoveUci: option.forkMoveUci,
    })),
  };
}

/**
 * Authoritative ownership definitions for every existing repertoire picker.
 *
 * This intentionally derives from the side-specific catalogs so their existing
 * APIs remain the source of truth while builders and publishers can consume one
 * normalized shape.
 */
export const REPERTOIRE_PICKER_DECISIONS: readonly RepertoirePickerDecisionDef[] =
  [
    ...WHITE_REPERTOIRE_FORKS.map((fork) => normalizeFork(fork, 'w')),
    ...BLACK_REPERTOIRE_FORKS.map((fork) => normalizeFork(fork, 'b')),
  ];

export function getRepertoirePickerDecision(
  decisionId: string,
): RepertoirePickerDecisionDef | undefined {
  return REPERTOIRE_PICKER_DECISIONS.find(
    (decision) => decision.decisionId === decisionId,
  );
}
