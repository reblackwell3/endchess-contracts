export const DURABLE_QUEUE_OPTIONS = { durable: true } as const;

export const SETUP_IMPORT_QUEUE_OPTIONS = {
  durable: true,
  maxPriority: 10,
} as const;
