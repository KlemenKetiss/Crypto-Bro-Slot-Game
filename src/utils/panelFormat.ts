import {
  PANEL_AMOUNT_MAX_FRACTION_DIGITS,
  PANEL_AMOUNT_MIN_FRACTION_DIGITS,
  PANEL_AMOUNT_ROUNDING_MULTIPLIER,
} from './config';

/** Same trimming rules as the HTML panel (`GamePanel` / `ReactPanelAdapter`). */
export function formatPanelAmount(value: number): string {
  if (!Number.isFinite(value)) return '0';
  const roundedToCents =
    Math.round(value * PANEL_AMOUNT_ROUNDING_MULTIPLIER) /
    PANEL_AMOUNT_ROUNDING_MULTIPLIER;
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: PANEL_AMOUNT_MIN_FRACTION_DIGITS,
    maximumFractionDigits: PANEL_AMOUNT_MAX_FRACTION_DIGITS,
  }).format(roundedToCents);
}
