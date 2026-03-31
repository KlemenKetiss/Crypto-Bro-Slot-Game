import { useCallback, useEffect, useRef } from 'react';
import {
  BET_HOLD_DELAY_MS,
  BET_HOLD_REPEAT_INTERVAL_MS,
} from '../utils/config';

/**
 * Hold-to-repeat for bet ±: one step immediately, then after {@link BET_HOLD_DELAY_MS}
 * an interval at {@link BET_HOLD_REPEAT_INTERVAL_MS}. Matches the HTML panel’s bet ± hold behavior.
 */
export function useBetHold(
  onStep: (direction: 'up' | 'down') => void,
): {
  startBetHold: (direction: 'up' | 'down') => void;
  stopBetHold: () => void;
  stepBet: (direction: 'up' | 'down') => void;
} {
  const onStepRef = useRef(onStep);
  onStepRef.current = onStep;

  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const didAutoRepeatRef = useRef(false);

  const stopBetHold = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const startBetHold = useCallback(
    (direction: 'up' | 'down') => {
      stopBetHold();
      didAutoRepeatRef.current = false;
      timeoutRef.current = window.setTimeout(() => {
        didAutoRepeatRef.current = true;
        onStepRef.current(direction);
        intervalRef.current = window.setInterval(() => {
          onStepRef.current(direction);
        }, BET_HOLD_REPEAT_INTERVAL_MS);
      }, BET_HOLD_DELAY_MS);
    },
    [stopBetHold],
  );

  const stepBet = useCallback((direction: 'up' | 'down') => {
    // Ignore the synthetic click fired after a hold-triggered auto-repeat.
    if (didAutoRepeatRef.current) {
      didAutoRepeatRef.current = false;
      return;
    }
    onStepRef.current(direction);
  }, []);

  useEffect(() => () => stopBetHold(), [stopBetHold]);

  return { startBetHold, stopBetHold, stepBet };
}
