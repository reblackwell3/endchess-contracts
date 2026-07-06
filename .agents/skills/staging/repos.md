# Endchess monorepo — /staging repo list

Base path: `/Users/robert/code/endchess/`

## Staging apps (`dev` → `staging`)

Deploy apps promote `dev` → `staging` only. Production is a manual **staging → main** PR.

| Repo | Path |
| --- | --- |
| endchess-frontend | `/Users/robert/code/endchess/endchess-frontend` |
| endchess-backend | `/Users/robert/code/endchess/endchess-backend` |
| endchess-workers | `/Users/robert/code/endchess/endchess-workers` |

## Main repos (`dev` → `main`)

Run in this order when possible (dependencies flow downward).

| Repo | Path |
| --- | --- |
| endchess-models | `/Users/robert/code/endchess/endchess-models` |
| react-chess-core | `/Users/robert/code/endchess/react-chess-core` |
| react-chess-explorer | `/Users/robert/code/endchess/react-chess-explorer` |
| react-chess-puzzle-kit | `/Users/robert/code/endchess/react-chess-puzzle-kit` |
| react-chess-replay-trainer | `/Users/robert/code/endchess/react-chess-replay-trainer` |
| endchess-contracts | `/Users/robert/code/endchess/endchess-contracts` |
| endchess-batch-import | `/Users/robert/code/endchess/endchess-batch-import` |
| endchess-course-builder | `/Users/robert/code/endchess/endchess-course-builder` |

## Retired (skip unless present and user explicitly includes)

- endchess-publisher
- endchess-import-consumer
- endchess-analysis-consumer
- endchess-api-settings (renamed → endchess-contracts)
