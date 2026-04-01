export type GameOrientation = 'landscape' | 'portrait';

export const LANDSCAPE_GAME_WIDTH = 1920;
export const LANDSCAPE_GAME_HEIGHT = 1080;
export const PORTRAIT_GAME_WIDTH = 1080;
export const PORTRAIT_GAME_HEIGHT = 1920;

// Default dimensions keep existing behavior for non-orientation-aware call sites.
export const GAME_WIDTH = LANDSCAPE_GAME_WIDTH;
export const GAME_HEIGHT = LANDSCAPE_GAME_HEIGHT;

export const GAME_DIMENSIONS_BY_ORIENTATION: Readonly<
  Record<GameOrientation, Readonly<{ width: number; height: number }>>
> = {
  landscape: { width: LANDSCAPE_GAME_WIDTH, height: LANDSCAPE_GAME_HEIGHT },
  portrait: { width: PORTRAIT_GAME_WIDTH, height: PORTRAIT_GAME_HEIGHT },
};

export function getGameDimensionsByOrientation(
  orientation: GameOrientation
): Readonly<{ width: number; height: number }> {
  return GAME_DIMENSIONS_BY_ORIENTATION[orientation];
}
