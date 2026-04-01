// Free spins feature configuration
export const FREE_SPINS_INITIAL_AWARD = 10;
export const FREE_SPINS_RETRIGGER_AWARD = 3;

export const SLOT_RENDER_CONFIG = {
  backgroundColor: 0x0c0f1a,
  maxViewportScale: 1,
  viewportScaleDivisor: 2,
  screenCenterDivisor: 2,
};

// Win field (Pixi overlay) layout and typography
export const WIN_FIELD_FONT_SIZE = 80;
export const WIN_FIELD_INITIAL_TEXT = '0';
export const WIN_FIELD_TEXT_Y_OFFSET = 15;
export const WIN_FIELD_BOTTOM_OFFSET = 300;
export const WIN_FIELD_HORIZONTAL_OFFSET = 750;
export const WIN_FIELD_TEXT_COLOR = 0xffffff;
export const WIN_FIELD_SPRITE_SCALE = 1;
export const WIN_FIELD_STROKE_COLOR = 0x111827;
export const WIN_FIELD_STROKE_WIDTH = 8;
export const WIN_FIELD_DROP_SHADOW_COLOR = 0x000000;
export const WIN_FIELD_DROP_SHADOW_ALPHA = 0.35;
export const WIN_FIELD_DROP_SHADOW_ANGLE = Math.PI / 4;
export const WIN_FIELD_DROP_SHADOW_DISTANCE = 4;
export const WIN_FIELD_DROP_SHADOW_BLUR = 0;
export const WIN_FIELD_LETTER_SPACING = 1.5;
export const WIN_FIELD_TEXT_BG_WIDTH = 376;
export const WIN_FIELD_TEXT_BG_HEIGHT = 102;
export const WIN_FIELD_TEXT_BG_RADIUS = 8;
export const WIN_FIELD_TEXT_BG_COLOR = 0x000000;
export const WIN_FIELD_TEXT_BG_ALPHA = 0.45;

// Feature view (free spins overlay) layout and styling
export const FEATURE_VIEW_X_OFFSET = 740;
export const FEATURE_VIEW_Y_OFFSET_FROM_CENTER = 60;
export const FEATURE_VIEW_PORTRAIT_X = 750;
export const FEATURE_VIEW_PORTRAIT_Y = 225;
export const FEATURE_BG_WIDTH = 370;
export const FEATURE_BG_HEIGHT = 150;
export const FEATURE_BG_RADIUS = 12;
export const FEATURE_BG_ALPHA = 0.35;
export const FEATURE_TITLE_Y_OFFSET = -40;
export const FEATURE_COUNTER_Y_OFFSET = 20;
export const FEATURE_TITLE_FONT_SIZE = 48;
export const FEATURE_COUNTER_FONT_SIZE = 80;
export const FEATURE_TITLE_COLOR = 0xfff176;
export const FEATURE_COUNTER_COLOR = 0xffffff;
export const FEATURE_HIDDEN_VALUE: null = null;

// Character spine layout tuning
export const CHARACTER_TARGET_HEIGHT = 420;
export const CHARACTER_FALLBACK_SKELETON_HEIGHT = 617;
export const CHARACTER_X_RATIO = 0.12;
export const CHARACTER_Y_RATIO = 0.70;
export const CHARACTER_PORTRAIT_X = 207;
export const CHARACTER_PORTRAIT_Y = 552;
export const CHARACTER_REACTION_MIX_DURATION = 0.2;
export const CHARACTER_IDLE_RETURN_MIX_DURATION = 0.25;

// Symbol view fallback + win animation tuning
export const SYMBOL_FALLBACK_CORNER_RADIUS = 16;
export const SYMBOL_FALLBACK_FONT_SIZE = 20;
export const SYMBOL_FALLBACK_BG_COLOR = 0x1f2937;
export const SYMBOL_FALLBACK_TEXT_COLOR = 0xf9fafb;
export const SYMBOL_WIN_ANIMATION_CONFIG = {
  duration: 0.25,
  shakeOffsetX: 3,
};
