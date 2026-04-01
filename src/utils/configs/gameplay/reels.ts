import { GAME_WIDTH } from '../core/dimensions';

// Symbol and reel layout for a 3x3 grid
export const SYMBOL_WIDTH = 110;
export const SYMBOL_HEIGHT = 110;

// Reel frame layout and scaling
export const REEL_FRAME_Y_OFFSET = 10;
export const REEL_FRAME_SCALE = 1.1;

export const REELS_CONFIG = {
  numReels: 5,
  numRows: 3,
  reelWidth: SYMBOL_WIDTH,
  symbolHeight: SYMBOL_HEIGHT,
  reelSpacing: 0,
  symbolSpacing: 0,
  yOffset: 80,
  screenWidth: GAME_WIDTH,
  bonusSymbolThreshold: 3,
  maskColor: 0xffffff,
};

// Reels layout tuning inside the frame
export const REEL_FRAME_INNER_PADDING_SCALE = 0.98;
export const REELS_MAX_FIT_SCALE = 1.7;

// Reel separators layout (between reels)
export const REEL_SEPARATOR_X_OFFSET = 130;
export const REEL_SEPARATOR_Y_OFFSET = -30;
export const SEPERATOR_START_OFFSET = 0;

export const REEL_ANIMATION_CONFIG = {
  virtualReelLength: 20,
  delayPerReel: 0.12,
  duration: 0.9,
  settleDelay: 0.4,
};

// Ways config: minimum reels required and default matches
export const WINNING_WAYS_CONFIG = {
  minReelsForWin: 3,
  defaultNumMatches: 3,
};

export const SYMBOL_WIN_DIMMED_ALPHA = 0.5;
export const INITIAL_WIN = 0;
