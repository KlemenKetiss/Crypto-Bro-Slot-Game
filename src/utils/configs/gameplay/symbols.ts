// Symbol set matching the new assets under assets/images/symbols.
export const SYMBOLS: string[] = [
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
  'M1',
  'M2',
  'M3',
  'M4',
  'M5',
  'M6',
  'H1',
  'H2',
  'H3',
  'H4',
  'H5',
  'H6',
  'BONUS',
];

/** Relative pick weights (same order as SYMBOLS). Higher = more common on reels. */
export const SYMBOL_WEIGHTS: number[] = [
  // Royals / low payers
  30, 30, 30, 30, 30, 30,
  // Mids M1-M6 (descending)
  24, 22, 20, 18, 16, 14,
  // High tiers H1-H3
  7, 6, 5,
  // Premiums H4-H6
  3, 2, 2,
  // Feature (kept rarer than mids; ReelsView still caps one BONUS per reel)
  3,
];

// Forced outcomes aligned with the new symbol set.
export const FORCE_STOP_SETS: Array<Array<Array<string>>> = [
  [
    ['H6', 'H5', 'H6'],
    ['H6', 'H6', 'H4'],
    ['H6', 'H6', 'H3'],
    ['H6', 'H2', 'H6'],
    ['H6', 'H1', 'H6'],
  ],
  [
    ['BONUS', 'Q', '10'],
    ['K', 'BONUS', 'J'],
    ['A', '9', 'BONUS'],
    ['M3', 'J', 'Q'],
    ['10', 'M3', 'K'],
  ],
  [
    ['K', 'K', 'A'],
    ['Q', 'K', 'K'],
    ['K', 'J', 'K'],
    ['K', 'A', 'Q'],
    ['J', 'K', '10'],
  ],
  [
    ['9', '10', 'J'],
    ['Q', 'K', 'A'],
    ['M1', 'M2', 'M3'],
    ['M4', 'M5', 'M6'],
    ['H1', 'H2', 'H3'],
  ],
];

export const FORCE_OUTCOME_LABELS: ReadonlyArray<string> = [
  'High win',
  'Bonus',
  'Medium win',
  'No win',
];

// Payouts per symbol and matches; values are per-way multipliers.
export const SYMBOL_PAYOUTS: { [key: string]: { [matches: number]: number } } = {
  '9': { 3: 2, 4: 4, 5: 8 },
  '10': { 3: 2.5, 4: 5, 5: 10 },
  J: { 3: 3, 4: 6, 5: 12 },
  Q: { 3: 3.5, 4: 7, 5: 14 },
  K: { 3: 4, 4: 8, 5: 16 },
  A: { 3: 5, 4: 10, 5: 20 },
  M1: { 3: 6, 4: 12, 5: 24 },
  M2: { 3: 7, 4: 14, 5: 28 },
  M3: { 3: 8, 4: 16, 5: 32 },
  M4: { 3: 9, 4: 18, 5: 36 },
  M5: { 3: 10, 4: 20, 5: 40 },
  M6: { 3: 12, 4: 24, 5: 48 },
  H1: { 3: 14, 4: 28, 5: 56 },
  H2: { 3: 16, 4: 32, 5: 64 },
  H3: { 3: 18, 4: 36, 5: 72 },
  H4: { 3: 20, 4: 40, 5: 80 },
  H5: { 3: 24, 4: 48, 5: 96 },
  H6: { 3: 30, 4: 60, 5: 120 },
  BONUS: { 3: 0, 4: 0, 5: 0 },
};
