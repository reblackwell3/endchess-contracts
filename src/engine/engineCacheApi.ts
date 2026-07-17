/** One MultiPV line of cached browser engine analysis. */
export type EngineCacheLineDto = {
  multipv: number;
  depth: number;
  centipawns: number | null;
  mate: number | null;
  pv: string[];
};

/** Cached MultiPV analysis for a setup position. */
export type EnginePositionAnalysisDto = {
  fen: string;
  depth: number;
  multiPv: number;
  lines: EngineCacheLineDto[];
};

/** GET /engine/positions?fen= — null analysis means cold cache, not an error. */
export type GetEnginePositionResponse = {
  analysis: EnginePositionAnalysisDto | null;
};

/** PUT /engine/positions */
export type PutEnginePositionRequest = EnginePositionAnalysisDto;

/** Cached refutation of a wrong move from a setup position. */
export type EngineRefutationDto = {
  fen: string;
  wrongUci: string;
  refutationUci: string;
  refutationSan?: string;
  depth?: number;
};

/** GET /engine/refutations?fen=&wrongUci= — null refutation means cold cache. */
export type GetEngineRefutationResponse = {
  refutation: EngineRefutationDto | null;
};

/** PUT /engine/refutations */
export type PutEngineRefutationRequest = EngineRefutationDto;

/** Validation caps for crowdsourced engine cache writes. */
export const ENGINE_CACHE_MAX_LINES = 8;
export const ENGINE_CACHE_MAX_PV_PLIES = 30;
export const ENGINE_CACHE_MAX_DEPTH = 30;
