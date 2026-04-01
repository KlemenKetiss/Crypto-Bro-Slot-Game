export const PANEL_CONFIG = {
  initialBalance: 500,
};

// Bet ladder tuned for a smaller 3x3 game (can be adjusted later)
export const BET_LEVELS: number[] = [0.2, 0.5, 1, 2, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
export const DEFAULT_BET_INDEX = 2; // 1 credit

// After a short delay, start repeating while held.
export const BET_HOLD_DELAY_MS = 350;
export const BET_HOLD_REPEAT_INTERVAL_MS = 120;

// Number formatting for panel values (credits/win)
export const PANEL_AMOUNT_ROUNDING_MULTIPLIER = 100;
export const PANEL_AMOUNT_MIN_FRACTION_DIGITS = 0;
export const PANEL_AMOUNT_MAX_FRACTION_DIGITS = 2;
