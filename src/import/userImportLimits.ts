export const FREE_USER_IMPORTED_GAMES = 5;
export const PRO_USER_IMPORTED_GAMES = 100;

export function userImportedGamesLimit(hasFullAccess: boolean): number {
  return hasFullAccess ? PRO_USER_IMPORTED_GAMES : FREE_USER_IMPORTED_GAMES;
}
